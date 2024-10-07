const mongoose = require('mongoose');

//uri= "mongodb+srv://anshad993:Plo5C8qhEwYA7uyb@ecommerceapi.xz9yq.mongodb.net/?retryWrites=true&w=majority&appName=EcommerceAPI";


const connectDB = (uri) => {
    try {
 //console.log('MongoDB connection :', uri);
        return mongoose.connect(uri);
       
    } catch (error) {
        console.error('MongoDB connection error:', error);
       
    }
};

module.exports = connectDB;