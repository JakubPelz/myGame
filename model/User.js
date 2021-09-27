const mongoose = require('mongoose');


/* is better to use a timestamps instead of putting a property date when you create 
a Schema, example: UserSchema = new mongoose.Schema({property:{ }}, {timestamps: true}). 
In this way it creates a createdAt and updateAt and it automatically updates it. */


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 4,
        max: 255
    },
    email: {
        type: String,
        require: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        require: true,
        max: 1024,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
