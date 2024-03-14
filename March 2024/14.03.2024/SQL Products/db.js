// db.js
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "ProductsSQL",
  password: "Nveurvtjh147",
  port: 5432,
});
db.connect();

export default db;
