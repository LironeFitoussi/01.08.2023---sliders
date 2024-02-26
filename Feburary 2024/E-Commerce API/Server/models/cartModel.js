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

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
