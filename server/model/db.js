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

async function getNoteList(username) {
     try {
          console.log("starting get note list")
          const db = await connectToDB()
          const collection = db.collection("notebook")
     
          const cursor = collection.find({ username: username })
          noteList = await cursor.toArray()
          console.log(noteList)
          return noteList
     }  catch(err) {
          console.error(err)
     }
}

async function getNoteByName(username, NOTE_ID) {
     try {
          const db = await connectToDB()
          const collection = db.collection("notebook")

          const note = collection.findOne({ username: username, NOTE_ID: NOTE_ID })
          return note

     }  catch(err) {
          console.error(err)
     }
}

async function postNote(username, NOTE_ID) {
     try {
          const db = await connectToDB()
          const collection = db.collection("notebook")
          const insertResult = collection.insertOne({ username: username, NOTE_ID: NOTE_ID })
          return insertResult
     }  catch(err) {
          console.error(err)
     }
}

module.exports = {
     userSignup,
     getNoteList,
     getNoteByName,
     postNote
}