const Product = require("../models/productModel");

const slugify = require("slugify");
const { paginate } = require("mongoose-paginate-v2");
Product.paginate = paginate;

exports.getAllProducts = async (req, res) => {
  try {
    // Set default values for page and limit
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    // Use mongoose-paginate-v2 to paginate the results
    const options = {
      page,
      limit,
    };

    const result = await Product.paginate({}, options);

    res.status(200).json({
      status: "success",
      pagination: {
        totalDocs: result.totalDocs,
        totalPages: result.totalPages,
        page: result.page,
        limit: result.limit,
        hasNextPage: result.hasNextPage,
        hasPrevPage: result.hasPrevPage,
        nextPage: result.nextPage,
        prevPage: result.prevPage,
      },
      data: {
        products: result.docs,
      },
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.uploadProductImage = async (req, res) => {};
exports.createProduct = async (req, res) => {
  try {
    const slug = slugify(req.body.name, { lower: true });
    req.body.slug = slug;

    const product = await Product.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getProductByName = async (req, res) => {
  try {
    console.log(req.query);
    const regex = new RegExp(req.query.name, "i");
    const products = await Product.find({ slug: { $regex: regex } });
    res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
