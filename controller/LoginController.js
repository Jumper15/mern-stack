const express = require("express")
const { userLogin } = require("../model/db")

const connectToDB = require("../model/connection")

// const POST_LOGIN_CONTROLLER = async (req, res) => {
//      const { username, password } = req.body
//      if (await userLogin(username, password))
//      {
//           res.status(200).send("post login success")
//      }
//      else {
//           res.status(201).send("incorrect credentials")
//      }

// }

const POST_LOGIN_CONTROLLER = async (req, res) => {
          const { username, password } = req.body
          if (await userLogin(username, password))
          {
               res.status(200).send("post login success")
          }
          else {
               res.status(201).send("incorrect credentials")
          }
     
     }

module.exports = POST_LOGIN_CONTROLLER