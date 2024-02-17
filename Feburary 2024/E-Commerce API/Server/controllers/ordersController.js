const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const User = require("../models/userModel");

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

exports.addToCart = async (req, res) => {
  try {
    const user = req.user;
    if (!user.cart) {
      const newCart = new Order({ products: [] });
      user.cart = newCart;
      await user.save();
    }

    const orderId = user.cart;
    const order = await Order.findById(orderId);
    const existingProductIndex = order.products.findIndex((product) =>
      product._id.equals(req.params.id)
    );

    if (existingProductIndex !== -1) {
      order.products[existingProductIndex].quantity += 1;
      await order.save();
    } else {
      order.products.push({ _id: req.params.id, quantity: 1 });
      await order.save();
    }

    const product = await Product.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        product,
        updatedCart: order,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const orderId = req.user.cart;
    const order = await Order.findById(orderId);

    const existingProductIndex = order.products.findIndex((product) =>
      product._id.equals(req.params.id)
    );

    if (existingProductIndex === -1) {
      return res.status(404).json({
        status: "error",
        message: "Product not found in the cart",
      });
    }

    order.products.splice(existingProductIndex, 1);
    await order.save();

    const product = await Product.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        product,
        updatedCart: order,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

exports.pay = async (req, res) => {
  try {
    const { paymentMethod, transactionId, amount, currency } = req.body;

    if (!paymentMethod || !transactionId || !amount || !currency) {
      return res.status(400).json({ message: "Invalid payment details" });
    }

    const user = req.user;
    const orderId = user.cart;
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = "paid";
    order.paymentDetails = {
      paymentMethod,
      transactionId,
      amount,
      currency,
      paymentDate: Date.now(),
    };

    await order.save();
    const newOrder = await Order.create({
      user: user._id,
      status: "pending",
      products: [],
    });

    await User.findOneAndUpdate(
      { _id: user._id },
      { $set: { cart: newOrder._id } },
      { new: true }
    );

    res.status(200).json({ message: "Payment successful" });
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
