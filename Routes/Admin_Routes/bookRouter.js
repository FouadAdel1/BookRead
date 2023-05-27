const express = require("express");
const bookRouter = express.Router();
const bookController = require("../../Controllers/Book/bookController");
const upload = require("../../core/upload_Image/uploadImage");
const { bookValidationForCreate, bookValidationForUpdate, bookValidationForDelete } = require("../../core/Validation/bookValidation")
const { checkValidation } = require("../../core/checkValidation/checkValidation")
const { checkAdminAuth } = require("../../core/checkAuth/checkAuth");
bookRouter
  .route("/admin/books")
  .get(checkAdminAuth, bookController.getAllBooks)
  .post(
    checkAdminAuth,
    upload.single("file"),
    bookValidationForCreate,
    checkValidation,
    bookController.createOneBook
  )
  .patch(
    checkAdminAuth,
    upload.single("file"),
    bookValidationForUpdate,
    checkValidation,
    bookController.updateOneBook
  )
  .delete(
    checkAdminAuth,
    bookValidationForDelete,
    checkValidation,
    bookController.deleteOneBook
  );
bookRouter
  .route("/admin/books/:id")
  .get(checkAdminAuth, bookController.getOneBook);
module.exports = bookRouter;
