const GiftCard = require("../models/giftCardModel");
const UserGiftCard = require("../models/userGiftCardModel");
const Payment = require("../models/paymentModel");
const Order = require("../models/orderModel");

const { generateUniqueCode } = require("../utils/codeGenerator");

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

// get Gift Card by code (Admin Only)
exports.getAllGiftCardsByCode = async (req, res) => {
  console.log(req.params.id);
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Invalid Gift Card details" });
    }

    const giftCard = await GiftCard.findById(id);

    res.status(200).json({
      status: "success",
      data: {
        giftCard,
      },
    });
  } catch (error) {
    console.error("Error fetching gift card:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update Gift Card (Admin Only)
exports.updateGiftCard = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Invalid Gift Card details" });
    }

    const { name, amount, price } = req.body;
    if (!name || !amount || !price) {
      return res.status(400).json({ message: "Invalid Gift Card details" });
    }

    const giftCard = await GiftCard.findByIdAndUpdate(
      id,
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

// Delete Gift Card (Admin Only)
exports.deleteGiftCard = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Invalid Gift Card details" });
    }

    const giftCard = await GiftCard.findByIdAndDelete(id);

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

// Buy Gift Card
exports.buyGiftCard = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user;
    const { paymentMethod, transactionId, currency, amount } = req.body;
    const giftCardRef = await GiftCard.findById(id);

    if (!paymentMethod || !transactionId || !currency || !amount) {
      return res.status(400).json({ message: "Invalid payment details" });
    }

    if (!giftCardRef) {
      return res.status(400).json({ message: "Invalid Gift Card details" });
    }

    const totalAmount = giftCardRef.price;

    if (amount !== totalAmount) {
      return res.status(400).json({
        message: "Amount paid does not match the total amount of the gift card",
      });
    }

    const newGiftCard = await UserGiftCard.create({
      code: generateUniqueCode(12),
      amount: giftCardRef.amount,
    });

    const newPayment = await Payment.create({
      user: user._id,
      paymentMethod,
      transactionId,
      amount: totalAmount,
      currency,
      paymentDate: Date.now(),
    });

    const newOrder = await Order.create({
      user: user._id,
      status: "paid",
      products: [
        {
          price: totalAmount,
          _id: newGiftCard._id,
        },
      ],
      price: totalAmount,
      paymentDetails: {
        paymentId: newPayment._id,
        amount: totalAmount,
        quantity: 1,
      },
    });

    res.status(200).json({
      message: "Gift card purchased successfully",
      order: newOrder,
      GiftCard: newGiftCard.code,
    });
  } catch (error) {
    console.error("Error creating gift card:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
