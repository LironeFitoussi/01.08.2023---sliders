import express from "express";
import bodyParser from "body-parser";
import ip from "ip";
import db from "./db.js";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs"); // Set the view engine to EJS

app.get("/", async (req, res) => {
  const ipAddress = ip.address();
  console.log(`${ipAddress} is Connected.`);

  try {
    // Fetch items from the database
    const result = await db.query(
      `
            SELECT p.product_id, p.product_name, c.category_name, p.price, p.stock_quantity, p.description
            FROM products p
            JOIN categories c ON p.category_id = c.category_id
            ORDER BY p.product_id ASC;
        `
    );
    const items = result.rows; // Assuming the column names match the properties of the item object

    // Render the index.ejs template with the retrieved items
    res.render("index", {
      listTitle: "Products",
      listItems: items,
    });
  } catch (err) {
    console.error("Error fetching items:", err);
    res.status(500).send("Internal Server Error"); // Send an error response to the client
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
