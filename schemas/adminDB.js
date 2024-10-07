require("dotenv").config();
const connectDB = require("../db/connect");
const Admin = require("../models/admin");

const AdminJson = require("../admin.json");

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        await Admin.create(AdminJson)
        console.log("Success");

    }catch(error){
        console.log(error)
    }
}

start();