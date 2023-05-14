const express = require('express')
const loginRouter = express.Router()

loginRouter.post("/admin/login", (req, res, next) => { 
    res.send("done adimn")
});
loginRouter.post("/login", (req, res, next) => {
    res.send("done user")
});
 module.exports = loginRouter