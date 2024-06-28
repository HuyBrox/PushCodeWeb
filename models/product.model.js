const mongoose = require('mongoose');
//imprort mongoose-slug-updater
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);
//Tạo schema
const productSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    stock: Number,
    thumbnail: String,
    status: String,
    position: Number,
    slug: {
        type: String,
        slug: "title",
        unique: true
    },
    deleted: {
        type: Boolean,
        default: false
    },
    deletedAt: Date
}, {
    timestamps: true
});
//tham số thứ nhất là tên model, tham số thứ 2 là schema, tham số thứ 3 là tên collection
const Product = mongoose.model('product', productSchema, "products");

module.exports = Product;