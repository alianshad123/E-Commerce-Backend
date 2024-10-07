const express = require('express');
const Product = require('../models/product');
const router = express.Router();

// 1. Add a new product (POST /api/products)
router.post('/addProduct', async (req, res) => {
    try {
        const { title, price, description, code, quantity, image, discountPercentage, originalPrice, rating, size } = req.body;
        
        // Ensure the size is an array
        if (!Array.isArray(size)) {
            return res.status(400).json({ message: 'Size must be an array' });
        }

        // Create a new product
        const newProduct = new Product({
            title,
            price,
            description,
            code,
            quantity,
            image,
            discountPercentage,
            originalPrice,
            rating,
            size // This will now be saved as an array of sizes
        });

        // Save to the database
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add product', error });
    }
});


// 2. Get all products (GET /api/products)
router.get('/getproducts', async (req, res) => {
    try {
        const products = await Product.find();

        const response = {
            status: true,
            message: 'Products fetched successfully',
            data: products, // This contains the array of products
          };
        res.status(200).json(response);
    } catch (error) {
        
        res.status(500).json({
            status: false,
            message: 'Failed to fetch products',
            error: error.message, // Optionally include the error message
          });
    }
});

// 3. Get a single product by ID (GET /api/products/:id)
router.get('/getProduct/:id', async (req, res) => {
    try {
        
       
        const productId = req.params.id; // Get the product ID from the route params
    const product = await Product.findById(productId); // Find the product by ID

        console.log("product", req.params._id)
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        const response = {
            status: true,
            message: 'Product fetched successfully',
            data: product, // This contains the array of products
          };



        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Failed to fetch product',
            error: error.message, // Optionally include the error message
          });
    }
});

// 4. Update a product by ID (PUT /api/products/:id)
router.put('/products/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update product', error });
    }
});

// 5. Delete a product by ID (DELETE /api/products/:id)
router.delete('/products/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete product', error });
    }
});

module.exports = router;
