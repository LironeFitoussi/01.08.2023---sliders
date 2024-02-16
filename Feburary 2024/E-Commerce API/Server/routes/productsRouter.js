const express = require("express");

const authController = require("../controllers/authController");
const productsController = require("../controllers/productsController");

const router = express.Router();
router.route("/").get(productsController.getAllProducts);

router.route("/:id").get(productsController.getSingleProduct);
router
  .route("/:id")
  .patch(authController.isAdmin, productsController.updateProduct);
module.exports = router;
