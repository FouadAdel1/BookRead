const express = require("express");
const registerRouter = express.Router();
const upload = require("../../core/upload_Image/uploadImage");
const userController = require("../../Controllers/User/UserController");
const { userValidation } = require("../../core/Validation/userValidation");
const {
  checkValidation,
} = require("../../core/checkValidation/checkValidation");

registerRouter.post(
  "/register",
  upload.single("avatar"),
  userValidation,
  checkValidation,
  userController.createUser
);

module.exports = registerRouter;
