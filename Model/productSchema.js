const mongoose = require("mongoose")

const productScheme = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"product-name is required!"]
    },
    category:{
        type:String,
        required:[true, "Category is required!"]
    },
    imageUrl:{
        type:String
    },
    description:{
        type:String
    }
},{
    timeStamps:true
})

module.exports = mongoose.model("Product", productScheme)