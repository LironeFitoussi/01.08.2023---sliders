const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/productModel");

dotenv.config({ path: "./config.env" });

const db = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(db)
  .then(() => console.log("db DevDataLoader connection successful"));

//   REAS JS File
const products = JSON.parse(
  fs.readFileSync(`${__dirname}/dummy-products.json`, "utf8")
);

// IMPORT DATA TO DB
const importData = async () => {
  try {
    await Product.create(products);
    console.log("Data Successfully Imported!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE DATA FROM DB
const deleteData = async () => {
  try {
    await Product.deleteMany();
    console.log("Data Successfully Deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
