express = require("express")
const router = express.Router()

router.post("/", (req, res) => {
     res.status(200).send("signup/POST code logic")
})

module.exports = router