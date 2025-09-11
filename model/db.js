connectToDB = require("./connection")

async function userSignup(username, password) {
     try {
          const db = await connectToDB()
          const collection = db.collection("users")
          const user = await collection.findOne({ username: username })

          if (user == null) {
               const result = await collection.insertOne({ username: username, password: password })
               return true
          }
          return false

     }  catch(err) {
          console.error(err)
     }  
}

async function userLogin(username, password) {
     try {
          const db = await connectToDB()
          const collection = db.collection("users")
          const user = await collection.findOne({ username: username })
     
          if (user.password == password) {
               return true
          }
          return false
     }  catch(err) {
          console.error(err)
     }
}

module.exports = {
     userSignup,
     userLogin
}