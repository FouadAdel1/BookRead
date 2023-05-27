const express = require("express");
const authorRouter = express.Router();
const authorControllers = require("../../Controllers/Author/authorController");
 const upload = require("../../core/upload_Image/uploadImage");
const {
  authorValidatorForCreate,
  authorValidatorForDelete,
  authorValidatorForUpdate,
} = require("../../core/Validation/authorValidation");
const { checkValidation } = require("../../core/checkValidation/checkValidation")
const {checkAdminAuth}=require("../../core/checkAuth/checkAuth")
authorRouter
  .route("/admin/authors")
  .get(checkAdminAuth, authorControllers.getAllAuthors)
  .post(
    checkAdminAuth,
    upload.single("file"),
    authorValidatorForCreate,
    checkValidation,
    authorControllers.createAuthor
  )
  .patch(
    checkAdminAuth,
    upload.single("file"),
    authorValidatorForUpdate,
    checkValidation,
    authorControllers.updateAuthors
  )
  .delete(
    checkAdminAuth,
    authorValidatorForDelete,
    checkValidation,
    authorControllers.deleteAuthors
  );

authorRouter.get(
  "/admin/authors/:id",
  checkAdminAuth,
  authorControllers.getOneAuthors
);
module.exports = authorRouter;
