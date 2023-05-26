const { body } = require("express-validator")

const authorValidatorForCreate = [
  body("firstname").notEmpty().isAlpha().withMessage("First name is required "),
  body("lastname").isAlpha().withMessage("Last Name is required"),
  body("dateOfBirth").isDate().notEmpty().withMessage("date of birth is not valued"),
  body("category_id").isMongoId().notEmpty().withMessage("Categroy ID is not Found"),
];
const authorValidatorForUpdate = [
  body("id").notEmpty().isMongoId().withMessage(" Author ID is required "),
  body("firstname").notEmpty().isAlpha().withMessage("First name is required "),
  body("lastname").isAlpha().withMessage("Last Name is required"),
  body("dateOfBirth")
    .isDate()
    .notEmpty()
    .withMessage("date of birth is not valued"),
  body("category_id")
    .isMongoId()
    .notEmpty()
    .withMessage("Categroy ID is not Found"),
];

const authorValidatorForDelete = [
    body("id").notEmpty().isMongoId().withMessage("Author Id is required")
]


module.exports = {
  authorValidatorForCreate,
  authorValidatorForDelete,
  authorValidatorForUpdate,
};