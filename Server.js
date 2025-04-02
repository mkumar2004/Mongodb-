const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv')
const jsonwebtoken = require('jsonwebtoken');
const path = require('path')
// creating a mongodb connection  of data base
const connectDatabase = require('./config/connectDatabase')
//mongoose.connect('mongodb+srv://yogomanojbro:QNo0Hp6fbAV9O8jp@mystore.xhray.mongodb.net/').then(()=>console.log("mongodb id connect ")).catch((error)=>console.log(error))

dotenv.config({path: path.join(__dirname,'config','config.env')})


const app = express();

const products = require('./routes/product');
const orders = require('./routes/order');

connectDatabase();

app.use(express.json());
app.use('/api/v1/',products);
app.use('/api/v1/',orders);

app.listen(process.env.PORT, ()=>{
    console.log(`Server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`)
})

