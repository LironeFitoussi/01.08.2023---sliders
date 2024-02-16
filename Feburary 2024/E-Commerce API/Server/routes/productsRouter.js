const express = require("express");

const authController = require("../controllers/authController");
const productsController = require("../controllers/productsController");

const router = express.Router();
router.route("/").get(productsController.getAllProducts);

// router.route("/:id").get(tourController.getTour);
module.exports = router;
