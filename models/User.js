const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide name"],
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: [true, "Please Provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Plase provide valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide password"],
    minlength: 6,
  },
});

module.exports = mongoose.model("User", UserSchema);
