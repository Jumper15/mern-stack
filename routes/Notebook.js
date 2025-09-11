const express = require("express")
const GET_HOMEPAGE_CONTROLLER = require("../controller/HomepageController")
const { GET_NOTE_CONTROLLER, POST_NOTE_CONTROLLER, UPDATE_NOTE_CONTROLLER, DELETE_NOTE_CONTROLLER }= require("../controller")

const router = express.Router()

router.get("/:NOTE_ID", GET_NOTE_CONTROLLER)
router.post("/:NOTE_ID", POST_NOTE_CONTROLLER)
router.update("/:NOTE_ID", UPDATE_NOTE_CONTROLLER)
router.delete("/:NOTE_ID", DELETE_NOTE_CONTROLLER)

router.get("/", GET_HOMEPAGE_CONTROLLER)

module.exports = router