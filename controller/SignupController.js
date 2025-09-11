const express = require("express")
const userSignup = require("../model/db")

const POST_SIGNUP_CONTROLLER = async (req, res) => {
     // const usernameParam = req.params.username
     // const passwordParam = req.params.password
     const { username, password } = req.body
     if (await userSignup(username, password)) {
          res.status(200).send("post signup success")
     }
     else {
          res.status(201).send("username already taken")
     }
}

module.exports = POST_SIGNUP_CONTROLLER