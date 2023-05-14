const express = require("express");
const authorRouter = express.Router();

authorRouter
  .route("/authors")
    .get((req, res, next) => {
      res.send("done")
  })
    .post((req, res, next) => {
      res.send("done");
  })
    .patch((req, res, next) => {
      res.send("done");
  })
    .delete((req, res, next) => {
      res.send("done");
  });


authorRouter.get("/authors/:id", (req, res, next) => {
    res.send("done");
})
module.exports=authorRouter