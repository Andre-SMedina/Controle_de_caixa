const router = require("express").Router();
const UserController = require("../controllers/UserController");
const User = require("../models/User");

//middleware
const verifyToken = require("../helpers/verify-token");

router.post("/register", UserController.register);
router.post("/login", UserController.login);

module.exports = router;
