require('dotenv').config();
const express= require('express');
const cors = require('cors');
const app =express();



const  connectDB  = require('./db/connect');

const PORT = process.env.PORT || 5000

//const products_routes = require('./routes/products')
const admin_routes = require('./routes/admins')
const productRoutes = require('./apis/producsApi');
const stateRoutes = require('./apis/statesApi');
const userRoutes = require('./apis/usersApi');
const order_routes = require('./apis/orderApi');


// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.send('Hello, I am Live');
})

//app.use("/api/products",products_routes)
app.use("/api/admins",admin_routes)
app.use("/api/products",productRoutes)
app.use("/api/states",stateRoutes)
app.use("/api/users",userRoutes)
app.use("/api/orders",order_routes)

const  start  = async () => {
   try{

      await connectDB(process.env.MONGODB_URL);
       app.listen(PORT,()=>{
           console.log(`Listening on port ${PORT}`);
       })
   }catch(error){
       console.log(error)
   }
   
}
start();