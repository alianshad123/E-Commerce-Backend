const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// 1. Add a new product (POST /api/products)
router.post('/addOrder', async (req, res) => {
    try {
        const { cartItems, totalPrice, paymentMethod, userId } = req.body;
        
        const newOrder = new Order({
            userId,
            cartItems,
            totalPrice,
            paymentMethod,
            phonenumber
          });

          console.log(JSON.stringify(newOrder));

        // Save to the database
       // const savedOrder = await newOrder.save();
        

        const response = {
            status: true,
            message: "Order saved successfully",
            data: savedOrder, // This contains the array of products
          };
          res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Failed to save order',
            error: error.message, // Optionally include the error message
          });
    }
});

module.exports = router;