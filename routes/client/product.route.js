const express = require('express');
//sử dụng th router của express để đỡ phải truyền app
//đây là router của th product, bên index(router cha) đã truyền vào /product rồi nên bên này chỉ cần truyền vào ./ thôi
const router = express.Router();

//import controller:
const controller = require('../../controllers/client/product.controller');
router.get('/', controller.index);
router.get('/:slug', controller.detail);
module.exports = router;