const express = require("express")
const dotenv = require("dotenv")
const passport = require("passport")
const session = require("express-session")
const LocalStrategy = require("passport-local").Strategy()

const connectToDB = require("./model/connection")

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
app.use(session({ secret: "secretkey" }))
app.use(passport.initialize())
app.use(passport.session())

// setup passport
passport.use(new LocalStrategy( async (username, password, done) => {
     const collection = connectToDB().collection("users")
     const user = await collection.findOne({ username: username })
     if (!user) {
          return done(null, false, { message: "User does not exist" })
     }
     if (user.password != password) {
          return done(null, false, { message: "Incorrect password" })
     }
     return done(null, user)
}))

passport.serializeUser((user, done) => {
     done(null, user.username)
})

passport.deserializeUser( async (user, done) => {
     const collection = connectToDB().collection("users")
     const user = await collection.findOne({ username: user.username })
     done(null, user)
})

// use routes

app.use("/signup", signup)
app.use("/login", login)
app.use("/notebook", notebook)

app.listen(PORT, () => {
     console.log("server running")
})
