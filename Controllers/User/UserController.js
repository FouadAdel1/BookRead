const mongoose = require("mongoose");
require("../../Models/UserSchema");
const bcrypt = require("bcrypt");
const UserModel = mongoose.model("User");
const saltRounds = 10;
var myPlaintextPassword = "";
const someOtherPlaintextPassword = "not_bacon";

const createUser = async (req, res, next) => {
    try {
      
    myPlaintextPassword = req.body.password;
    bcrypt.hash(myPlaintextPassword, saltRounds).then( (hash)=>{
      // Store hash in your password DB.
      var User = new UserModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hash,
        avatar: req.file.filename,
      });
        User.save();
    res.status(201).send("Register Done");
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
};
