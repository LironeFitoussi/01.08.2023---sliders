const mongoose = require("mongoose");

const giftCardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const GiftCard = mongoose.model("GiftCard", giftCardSchema);
module.exports = GiftCard;
