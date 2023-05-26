const express = require("express");
const authorRouter = express.Router();
const authorControllers = require("../../Controllers/Author/authorController");
 const upload = require("../../core/upload_Image/uploadImage");
const {
  authorValidatorForCreate,
  authorValidatorForDelete,
  authorValidatorForUpdate,
} = require("../../core/Validation/authorValidation");
const {checkValidation}=require("../../core/checkValidation/checkValidation")
authorRouter
  .route("/admin/authors")
  .get(authorControllers.getAllAuthors)
  .post(
    upload.single("file"),
    authorValidatorForCreate,
    checkValidation,
    authorControllers.createAuthor
  )
  .patch(
    upload.single("file"),
    authorValidatorForUpdate,
    checkValidation,
    authorControllers.updateAuthors
  )
  .delete(
    authorValidatorForDelete,
    checkValidation,
    authorControllers.deleteAuthors
  );

authorRouter.get("/admin/authors/:id", authorControllers.getOneAuthors);
module.exports = authorRouter;
