const express = require("express");
const ordersController = require("../controllers/ordersController");
const authController = require("../controllers/authController");

const router = express.Router();

router.get(
  `/order-validation/?cart=cartId&user=userId&prices=totalAmount`,
  authController.userValidator,
  ordersController.validation
);
router
  .route("/:userId")
  .get(authController.userValidator, ordersController.getOrders);

module.exports = router;
