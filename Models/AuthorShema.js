const mongoose = require("mongoose");
const { Schema } = mongoose;
var moment = require("moment");
const AuthorSchema = Schema({
  
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  dateOfBirth: {
    type: Date,
    required: true,
    default: moment( new Date()).format("YYYY-MM-DD"),
  },
  category_id: { type: Schema.Types.ObjectId, ref: "Category" },
  author_image: { type: String },
});

const Author = mongoose.model("Author", AuthorSchema);
