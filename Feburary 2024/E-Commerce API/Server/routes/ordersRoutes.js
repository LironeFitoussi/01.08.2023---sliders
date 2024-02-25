const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/ordersController");
const authController = require("../controllers/authController");
router
  .route("/:userId")
  .get(authController.userValidator, ordersController.getOrders);

// router
//   .route("/:id/addToCart")
//   .patch(authController.userValidator, ordersController.addToCart);

// router
//   .route("/:id/removeFromCart")
//   .delete(authController.userValidator, ordersController.removeFromCart);

// router
//   .route("/:id/pay")
//   .post(authController.userValidator, ordersController.pay);
module.exports = router;
