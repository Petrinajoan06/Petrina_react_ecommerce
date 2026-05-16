const orderModel = require("../models/orderModel");

exports.createserver = async(req,res,next)=>{
    const cardItems=req.body;
    const amount=Number(cardItems.reduce((acc,items)=>(acc+items.product.price*items.qty),0)).toFixed(2)
    const status="pending";

    const order = await orderModel.create({
        cardItems,amount,status
    })
    console.log(order);
    
    res.json({
        success:true,
        order
    })
}