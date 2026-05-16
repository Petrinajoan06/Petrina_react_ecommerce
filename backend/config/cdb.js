const mongoose = require("mongoose");

const cdb=()=>{
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log("MONGODB CONNECTED"+con.connection.host);
    })
}

module.exports = cdb;