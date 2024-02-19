const express = require("express");
const router = express.Router();
const couponController = require("../controllers/cuponsController");
const authController = require("../controllers/authController");

// Create a new Coupon
router
  .route("/create")
  .post(authController.isAdmin, couponController.createCoupon);

// Get all coupons
router
  .route("/showAll")
  .get(authController.isAdmin, couponController.getCoupons);

// Delete a coupon
router
  .route("/:code/delete")
  .delete(authController.isAdmin, couponController.deleteCoupon);

router.route("/:code/validate").get(couponController.validateCoupon);

module.exports = router;
