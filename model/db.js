connectToDB = require("./connection")

async function userSignup(username, password) {
     try {
          db = await connectToDB()
          const collection = db.collection("users")

          const query = { username: username, password: password}

          const users = await collection.find(query)
          print("query success")


     }  catch(err) {
          console.error(err)
     }  
}

module.exports = userSignup