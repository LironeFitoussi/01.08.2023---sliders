const Order = require("../models/orderModel");
const Cart = require("../models/cartModel");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
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

exports.validation = async (req, res) => {
  console.log(req.query.cart);
  const cart = await Cart.findById(req.query.cart);
  console.log(cart);
  if (!cart) {
    return res.status(404).json({ error: "Cart not found" });
  }
  const sessionKey = cart.paySession;

  try {
    stripe.checkout.sessions.retrieve(sessionKey, function (err, session) {
      if (err) {
        console.error("Error retrieving session:", err);
        res.status(500).json({
          error: "An error occurred while retrieving the payment session.",
        });
      } else {
        const paymentStatus = session.payment_status;

        if (paymentStatus === "paid" || paymentStatus === "completed") {
          console.log("Payment was successful!");
          res.status(200).json({ message: "Payment was successful!" });
        } else {
          console.log("Payment was not successful.");
          res.status(400).json({ error: "Payment was not successful." });
        }
      }
    });
  } catch (error) {
    console.error("Error retrieving session:", error);
    res.status(500).json({
      error: "An error occurred while processing the payment session.",
    });
  }
};
