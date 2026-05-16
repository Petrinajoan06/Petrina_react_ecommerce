const express = require("express");
const { createserver } = require("../controller/orderController");
 
const router = express.Router();

router.route("/order").post(createserver);
module.exports=router;