const express = require("express");
const categoryRouter = express.Router();
const categoryControllers = require("../../Controllers/Category/categoryController");
const categoryValidator = require("../../core/Validation/categoryValidation");
const {
  checkValidation,
} = require("../../core/checkValidation/checkValidation");
const { checkAdminAuth } = require("../../core/checkAuth/checkAuth");

categoryRouter
  .route("/admin/categories")
  .get(checkAdminAuth, categoryControllers.getAllCatgeroy)
  .post(
    checkAdminAuth,
    categoryValidator.categoryValidatorForName,
    checkValidation,
    categoryControllers.createCategroy
  )
  .patch(
    checkAdminAuth,
    categoryValidator.categoryValidatorForNameAndId,
    checkValidation,
    categoryControllers.upadtecatgeroy
  )
  .delete(
    checkAdminAuth,
    categoryValidator.categoryValidatorForId,
    checkValidation,
    categoryControllers.deletecatgeroy
  );

module.exports = categoryRouter;
