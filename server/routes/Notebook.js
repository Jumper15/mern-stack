const express = require("express")
const GET_HOMEPAGE_CONTROLLER = require("../controller/HomepageController")
const { GET_NOTE_CONTROLLER, POST_NOTE_CONTROLLER }= require("../controller/NotebookController")

const router = express.Router()

router.get("/:NOTE_ID", GET_NOTE_CONTROLLER)
router.post("/:NOTE_ID", POST_NOTE_CONTROLLER)

router.get("/", GET_HOMEPAGE_CONTROLLER)

module.exports = router