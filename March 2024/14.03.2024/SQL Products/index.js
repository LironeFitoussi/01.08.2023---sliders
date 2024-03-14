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
      "SELECT * FROM products ORDER BY product_id ASC"
    );
    const items = result.rows; // Assuming the column names match the properties of the item objects

    // Log the retrieved items
    // console.log(items);

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
