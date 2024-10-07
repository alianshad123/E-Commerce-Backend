const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,   
        required: true
    },
    image: {
        type: String,
        required: true
    },
    discountPercentage: {
        type: Number,
        default: 0
    },
    originalPrice: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    size: { type: [String], required: true } ,// Array of strings
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);