const express = require("express")

const GET_HOMEPAGE_CONTROLLER = (req, res) => {
     res.status(200).send("get homepage controller success")
}

module.exports = GET_HOMEPAGE_CONTROLLER