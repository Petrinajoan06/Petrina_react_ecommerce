const express = require("express");
const {many, one } = require("../controller/productController");
const router = express.Router();

router.route("/products").get(many);
router.route("/products/:id").get(one);

module.exports=router;