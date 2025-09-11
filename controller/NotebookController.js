const express = require("express")

const GET_NOTE_CONTROLLER = (req, res) => {
     res.status(200).send("get note controller success")
}

const POST_NOTE_CONTROLLER = (req, res) => {
     res.status(200).send("post note controller success")
}

const UPDATE_NOTE_CONTROLLER = (req, res) => {
     res.status(200).send("update node controller success")
}

const DELETE_NOTE_CONTROLLER = (req, res) => {
     res.status(200).send("delete node controller success")
}

module.exports = {
     GET_NOTE_CONTROLLER, 
     POST_NOTE_CONTROLLER,
     UPDATE_NOTE_CONTROLLER,
     DELETE_NOTE_CONTROLLER
}