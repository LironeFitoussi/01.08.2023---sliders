const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/get-roles", adminController.getRoles);
router.get("/get-orders", adminController.getOrders);
module.exports = router;
