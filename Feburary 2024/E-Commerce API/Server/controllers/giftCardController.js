const GiftCard = require("../models/giftCardModel");

//? Done
// Create Gift Card (Admin Only)
exports.createGiftCard = async (req, res) => {
  try {
    const { name, amount, price } = req.body;
    if (!name || !amount || !price) {
      return res.status(400).json({ message: "Invalid Gift Card details" });
    }

    const giftCard = await GiftCard.create({
      name,
      amount,
      price,
    });

    res.status(200).json({
      status: "success",
      data: {
        giftCard,
      },
    });
  } catch (error) {
    console.error("Error creating gift card:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//? Done
// Get all Gift Cards (Admin Only)
exports.getAllGiftCards = async (req, res) => {
  try {
    const giftCards = await GiftCard.find();

    res.status(200).json({
      status: "success",
      data: {
        giftCards,
      },
    });
  } catch (error) {
    console.error("Error fetching gift cards:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//? Done
// Update Gift Card (Admin Only)
exports.updateGiftCard = async (req, res) => {
  try {
    const { code } = req.params;
    if (!code) {
      return res.status(400).json({ message: "Invalid Gift Card details" });
    }

    const { name, amount, price } = req.body;
    if (!name || !amount || !price) {
      return res.status(400).json({ message: "Invalid Gift Card details" });
    }

    const giftCard = await GiftCard.findByIdAndUpdate(
      code,
      {
        name,
        amount,
        price,
      },
      { new: true }
    );

    res.status(200).json({
      status: "success",
      data: {
        giftCard,
      },
    });
  } catch (error) {
    console.error("Error updating gift card:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//! Pending

// Delete Gift Card (Admin Only)
exports.deleteGiftCard = async (req, res) => {
  try {
    const { code } = req.params;
    if (!code) {
      return res.status(400).json({ message: "Invalid Gift Card details" });
    }

    const giftCard = await GiftCard.findByIdAndDelete(code);

    res.status(200).json({
      status: "success",
      data: {
        giftCard,
      },
    });
  } catch (error) {
    console.error("Error deleting gift card:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
