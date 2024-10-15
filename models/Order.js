const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
 
  cartItems: [
    {
      productId: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      image: { type: String, required: true },
      quantity: { type: Number, required: true },
    }
  ],
  totalPrice: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  orderDate: { type: Date, default: Date.now },
  userId: { type: String, required: true },
  phonenumber: { type: String, required: true },
  
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;