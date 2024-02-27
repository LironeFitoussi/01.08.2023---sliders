const User = require("../models/userModel");
const Order = require("../models/orderModel");
exports.getRoles = async (req, res) => {
  try {
    const roleCounts = await User.aggregate([
      {
        $group: {
          _id: "$role",
          count: { $sum: 1 },
        },
      },
    ]);

    res.json({ roleCounts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orderStats = await Order.aggregate([
      {
        $project: {
          paymentDetails: {
            amount: "$paymentDetails.amount",
            paymentDate: "$paymentDetails.paymentDate",
          },
        },
      },
    ]);

    res.json({ orderStats });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
