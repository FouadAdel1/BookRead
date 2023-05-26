
const { validationResult } = require("express-validator");

const checkValidation = (req, res, next) => {
    console.log("******************************")
    console.log(req.body)
    const result = validationResult(req);
    if (result.isEmpty()) {
       next()
    }
    else {
        const errors = result.errors.reduce((prev, cur) => {
            return prev+cur.path+":"+cur.msg+","
        },"")
        next({message:errors})
    }
        
}

module.exports = {
  checkValidation,
};