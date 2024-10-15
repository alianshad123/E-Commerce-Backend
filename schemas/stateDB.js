require("dotenv").config();
const connectDB = require("../db/connect");
const State = require("../models/states");

const StateJson = require("../json/states.json");

const start = async () => {
    try{
        await connectDB('mongodb+srv://anshad993:Plo5C8qhEwYA7uyb@ecommerceapi.xz9yq.mongodb.net/?retryWrites=true&w=majority&appName=EcommerceAPI');
        await State.create(StateJson)
        console.log("Success");

    }catch(error){
        console.log(error)
    }
}

start();