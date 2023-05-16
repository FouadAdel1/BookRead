const express = require("express");
const authorRouter = express.Router();
const authorControllers = require("../../Controllers/Author/authorController");
 const upload = require("../../core/upload_Image/uploadImage");

authorRouter
  .route("/admin/authors")
  .get(authorControllers.getAllAuthors)
  .post(upload.single("file"), authorControllers.createAuthor)
  .patch(upload.single("file"), authorControllers.updateAuthors)
  .delete(authorControllers.deleteAuthors);

authorRouter.get("/admin/authors/:id", authorControllers.getOneAuthors);
module.exports = authorRouter;
