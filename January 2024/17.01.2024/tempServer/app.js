import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let userData = {
  mail: null,
  name: null,
};

app.use(cors());
app.use(bodyParser.json());

app.get("/user", (req, res) => {
  res.json(userData);
});

app.post("/user", (req, res) => {
  const formData = req.body;
  console.log("Received form data:", formData);
  userData = formData;
  res.json({ message: "Form data received successfully!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
