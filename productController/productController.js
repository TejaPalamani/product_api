const Product = require("../Model/productSchema") 
//api to Create a product
//public
const createProduct = async(req, res) => {
    try{
        const {name, imageUrl, description, category} = req.body
        const data = await Product.create({
            name,
            imageUrl,
            description,
            category
        })

        res.status(201).json({mesg:"product Updated SuccessFully..."})

    } catch(e){
        res.status(400).json({error:e.message})
    }
}


//api to get all products by query param
//public
const getProducts = async(req, res) => {
    try{
        // I arranged default values to avoid undefined errors
        const {page = 1,pageSize = 10 ,productName = "",category=""} = req.query

        const skipPages = page -1 

        const getByQuery = await Product.find({name:{$regex:productName}, category:{$regex:category}}).skip(skipPages).limit(pageSize)

        res.status(200).json(getByQuery)

    } catch(e){
        res.status(400).json({error:e.message})
    }
}


//api to get products by ID
//public
const getProductById = async(req, res) => {
    try{
        const getById = await Product.findById(req.params.id)
        if(!getById){
            res.status(400).json({error:"No product with this ID"})
        }else{
            res.status(200).json(getById)
        }

        

    } catch(e){
        res.status(400).json({error:e.message})
    }
}


//api to delete products by ID
//public

const deleteById = async(req, res) => {
    try{
        const check = await Product.findById(req.params.id)
        if(!check){
            res.status(400).json({error:"no data with this id"})
        } else{
            await Product.findByIdAndDelete(req.params.id)

            res.status(200).json({mesg:"Content Deleted..."})
        }
        

    } catch(e){
        res.status(400).json({error:e.message})
    }
}

module.exports = {createProduct,getProducts,getProductById,deleteById}