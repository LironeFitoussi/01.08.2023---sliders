const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const userRouter = require("./routes/userRoutes");
const productsRouter = require("./routes/productsRouter");
const cartRouter = require("./routes/cartRoutes");
const paymentRouter = require("./routes/paymentRouter");
const cuponsRouter = require("./routes/couponsRouter");
const giftCardRouter = require("./routes/giftCardRouter");
const ordersRouter = require("./routes/ordersRoutes");
const adminRouter = require("./routes/adminRouter");
const authController = require("./controllers/authController");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.use((req, res, next) => {
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//? Status: creating model
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/cart", authController.userValidator, cartRouter);
app.use("/api/v1/payment", authController.isAdmin, paymentRouter);
app.use("/api/v1/coupons", cuponsRouter);
app.use("/api/v1/gift-card", giftCardRouter);
app.use("/api/v1/orders", ordersRouter);
app.use("/api/v1/admin", authController.isAdmin, adminRouter);

module.exports = app;
