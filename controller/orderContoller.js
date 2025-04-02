
const orderModel = require('../models/orderModel');


// Order-- /api/v1/order
exports.createOrder = async(req,res,next)=>{
    console.log(req.body,'Data');
    
    const Cartitem = req.body;
    const amount  =Number( Cartitem.reduce((acc,item) =>(acc+item.product.price*item.qty),0)).toFixed(2);
    const status = "pending";

    const order =await orderModel.create({Cartitem,amount,status})

    console.log(amount,'Amount')

   res.json(
    {
        success:true,
        order
    }
   )
}