const express = require("express")
const { getNoteList } = require("../model/db")

const GET_HOMEPAGE_CONTROLLER = (req, res) => {
     const username = req.body.username
     console.log("about to get note list")
     const noteList = getNoteList(username)
     res.status(200).send(noteList)
}

module.exports = GET_HOMEPAGE_CONTROLLER