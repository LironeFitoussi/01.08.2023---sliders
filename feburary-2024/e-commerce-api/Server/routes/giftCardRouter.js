const express = require("express");
const router = express.Router();
const giftCardController = require("../controllers/giftCardController");
const authController = require("../controllers/authController");
const { post } = require("./cartRoutes");

//! All Admin Operations
// Create a Gift Card
router
  .route("/admin/create")
  .post(authController.isAdmin, giftCardController.createGiftCard);

// Get All Gift Card
router
  .route("/admin/showAll")
  .get(authController.isAdmin, giftCardController.getAllGiftCards);

// Get Gift Card by code
router
  .route("/admin/:id")
  .get(authController.isAdmin, giftCardController.getAllGiftCardsByCode);

// Delete Gift Card
router
  .route("/admin/:id/delete")
  .delete(authController.isAdmin, giftCardController.deleteGiftCard);

// Update Gift Card
router
  .route("/admin/:id/update")
  .patch(authController.isAdmin, giftCardController.updateGiftCard);

//! All Users Operations
// Buy Gift Card
router
  .route("/:id/buy")
  .post(authController.userValidator, giftCardController.buyGiftCard);

// Empty route
// router.route("/").get((req, res) => {
//   res.send("Welcome to the homepage!");
// });

module.exports = router;
