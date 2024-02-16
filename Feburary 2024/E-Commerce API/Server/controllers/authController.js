const User = require("../models/userModel");

//Create a new user
exports.createUser = async (req, res) => {
  //   try {
  //     const newUser = new User(req.body);
  //     await newUser.save();
  //     res.status(201).json(newUser);
  //   } catch (error) {
  //     res.status(400).json(error);
  //   }

  console.log("test request");
  res.json({
    status: "success",
    message: "request successful",
  });
};

// Log in a user
exports.logUserIn = async (req, res) => {
  try {
    //! Fill user Login logic
  } catch (error) {
    //! Handle error
  }
};

// Log out a user
exports.logUserOut = async (req, res) => {
  try {
    //! Fill user Logout logic
  } catch (error) {
    //! Handle error
  }
};
