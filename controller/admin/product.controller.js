const Product = require("../../models/product.model");
// [GET] /admin/products
module.exports.index = async (req, res) => {

    const products = await Product.find({
        deleted: false
      });


    res.render("admin/page/products/index", {
      pageTitle: "Danh sách sản phẩm",
      products: products
    });
  }