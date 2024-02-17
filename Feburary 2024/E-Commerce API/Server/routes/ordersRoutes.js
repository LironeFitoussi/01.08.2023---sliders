const express = require("express");
const router = express.Router();
const orderController = require("../controllers/ordersController");
const authController = require("../controllers/authController");
router
  .route("/:userId")
  .get(authController.userValidator, orderController.getOrders);

router
  .route("/:id/addToCart")
  .patch(authController.userValidator, orderController.addToCart);

router
  .route("/:id/removeFromCart")
  .delete(authController.userValidator, orderController.removeFromCart);

router
  .route("/:id/pay")
  .post(authController.userValidator, orderController.pay);
module.exports = router;
