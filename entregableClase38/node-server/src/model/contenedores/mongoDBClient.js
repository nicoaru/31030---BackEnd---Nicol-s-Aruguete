const mongoose = require("mongoose")
const {uriStringMongo} = require('../../config/config.js')


let instance = null

class MongoDBClient {

    constructor() {
        this.connectMongoDB()
    }

    connectMongoDB() {
        mongoose.connect(uriStringMongo)
        .then(res => console.log(`Respuesta conexión DB => conectado a ${res.connections[0]._connectionString}`))
        .catch(error => console.log("Error de conexión a DB => ", error.message))
    }

    static getInstance() {
        if(!instance) {
            instance = new MongoDBClient
            return instance
        }
        else {
            return instance
        }
    }
}

module.exports = {
    MongoDBClient
}