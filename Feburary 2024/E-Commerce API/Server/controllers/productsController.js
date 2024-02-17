const Product = require("../models/productModel");
const Order = require("../models/orderModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getProductByName = async (req, res) => {
  try {
    console.log(req.query);
    const regex = new RegExp(req.query.name, "i");
    const products = await Product.find({ slug: { $regex: regex } });
    res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const user = await User.findById(userId);

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
