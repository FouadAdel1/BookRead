const express = require("express");
const authorRouter = express.Router();
const authorControllers = require("../../Controllers/Author/authorController");

authorRouter
  .route("/admin/authors")
  .get(authorControllers.getAllAuthors)
  .post(authorControllers.createAuthor)
  .patch(authorControllers.upadteAuthors)
  .delete(authorControllers.deleteAuthors);

authorRouter.get("/admin/authors/:id", authorControllers.getOneAuthors);
module.exports = authorRouter;
