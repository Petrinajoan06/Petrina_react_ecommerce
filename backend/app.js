const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const connectdataName = require("./config/cdb")
const cors = require("cors")
dotenv.config({path:path.join(__dirname,'config','config.env')});

const products = require("./router/product");
const orders = require("./router/order");

connectdataName();

app.use(express.json());
app.use(cors());
app.use("/api/a1/",products);
app.use("/api/a1/",orders);

app.listen(process.env.PORT,()=>{
    console.log(`server is running at the port number: ${process.env.PORT}`);
})