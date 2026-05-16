const mongoose = require("mongoose");

const productschema = new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    rating: String,
    images:[
        {
            image: String,
        }
    ],
    category: String,
    seller: String,
    stack: String,
    numofReview: String,
    createdAt: Date
})
const productModel = mongoose.model("product",productschema);

module.exports = productModel