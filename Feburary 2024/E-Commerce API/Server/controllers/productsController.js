const Product = require("../models/productModel");
const Order = require("../models/orderModel");
const User = require("../models/userModel");

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
  } catch (error) {}
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
