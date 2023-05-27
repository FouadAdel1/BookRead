const mongoose = require("mongoose");
const userModel = mongoose.model("User")
const jwt = require("jsonwebtoken");
const bycrypt = require("bcrypt");

// for making token if user done correct pw and email
// jwt.sign({data:mydata},mySecrtkeyfromEnv,{expiresIn:"1h"})

// for comparing hash password in data base and comming password
    // const match = await bycrypt.compare(password, user.password);

const checklogin = async (req, res, next) => {
  try {
      const password = req.body.password.toString();
    const user = await userModel.findOne({ email: req.body.email })
  const userPassword = user.password.toString();
    const match = await bycrypt.compare(password, user.password);
  if (user.email === "admin@gmail.com" && match) {
    let token=jwt.sign({ role: "admin", username: user.firstname ,id:user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
        res.status(200).json({sucess:"true",token:token})
  } else if (match) {
    let token = jwt.sign(
      { role: "user", username: user.firstname, id: user._id },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({sucess:"true", token: token });
  } else {
    next({ message: "password is not Valid" });
  }
  } catch (error) {
    next({ message: "email is not Valid" });
  }

}

module.exports=checklogin