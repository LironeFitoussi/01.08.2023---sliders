const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
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
      },
      price: {
        type: Number,
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
    enum: ["pending", "paid", "proccess", "shipped", "done"],
  },
  priceDiscount: {
    type: Number,
  },
  totalPrice: {
    type: Number,
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
    paymentDate: {
      type: Date,
    },
  },
});

orderSchema.pre("save", function (next) {
  this.totalPrice = this.products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  next();
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
