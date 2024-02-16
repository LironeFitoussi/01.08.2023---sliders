const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.route("/register").post(authController.createUser);
router.route("/login").post(authController.logUserIn);
router.route("/logout").post(authController.logUserOut);

module.exports = router;
