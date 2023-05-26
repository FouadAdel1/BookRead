const mongoose = require("mongoose");
const { Schema } = mongoose;


const UserSchema = Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, min: 4, max: 10 },
  book_rate: [
    {
      book_id: { type: Schema.Types.ObjectId, ref: "Book" },
      rate: { type: Number, max: 5 },
      view: {
        type: String,
        required: true,
        enum: ["read", "wantToRead", "reading"],
      },
    },
  ],
  avatar: { type: String },
});

// for hash password
// UserSchema.pre("save", async (req, res, next) => {
//   const user = this;
//   if (!user.isModified("password")) {
//     return next();
//   }
//   try {
//     const hash = await bcrypt.hash(user.password, 10);
//     user.password = hash;
//     next();
//   } catch (err) {
//     return next(err);
//   }
// });

const User = mongoose.model("User", UserSchema);
