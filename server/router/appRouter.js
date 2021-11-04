const express = require("express");
const {emp} =require('../controller/appController');

const router = express.Router();





router.get("/employee",emp)

console.log('router page')
module.exports = router;