const express = require('express')
const categoryRouter = express.Router()

categoryRouter
  .route("/categories")
  .get((req, res, next) => {
    res.send("dome")
  })
  .post((req, res, next) => {
     res.send("dome");
  })
  .patch((req, res, next) => {
     res.send("dome");
  })
  .delete((req, res, next) => { 
       res.send("dome");
    });
categoryRouter.get('/categories/:id', (req, res, next) => { 
   res.send("dome");
})
module.exports = categoryRouter;