const express = require("express")
const router = express.Router()


const py = require("./py.js")
router.get("/checkLogin",py.testPythonAPI)