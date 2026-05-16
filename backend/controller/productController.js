const productModel = require("../models/productModel")

exports.many = async(req,res,next)=>{
    const products = await productModel.find({});//to access the product we are using the await
    
    //to view the product model

    res.json({
        success:true,
        products        
    })
}

exports.one = async(req,res,next)=>{
   
    try{
        console.log(req.params.id,"ID");
    const product = await productModel.findById(req.params.id);//to access the product we are using await

    //to view the product model

    res.json({
        success:true,
        product
    })
    }
    catch{
        res.json({
            success:false,
            message:"The given id is not valid"
        })
    } 
}