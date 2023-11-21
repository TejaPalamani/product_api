const express = require("express")
const {createProduct,getProducts,getProductById,deleteById} = require("../productController/productController")

const router = express.Router()

router.post("/", createProduct)
router.get("/", getProducts)
router.get("/:id", getProductById)
router.delete("/:id", deleteById)


module.exports = router