const express = require("express");

const paymentController = require("../controllers/paymentController");
const router = express.Router();
router.route("/").get(paymentController.getPayments);
router.route("/:userId").get(paymentController.getUserPayments);
router.route("/:id").get(paymentController.getIdPayments);

module.exports = router;
