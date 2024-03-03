const Payment = require("../models/paymentModel");
exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json({
      status: "success",
      data: {
        payments,
      },
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getUserPayments = async (req, res) => {
  try {
    const user = req.user;
    const payments = await Payment.find({ user: user._id });
    res.status(200).json({
      status: "success",
      data: {
        payments,
      },
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getIdPayments = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        payment,
      },
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
