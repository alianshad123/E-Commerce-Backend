const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST route to create a new user
router.post("/addUser", async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    phonenumber,
    address,
    streetaddress,
    city,
    zipcode,
    state,
    country,
  } = req.body;

  try {
    const newUser = new User({
      firstname,
      lastname,
      email,
      phonenumber,
      address,
      streetaddress,
      city,
      zipcode,
      state,
      country,
    });

    const user = await newUser.save();

    const response = {
      status: true,
      message: "User saved successfully",
      data: user, // This contains the array of products
    };
    res.status(200).json(response);
  } catch (error) {
    console.error("Error creating user:", error);
    
    res.status(500).json({
        status: false,
        message: 'Failed to save user',
        error: error.message, // Optionally include the error message
      });
  }
});

module.exports = router;
