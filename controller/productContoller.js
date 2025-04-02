const ProductModel = require('../models/productModel');


// Get Product -api :/v1/api/products
exports.getProducts = async (req,res,next)=>{
      
    const products = await ProductModel.find({});
    
    res.json({
        sucess:true,
        products
      })
}

// Get Single Product -api :/v1/api/products/id
exports.getSingleProducts = async (req,res,next)=>{
    //console.log(req.params.id,'Id');
    try {
      const productSingle = await ProductModel.findById(req.params.id)
      res.json({
          sucess:true,
          productSingle
        })
    } catch (error) {
      res.status(404).json({
        sucess:false,
        message:"Invalid Id unable find its path"
       
      })
    }
    
  
   
}