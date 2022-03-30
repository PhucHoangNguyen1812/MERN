const ErrorHandler = require("../utils/errorhandler");
const catchErrors = require("../middleware/catchErrors");
const User = require("../models/userModel");

exports.registerUser = catchErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is avatar",
      url: "profileUri",
    },
  });

  res.status(201).json({
    success: true,
    user,
  });
});
