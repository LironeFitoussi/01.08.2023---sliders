const express = require("express");
const morgan = require("morgan");

const userRouter = require("./routes/userRoutes");
const productsRouter = require("./routes/productsRouter");

const app = express();
// const ordersRouter = require("./routes/ordersRoutes");
// const cuponsRouter = require("./routes/cuponsRouter");
// const giftCodeRouter = require("./routes/giftCode");

app.use(express.json());

app.use((req, res, next) => {
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.headers);
  next();
});

//? Status: creating model
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productsRouter);

// TODO: Configure rest api routes
// app.use("/api/v1/orders", ordersRouter);
// app.use("/api/v1/cupons", cuponsRouter);
// app.use("/api/v1/gift-codes", giftCodeRouter);

module.exports = app;
