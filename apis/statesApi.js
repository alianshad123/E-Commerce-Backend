const express = require('express');
const State = require('../models/states');
const router = express.Router();

// GET all states
router.get('/getStates', async (req, res) => {
  try {
    const states = await State.find();
    console.log("states", states)
    if (!states) {
        res.status(404).json({
            status: false,
            message: 'Failed to fetch states',
            error: 'State not found', // Optionally include the error message
          });
    }
    const response = {
      status: true,
      message: 'States fetched successfully',
      data: states, // This contains the array of products
    };
    res.status(200).json(response);


  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Failed to fetch states',
      error: error.message, // Optionally include the error message
    });
  }
});

module.exports = router;
