const mongoose = require("mongoose");
var moment = require("moment");
require("../../Models/AuthorShema");
const authorModel = mongoose.model("Author");

let getAllAuthors = async (req, res, next) => {
  try {
    const authors = await authorModel
      .find({})
      .populate({ path: "category_id", select: "name" });
    res.status(200).json({ data: authors });
  } catch (error) {
    next(error);
  }
};
let getOneAuthors = async (req, res, next) => {
  try {
    const author = await authorModel
      .findOne({ id: req.params.id })
      .populate({ path: "category_id" });
    res.status(200).json({ data: author });
  } catch (error) {
    next(error);
  }
};

let createAuthor = async (req, res, next) => {
  var counter = 0;
  try {
    const authors = await authorModel.find({});
    const lastAuthor = await authorModel.findOne({}).sort({ id: -1 });
    if (authors.length == 0) {
      counter = 1;
    } else if (lastAuthor.id == authors.length + 1) {
      counter = lastAuthor.id + 1;
    } else {
      counter = authors.length + 1;
    }
    const author = new authorModel({
      id: counter,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      dateOfBirth: moment(new Date(req.body.dateOfBirth)).format("YYYY-MM-DD"),
      category_id: req.body.category_id,
      author_image: req.file.filename,
    });
    author.save();
    res.status(202).json({ data: author });
  } catch (error) {
    next(error);
  }
};

let updateAuthors = async (req, res, next) => {
  console.log(req.body, req.file);
  try {
    const author = await authorModel.findOneAndUpdate(
      { id: req.body.id },
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        dateOfBirth: moment(new Date(req.body.dateOfBirth)).format(
          "YYYY-MM-DD"
        ),
        category_id: req.body.category_id,
        author_image: req.file.filename,
      },
      { new: true }
    );
    res.status(200).json({ data: author });
  } catch (error) {
    next(error);
  }
};
let deleteAuthors = (req, res, next) => {
  try {
    authorModel.deleteOne({ id: req.body.id }).then(() => {
      res.status(200).json({ Message: "deleted successfully" });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllAuthors,
  getOneAuthors,
  createAuthor,
  updateAuthors,
  deleteAuthors,
};
