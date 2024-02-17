const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      _id: {
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
  status: {
    type: String,
    default: "pending",
  },
  paymentDetails: {
    paymentMethod: {
      type: String,
      enum: ["credit_card", "debit_card", "paypal", "stripe", "bank_transfer"],
    },
    transactionId: {
      type: String,
    },
    amount: {
      type: Number,
    },
    currency: {
      type: String,
    },
    paymentDate: {
      type: Date,
    },
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
