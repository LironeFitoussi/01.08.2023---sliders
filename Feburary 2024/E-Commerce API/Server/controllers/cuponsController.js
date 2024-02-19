const Coupon = require("../models/couponModel");

//? Done
// Create a new Coupon
exports.createCoupon = async (req, res) => {
  try {
    const { code, discount } = req.body;
    if (!code || !discount) {
      return res.status(400).json({ message: "Invalid coupon details" });
    }

    const coupon = await Coupon.create({
      code: code.toUpperCase(),
      discount,
    });

    res.status(200).json({
      status: "success",
      data: {
        coupon,
      },
    });
  } catch (error) {
    console.error("Error creating coupon:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//? Done
// Get all coupons
exports.getCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find();

    res.status(200).json({
      status: "success",
      data: {
        coupons,
      },
    });
  } catch (error) {
    console.error("Error fetching coupons:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//? Done
// Delete a coupon
exports.deleteCoupon = async (req, res) => {
  console.log("Deleting Coupon...");
  try {
    const coupon = await Coupon.findByIdAndDelete(req.params.code);

    res.status(200).json({
      status: "success",
      data: {
        coupon,
      },
    });
  } catch (error) {
    console.error("Error deleting coupon:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//? Done
// Validate a coupon code
exports.validateCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findOne({ code: req.params.code });

    if (!coupon) {
      return res.status(404).json({ message: "Coupon not found" });
    }

    req.body.coupon = coupon;

    console.log(req.body.coupon);
    res.status(200).json({
      status: "success",
      message: "Coupon validated successfully",
      data: {
        coupon,
      },
    });
  } catch (error) {
    console.error("Error validating coupon:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
