const { validationResult } = require("express-validator");

const checkValidation = (req, res, next) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    next();
  } else {
    const errors = result.errors.reduce((prev, cur) => {
      return prev + cur.path + ":" + cur.msg + ",";
    }, "");
    next({ message: errors });
  }
};

module.exports = {
  checkValidation,
};
