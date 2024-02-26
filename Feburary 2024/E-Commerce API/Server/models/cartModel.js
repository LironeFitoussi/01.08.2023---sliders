const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
});

// Pre middleware to populate products before any find operation
cartSchema.pre(/^find/, function (next) {
  this.populate("products.product");
  next();
});

// Define a virtual property for totalAmount
cartSchema.virtual("totalAmount").get(function () {
  let total = 0;
  this.products.forEach((item) => {
    total += item.product.price * item.quantity;
  });
  return total;
});

// Set toJSON and toObject options to include virtuals
cartSchema.set("toJSON", { virtuals: true });
cartSchema.set("toObject", { virtuals: true });

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
