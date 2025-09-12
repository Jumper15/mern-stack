const connectToDB = require("./connection")

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

async function getNoteList(username) {
     try {
          const db = await connectToDB()
          const collection = db.collection("notebook")
     
          const cursor = collection.find({ username: username })
          noteList = await cursor.toArray()

          return noteList
     }  catch(err) {
          console.error(err)
     }
}

async function getNoteByName(username, noteName) {
     try {
          const db = connectToDB()
          const collection = db.collection("notebook")

          const note = collection.findOne({ username: username, noteName: noteName })
          return note

     }  catch(err) {
          console.error(err)
     }
}

async function postNote() {
     return false
}

module.exports = {
     userSignup,
     userLogin,
     getNoteList,
     getNoteByName,
     postNote
}