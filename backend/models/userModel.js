const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nhap ten ban"],
    maxLength: [30, "Ten khong the qua 30 tu"],
    minLength: [4, "Ten nen lon hon 4 tu"],
  },
  email: {
    type: String,
    required: [true, "Nhap email cua ban"],
    unique: true,
    validate: [validator.isEmail, "Nhap email chinh xac"],
  },
  password: {
    type: String,
    required: [true, "Nhap password cua ban"],
    minLength: [8, "Mat khau nen lon hon 8 tu"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

module.exports = mongoose.model("User",userSchema)