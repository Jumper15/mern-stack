const express = require("express")
const passport = require("passport")

const router = express.Router()

router.post("/", passport.authenticate("local", { 
          failureRedirect: "/login/failure", 
          successRedirect: "/login/success" 
     }), 
     (req, res) => {
          res.redirect("/login/success")
     }
)


router.get("/success", (req, res) => {
     res.status(200).send("login success")
})

router.get("/failure", (req, res) => {
     res.status(403).send("failed login")
})

module.exports = router