const express = require("express");

const authController = require("../controllers/authController");
const productsController = require("../controllers/productsController");

const router = express.Router();
router.route("/").get(productsController.getAllProducts);

router
  .get(productsController.getSingleProduct)
  .route("/:id")
  .patch(authController.isAdmin, productsController.updateProduct)
  .delete(authController.isAdmin, productsController.deleteProduct);

router.route("/search").get(productsController.getProductByName);
module.exports = router;
