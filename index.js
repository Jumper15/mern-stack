const express = require("express")
const dotenv = require("dotenv")

// routes import
const signup = require("./routes/Signup")
const login = require("./routes/Login")
const notebook = require("./routes/Notebook")

//// set port
const PORT = 50001

dotenv.config()
const app = express()
app.use(express.json())

// use routes

app.use("/signup", signup)
app.use("/login", login)
app.use("/notebook", notebook)

app.listen(PORT, () => {
     console.log("server running")
})
