const { body } = require("express-validator");

const userValidation = [
  body("firstname").notEmpty().isAlpha().withMessage("first name is required"),
  body("lastname").notEmpty().isAlpha().withMessage("last name is required"),
  body("email").notEmpty().isEmail().withMessage("email is required"),
  body("password")
    .notEmpty()
    .isNumeric()
    .isLength({ min: 4, max: 10 })
    .withMessage(" password is not valid "),
  //validation for rating 
  // body("book_rate").isArray(),
  // body("book_rate.*.book_id")
  //   .isMongoId()
  //   .notEmpty()
  //   .withMessage(" Book Id is required"),
  // body("book_rate.*.rate").isNumeric().isLength({ max: 5 }).optional(),
  // body("book_rate.*.rate")
  //   .isAlpha()
  //   .notEmpty()
  //   .isIn(["read", "wantToRead", "reading"]),
];


module.exports = {
  userValidation,
};