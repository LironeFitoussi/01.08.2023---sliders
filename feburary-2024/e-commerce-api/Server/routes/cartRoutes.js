const express = require("express");

const cartController = require("../controllers/cartController");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/:userId").get(cartController.getCart);

router.route("/:id/addToCart").patch(cartController.addToCart);

router.route("/:id/removeFromCart").delete(cartController.removeFromCart);

router.route("/:id/pay").post(cartController.pay);

router.get(
  "/checkout-session/:cartID",
  authController.userValidator,
  cartController.getCheckoutSession
);
module.exports = router;
