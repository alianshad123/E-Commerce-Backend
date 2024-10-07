const express= require('express');
const Razorpay = require("razorpay");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/order", async (req, res) => {

    try{
    const razorpay = new Razorpay({
        key_id: "rzp_test_Bh3lf7Rh7X99Ky",//process.env.RAZORPAY_KEY_ID,
        key_secret:"fMQ8pufl0vIidjJwurwrz5v2" //process.env.RAZORPAY_KEYSECRET
    });

    const options =req.body;
    const order = await razorpay.orders.create(options)

    if(!order){
        return res.status(500).send("Error")
    }
     res.json(order);
}catch(error){
    res.status(500).send("Error");
    console.log(error);
}
    
});

app.listen(PORT, () => {
    console.log("Listnering on port " + PORT);
})