const Product = require("../models/productModel");
const User = require("../models/userModel");
const Cart = require("../models/cartModel");
const Order = require("../models/orderModel");

//? Done
exports.getCart = async (req, res) => {
  try {
    const userId = req.params.userId;

    const userCart = await Cart.find({ user: userId }).populate("products");

    if (!userCart) {
      return res
        .status(404)
        .json({ message: "No orders found for this user." });
    }

    res.status(200).json({
      status: "success",
      data: {
        userCart,
      },
    });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//? Done
exports.addToCart = async (req, res) => {
  try {
    const user = req.user;
    if (!user.cart) {
      const newCart = new Cart({ products: [] });
      user.cart = newCart;
      await user.save();
    }
    const cartId = user.cart;
    const cart = await Cart.findById(cartId);
    const existingProductIndex = cart.products.findIndex((product) =>
      product._id.equals(req.params.id)
    );
    if (existingProductIndex !== -1) {
      cart.products[existingProductIndex].quantity += 1;
      await cart.save();
    } else {
      cart.products.push({ _id: req.params.id, quantity: 1 });
      await cart.save();
    }

    const product = await Product.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        product,
        updatedCart: cart,
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

//? Done
exports.removeFromCart = async (req, res) => {
  try {
    const cartId = req.user.cart;
    const cart = await Cart.findById(cartId);

    const existingProductIndex = cart.products.findIndex((product) =>
      product._id.equals(req.params.id)
    );

    if (existingProductIndex === -1) {
      return res.status(404).json({
        status: "error",
        message: "Product not found in the cart",
      });
    }

    cart.products.splice(existingProductIndex, 1);
    await cart.save();

    res.status(200).json({
      status: "success",
      data: {
        updatedCart: cart,
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

//! Progressing
exports.pay = async (req, res) => {
  try {
    const { paymentMethod, transactionId, amount, currency } = req.body;
    const user = req.user;
    const cartId = user.cart;
    const cart = await Cart.findById(cartId);
    if (!paymentMethod || !transactionId || !amount || !currency) {
      return res.status(400).json({ message: "Invalid payment details" });
    }

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const newOrderProducts = await Promise.all(
      cart.products.map(async (cartProduct) => {
        const product = await Product.findById(cartProduct);
        return {
          _id: product._id,
          price: product.price,
          quantity: cartProduct.quantity,
        };
      })
    );

    console.log(newOrderProducts);

    const newOrder = await Order.create({
      user: user._id,
      status: "paid",
      products: newOrderProducts,
    });

    // cart.paymentDetails = {
    //   paymentMethod,
    //   transactionId,
    //   amount,
    //   currency,
    //   paymentDate: Date.now(),
    // };

    // await cart.save();

    // await User.findOneAndUpdate(
    //   { _id: user._id },
    //   { $set: { cart: newOrder._id } },
    //   { new: true }
    // );

    res.status(200).json({ message: "Payment successful" });
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
