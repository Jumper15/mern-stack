const express = require("express")
const { MongoClient } = require("mongodb")
const dotenv = require("dotenv")

// routes import
const signup = require("./routes/Signup")
const login = require("./routes/Login")

//// set port
const PORT = 50001

dotenv.config()
const app = express()
const client = new MongoClient(process.env.API_CODE)

// use routes
app.use("/signup", signup)
app.use("/login", login)

app.listen(PORT, () => {
     console.log("server running")
})
