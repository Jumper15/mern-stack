const express = require("express")

const GET_NOTE_CONTROLLER = (req, res) => {
     res.status(200).send("get note controller success")
}

const POST_NOTE_CONTROLLER = (req, res) => {
     res.status(200).send("post note controller success")
}

module.exports = {
     GET_NOTE_CONTROLLER, 
     POST_NOTE_CONTROLLER
}