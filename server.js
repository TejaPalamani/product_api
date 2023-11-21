const express = require("express")
const dbConnection = require("./DbConnection/connection")
require('dotenv').config()
const app = express()

app.use(express.json())

const port =  3000 || process.env.port 

app.listen(port , () => {
    console.log(`listening to port ${port}.......`)
})

dbConnection()


app.use("/api/products", require("./Routes/productRoute"))