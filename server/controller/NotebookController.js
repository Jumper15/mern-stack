const express = require("express")
const { getNoteByName, postNote } = require("../model/db")

const GET_NOTE_CONTROLLER = (req, res) => {
     const NOTE_ID = req.params.NOTE_ID
     const username = req.body.username
     const note = getNoteByName(username, NOTE_ID)

     res.status(200).send(note)
}

const POST_NOTE_CONTROLLER = (req, res) => {
     const NOTE_ID = req.params.NOTE_ID
     const username = req.body.username
     const insertResult = postNote(username, NOTE_ID)

     res.status(200).send(insertResult)
}

module.exports = {
     GET_NOTE_CONTROLLER, 
     POST_NOTE_CONTROLLER
}