const mongoose = require("mongoose");

const dbConnection = async() => {
    try{
        const db = await mongoose.connect(process.env.mongoDb_connection)
        console.log(`Connection Success host:${db.connection.host} and name:${db.connection.name}`)

    } catch (e){
        console.log(e.message)
        process.exit(1)
    }
}

module.exports = dbConnection