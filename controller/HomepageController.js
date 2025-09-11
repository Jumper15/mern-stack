const express = require("express")
const { getNoteList } = require("../model/db")

const GET_HOMEPAGE_CONTROLLER = (req, res) => {
     const { username, noteName} = req.body
     const noteList = getNoteList(username, noteName)
     res.status(200).send(noteList)
}

module.exports = GET_HOMEPAGE_CONTROLLER