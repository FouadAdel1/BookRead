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
      .findOne({ _id: req.params.id })
      .populate({ path: "category_id" });
    res.status(200).json({ data: author });
  } catch (error) {
    next(error);
  }
};

let createAuthor = async (req, res, next) => {
  try {
    const author = new authorModel({
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
  try {
    const author = await authorModel.findOneAndUpdate(
      { _id: req.body.id },
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
    authorModel.deleteOne({ _id: req.body.id }).then(() => {
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
