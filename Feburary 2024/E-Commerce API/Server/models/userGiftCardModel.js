const mongoose = require("mongoose");

const userGiftCardSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const UserGiftCard = mongoose.model("UserGiftCard", userGiftCardSchema);
module.exports = UserGiftCard;
