const express = require("express");
const bookRouter = express.Router();
const bookController = require("../../Controllers/Book/bookController");
const upload = require("../../core/upload_Image/uploadImage");
bookRouter
  .route("/admin/books")
  .get(bookController.getAllBooks)
  .post(upload.single("file"), bookController.createOneBook)
  .patch(upload.single("file"), bookController.updateOneBook)
  .delete(bookController.deleteOneBook);
bookRouter.route("/admin/books/:id").get(bookController.getOneBook)
module.exports = bookRouter;
