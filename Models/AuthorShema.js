const mongoose = require("mongoose");
const { Schema } = mongoose;

const AuthorSchema = Schema({
  id: { type: Number, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  dateOfBirth: { type: Date, required: true, default: Date.now },
  category_id: { type: Schema.Types.ObjectId, ref: "Category" },
  author_image: { type: String }
});

const Author = mongoose.model("Author", AuthorSchema);
