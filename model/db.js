connectToDB = require("./connection")

async function userSignup(username, password) {
     try {
          const db = await connectToDB()
          const collection = db.collection("users")
          const users = await collection.findOne({ username: username })

          if (users == null) {
               const result = await collection.insertOne({ username: username, password: password })
               return true
          }
          return false

     }  catch(err) {
          console.error(err)
     }  
}

module.exports = userSignup