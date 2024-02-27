const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/get-roles", adminController.getRoles);

module.exports = router;
