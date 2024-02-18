const express = require("express");

const cartController = require("../controllers/cartController");

const router = express.Router();

router.route("/:userId").get(cartController.getCart);

router.route("/:id/addToCart").patch(cartController.addToCart);

router.route("/:id/removeFromCart").delete(cartController.removeFromCart);

router.route("/:id/pay").post(cartController.pay);

module.exports = router;
