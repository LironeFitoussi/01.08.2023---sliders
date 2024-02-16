const express = require("express");
const morgan = require("morgan");

const authRouter = require("./routes/authRoutes");
// const userRouter = require("./routes/userRoutes");
// const productsRouter = require("./routes/productsRouter");
// const ordersRouter = require("./routes/ordersRoutes");
// const cuponsRouter = require("./routes/cuponsRouter");
// const giftCodeRouter = require("./routes/giftCode");

app.use(express.json());

app.use((req, res, next) => {
  next();
});

//? Status: creating model
app.use("/api/v1/auth", authRouter);

// TODO: Configure rest api routes
// app.use("/api/v1/tours", userRouter);
// app.use("/api/v1/products", productsRouter);
// app.use("/api/v1/orders", ordersRouter);
// app.use("/api/v1/cupons", cuponsRouter);
// app.use("/api/v1/gift-codes", giftCodeRouter);
