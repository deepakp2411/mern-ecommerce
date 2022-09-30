const express = require('express')

const router = express.Router();
const {registerUser,loginUser} = require("../controllers/userController")
// import { loginUser, registerUser } from "../controllers/userController.js";


router.post("/register", registerUser)
router.post("/login", loginUser)



module.exports =  router;