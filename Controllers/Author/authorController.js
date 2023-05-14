const mongoose = require("mongoose");
require("../../Models/AuthorShema");
const authorModel = mongoose.model("Author");

let getAllAuthors = (req, res, next) => {
  console.log(req.body);
  console.log("test")
};
let getOneAuthors = (req, res, next) => {};
let createAuthor = (req, res, next) => {
    console.log(req.body)
};
let upadteAuthors = (req, res, next) => {};
let deleteAuthors = (req, res, next) => {};

module.exports = {
  getAllAuthors,
  getOneAuthors,
  createAuthor,
  upadteAuthors,
  deleteAuthors,
};
