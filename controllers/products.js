
const Product = require("../models/product");
const getAllProducts = async (req, res) => {

    const { code } = req.query;
    const queryObject = {};

    if(code){
        queryObject.code = code;
        console.log(queryObject);
    }
    const myData = await Product.find(queryObject);
    res.status(200).json({myData});
   
}


const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find(req.query);
    res.status(200).json({myData});
   
}

module.exports =  { getAllProducts, getAllProductsTesting};