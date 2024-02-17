const Order = require("../models/orderModel");

exports.getOrders = async (req, res) => {
  try {
    const userId = req.params.userId;

    const userOrders = await Order.find({ user: userId }).populate("products");

    if (!userOrders) {
      return res
        .status(404)
        .json({ message: "No orders found for this user." });
    }

    res.status(200).json({
      status: "success",
      data: {
        userOrders,
      },
    });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
