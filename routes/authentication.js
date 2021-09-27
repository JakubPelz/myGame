const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('../controller/validation');

//REGISTER
router.post('/register', async (req, res) => {
    //Validate user
    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        console.log('data is being sent to MongoDB database...')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Chceck if the user is already in the database
    const emailExist = await User.findOne({ email: req.body.email })
    if (emailExist) return res.status(400).send('Email already exists');

    //Create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    const savedUser = await user.save();
    res.send(savedUser);
});

//LOGIN
router.post('/login', async (req, res) => {
    //Lets validate login data
    const {error} = loginValidation(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
        // Chceck if the email exist
        const user = await User.findOne({email: req.body.email})
        if(!user) return res.status(400).send('Email is not found');
        // Password is correct
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if(!validPass) return res.status(400).send('Invalid password');

        //Create and assign a token
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
        res.header('auth-token', token).send(token);
});

module.exports = router;