const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();


// Signup

router.post("/signup", async (req, res) => {

  const { name, email, password } = req.body;

  // Check existing user

  const existingUser = await User.findOne({ email });

  if (existingUser) {

    return res.status(400).json({
      message: "User Already Exists"
    });
  }

  // Hash password

  const hashedPassword = await bcrypt.hash(
    password,
    10
  );

  // Create user

  const user = await User.create({

    name,
    email,
    password: hashedPassword,

  });

  res.json({
    message: "Signup Successful",
    user,
  });

});


// Login

router.post("/login", async (req, res) => {

  const { email, password } = req.body;

  // Find user

  const user = await User.findOne({ email });

  if (!user) {

    return res.status(400).json({
      message: "User Not Found"
    });
  }

  // Compare password

  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {

    return res.status(400).json({
      message: "Invalid Password"
    });
  }

  // Generate token

  const token = jwt.sign(
    { id: user._id },
    "secretkey"
  );

  res.json({
    message: "Login Successful",
    token,
  });

});


module.exports = router;    