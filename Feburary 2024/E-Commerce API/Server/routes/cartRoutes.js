const express = require("express");

const cartController = require("../controllers/cartController");

const router = express.Router();

router.route("/:userId").get(cartController.getCart);

router.route("/:id/addToCart").patch(cartController.addToCart);

router.route("/:id/removeFromCart").delete(cartController.removeFromCart);

module.exports = router;
