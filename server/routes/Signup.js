const express = require("express")
const POST_SIGNUP_CONTROLLER = require("../controller/SignupController")

const router = express.Router()

router.post("/", POST_SIGNUP_CONTROLLER)

module.exports = router