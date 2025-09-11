const express = require("express")
const POST_LOGIN_CONTROLLER = require("../controller/LoginController")

const router = express.Router()

router.post("/", POST_LOGIN_CONTROLLER)

module.exports = router