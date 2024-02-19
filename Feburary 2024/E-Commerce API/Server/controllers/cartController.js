const Product = require("../models/productModel");
const Cart = require("../models/cartModel");
const Order = require("../models/orderModel");
const Payment = require("../models/paymentModel");

const percentageDiscount = (price, discount) => {
  return (price * (100 - discount)) / 100;
};

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
    const { paymentMethod, transactionId, currency, coupon } = req.body;
    const user = req.user;
    const cartId = user.cart;
    const cart = await Cart.findById(cartId);

    if (!paymentMethod || !transactionId || !currency) {
      return res.status(400).json({ message: "Invalid payment details" });
    }

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    let totalAmount = 0;

    const newOrderProducts = await Promise.all(
      cart.products.map(async (cartProduct) => {
        const product = await Product.findById(cartProduct._id);
        const productTotalPrice = product.price * cartProduct.quantity;
        totalAmount += productTotalPrice; // Accumulate total amount
        return {
          _id: product._id,
          price: product.price,
          quantity: cartProduct.quantity,
          total: productTotalPrice,
        };
      })
    );

    let discountedAmount = totalAmount;

    if (coupon && coupon.discount) {
      discountedAmount = (totalAmount * (100 - coupon.discount)) / 100;
    }

    const newPayment = await Payment.create({
      user: user._id,
      paymentMethod,
      transactionId,
      amount: discountedAmount,
      currency,
      paymentDate: Date.now(),
    });

    const newOrder = await Order.create({
      user: user._id,
      status: "paid",
      products: newOrderProducts,
      priceDiscount: totalAmount - discountedAmount,
      totalPrice: discountedAmount,
      paymentDetails: {
        paymentId: newPayment._id,
        amount: discountedAmount,
      },
    });

    cart.products = [];
    await cart.save();

    res.status(200).json({ message: "Payment successful" });
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
