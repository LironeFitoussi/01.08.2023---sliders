const express = require("express");
const router = express.Router();
const orderController = require("../controllers/ordersController");
const authController = require("../controllers/authController");
router
  .route("/:userId")
  .get(authController.userValidator, orderController.getOrders);
module.exports = router;
