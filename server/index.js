const express = require("express")
const dotenv = require("dotenv")
const passport = require("passport")
const session = require("express-session")

const checkAuth = require("./config/passport")

//// set port
const PORT = 50001

dotenv.config()
const app = express()

// routes import
const signup = require("./routes/Signup")
const login = require("./routes/Login")
const notebook = require("./routes/Notebook")


// use middleware
app.use(express.json())
app.use(session({ secret: "secretkey", resave: false, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())

// use routes
app.use("/notebook", notebook)
app.use("/signup", signup)
app.use("/login", login)

app.listen(PORT, () => {
     console.log("server running")
})
