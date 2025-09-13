const express = require("express")
const passport = require("passport")

// const { POST_LOGIN_CONTROLLER, POST_GOOGLE_LOGIN_CONTROLLER } = require("../controller/LoginController")

const router = express.Router()

// standard username password login
// router.post("/", POST_LOGIN_CONTROLLER)
router.post("/", passport.authenticate("local", { 
          failureRedirect: "/login/failure", 
          successRedirect: "/login/success" 
     }), 
     (req, res) => {
          res.redirect("/login/success")
     }
)

// router.post("/google", POST_GOOGLE_LOGIN_CONTROLLER)

router.get("/success", (req, res) => {
     res.status(200).send("login success")
})

router.get("/failure", (req, res) => {
     res.status(403).send("failed login")
})

module.exports = router