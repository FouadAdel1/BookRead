const express = require("express");
const categoryRouter = express.Router();
const categoryControllers = require("../../Controllers/Category/categoryController");
categoryRouter
  .route("/admin/categories")
  .get(categoryControllers.getAllCatgeroy)
  .post(categoryControllers.createCategroy)
  .patch(categoryControllers.upadtecatgeroy)
  .delete(categoryControllers.deletecatgeroy);

module.exports = categoryRouter;
