const express = require("express");

const authController = require("../controllers/authController");
const productsController = require("../controllers/productsController");

const router = express.Router();
router.route("/").get(productsController.getAllProducts);

router
  .route("/:id")
  .get(productsController.getSingleProduct)
  .patch(authController.isAdmin, productsController.updateProduct)
  .delete(authController.isAdmin, productsController.deleteProduct);

router
  .route("/:id/addToCart")
  .patch(authController.userValidator, productsController.addToCart);

router
  .route("/:id/removeFromCart")
  .delete(authController.userValidator, productsController.removeFromCart);

router.route("/search").get(productsController.getProductByName);
module.exports = router;
