const { MongoClient } = require("mongodb")

let mongoClientInstance = null
const maxPoolSize = 5
const connectionOptions = { maxPoolSize: maxPoolSize }


async function connectToDB() {
     if (!mongoClientInstance) {
          mongoClientInstance = await MongoClient.connect(process.env.API_CODE, connectionOptions)
     }
     return mongoClientInstance.db("test")
}

module.exports = connectToDB