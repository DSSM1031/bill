const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  time: Date,
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
