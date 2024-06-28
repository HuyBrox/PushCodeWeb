const Product = require("../../models/product.model");

//tách controller, index là tên hàm (ở đây là trang chủ (của product) nên đặt index);
module.exports.index = async (req, res) => {
    const products = await Product.find({
        deleted: false,
        status: "Active"
    }).sort({ position: -1 });
    res.render("client/pages/product/index", {
        pagesTitle: "Trang sản phẩm",
        // dòng này để extract ra các product từ database gán vào biến products
        products: products
    })
}
module.exports.detail = async (req, res) => {
    try {
        const product = await Product.findOne({
            deleted: false,
            slug: req.params.slug
        });
        res.render("client/pages/product/detail", {
            pagesTitle: product.title,
            product: product
        })
    } catch (error) {
        console.log(error);
        res.redirect("/product");
    }
}
