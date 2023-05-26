const express = require("express");
const categoryRouter = express.Router();
const categoryControllers = require("../../Controllers/Category/categoryController");
const categoryValidator = require("../../core/Validation/categoryValidation");
const {checkValidation} = require("../../core/checkValidation/checkValidation")
categoryRouter
  .route("/admin/categories")
  .get(categoryControllers.getAllCatgeroy)
  .post(
    categoryValidator.categoryValidatorForName,
    checkValidation,
    categoryControllers.createCategroy
  )
  .patch(
    categoryValidator.categoryValidatorForNameAndId,
    checkValidation,
    categoryControllers.upadtecatgeroy
  )
  .delete(
    categoryValidator.categoryValidatorForId,
    checkValidation,
    categoryControllers.deletecatgeroy
  );

module.exports = categoryRouter;
