const express = require("express")
const userSignup = require("../model/db")

const POST_SIGNUP_CONTROLLER = (req, res) => {
     // const usernameParam = req.params.username
     // const passwordParam = req.params.password
     const { username, password } = req.body
     userSignup(username, password)
     
     res.status(200).send("post signup success")
}

module.exports = POST_SIGNUP_CONTROLLER