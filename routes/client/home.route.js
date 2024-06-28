const express = require('express');
//sử dụng th router của express để đỡ phải truyền app
//đây là router của th product, bên index(router cha) đã truyền vào / rồi nên bên này chỉ cần truyền vào ./ thôi
const router = express.Router();

//import controller:
const controller = require('../../controllers/client/home.controller');

router.get('/', controller.index);

module.exports = router;