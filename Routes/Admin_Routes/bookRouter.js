const express = require("express");
const bookRouter = express.Router();
const bookController = require("../../Controllers/Book/bookController");
const upload = require("../../core/upload_Image/uploadImage");
const { bookValidationForCreate, bookValidationForUpdate, bookValidationForDelete } = require("../../core/Validation/bookValidation")
const {checkValidation}=require("../../core/checkValidation/checkValidation")
bookRouter
  .route("/admin/books")
  .get(bookController.getAllBooks)
  .post(
    upload.single("file"),
    bookValidationForCreate,
    checkValidation,
    bookController.createOneBook
  )
  .patch(
    upload.single("file"),
    bookValidationForUpdate,
    checkValidation,
    bookController.updateOneBook
  )
  .delete(
    bookValidationForDelete,
    checkValidation,
    bookController.deleteOneBook
  );
bookRouter.route("/admin/books/:id").get(bookController.getOneBook)
module.exports = bookRouter;
