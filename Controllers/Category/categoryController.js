const mongoose = require("mongoose");
require("../../Models/CategorySchema");
const categoryModel = mongoose.model("Category");

let getAllCatgeroy = async (req, res, next) => {
  try {
    let categories = await categoryModel.find({});
    res.status(200).json({ data: categories });
  } catch (error) {
    next(err);
  }
};

let createCategroy = async (req, res, next) => {
  var counter = 0;
  try {
    const categories = await categoryModel.find({});
    const lastCategory = await categoryModel.findOne({}).sort({ id: -1 });
    if (categories.length == 0) {
      counter = 1;
    } else if (lastCategory.id == categories.length + 1) {
      counter = lastCategory.id + 1;
    } else {
      counter = categories.length + 1;
    }
    const category = new categoryModel({
      id: counter,
      name: req.body.name,
      category_image: "",
    });
    category.save();
    res.status(200).json({ data: category });
  } catch (error) {
    next(error);
  }
};

let upadtecatgeroy = async (req, res, next) => {
  try {
    const catgeroy = await categoryModel.findOneAndUpdate(
      { id: req.body.id },
      { name: req.body.name },
      { new: true }
    );
    res.status(200).json({ data: catgeroy });
  } catch (error) {
    next(error);
  }
};

let deletecatgeroy = (req, res, next) => {
  try {
    categoryModel.deleteOne({ id: req.body.id }).then(() => {
      res.status(200).json({ message: "delete catgeroy" });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCatgeroy,
  createCategroy,
  upadtecatgeroy,
  deletecatgeroy,
};
