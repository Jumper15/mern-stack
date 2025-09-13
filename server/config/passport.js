const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const connectToDB = require("../model/connection")
const MongoDB = require("mongodb")

// setup passport
passport.use(
     new LocalStrategy(
          async function (username, password, done) {
          try {
               const db = await connectToDB()
               const collection = db.collection("users")
               let user = await collection.findOne({ username: username })

               if (!user) {
                    return done(null, false, { message: "User does not exist" })
               }
               if (user.password != password) {
                    return done(null, false, { message: "Incorrect password" })
               }
               return done(null, user)
          }  catch(err) {
               return done(err)
          }
     })
)

passport.serializeUser((user, done) => {
     done(null, user.username)
})

passport.deserializeUser(async (user, done) => {
     try {
          const db = await connectToDB()
          const collection = db.collection("users")
          user = await collection.findOne({ username: user.username })
          done(null, user)
     }  catch(err) {
          console.error(err)
          done(err)
     }
})

const checkAuth = (req, res, next) => {
     if(req.isAuthenticated())
     {
          return next
     }
     res.status(403).send("not logged in")
}

module.exports = checkAuth