const express = require('express')
const loginRouter = express.Router()
const checklogin = require("../../Controllers/User/UserAuthintication")


loginRouter.post("/admin/login", checklogin);
loginRouter.post("/login", checklogin);
 module.exports = loginRouter