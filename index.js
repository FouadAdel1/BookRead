const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 8080;
const adminAutherRouter = require("./Routes/Admin_Routes/authorRouter");
const adminbookRouter = require("./Routes/Admin_Routes/bookRouter");
const admincatgeroy = require("./Routes/Admin_Routes/categoryRouter");
const authorRouter = require("./Routes/User_Routes/authorRouter");
const bookRouter = require("./Routes/User_Routes/bookRouter");
const categoryRouter = require("./Routes/User_Routes/categoryRouter");
const registerRouter = require("./Routes/Auth_Router/Register");
const loginRouter = require("./Routes/Auth_Router/Login");

// for connecting Database and connections with server
mongoose
  .connect(process.env.DB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log("Example app listening on port 8080!");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
app.use(express.json());
app.use(express.urlencoded({extended:true}))
// middleware for logging events
app.use((req, res, next) => {
  
  console.log(`${req.url} whith method ${req.method}`);
  console.log(req.body)
  next();
});

// middleware for resources management and check authontication and authorization

// for parse all requests to jva script object


app.use(registerRouter);
app.use(loginRouter);
app.use(authorRouter);
app.use(bookRouter);
app.use(categoryRouter);
app.use(adminAutherRouter);
app.use(adminbookRouter);
app.use(admincatgeroy);

// middleware for page not found errors 404
app.use((req, res, next) => {
  res.status(404).send({ message: "Page NOt Found error 404 " });
});

// middleware for error handling
app.use((error, req, res, next) => {
  let status = error.status || 500;
  res.status(status).send({ message: error.message });
});
