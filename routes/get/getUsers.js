const getUsers = require("express").Router();
const users = require("../../model/User");
const cors = require('cors');

getUsers.get("/get-users", cors(), (req, res) => {
   users.find({} , (err, docs) => {
      if (err) {
          return res.status(400).send(error.detail[0].message);
      } else {
          return res.status(201).json({
              msg: "We allready get all Users",
              documents: docs
          })
      }
   })
});

module.exports = getUsers;
