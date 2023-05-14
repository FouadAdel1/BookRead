const express = require("express");
const registerRouter = express.Router();

registerRouter.post("/register", (req, res, next) => {
  res.send("done");
});

module.exports = registerRouter;