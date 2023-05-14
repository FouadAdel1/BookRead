const express = require('express')
const bookRouter = express.Router();

bookRouter
  .route("/admin/books")
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

module.exports = bookRouter;