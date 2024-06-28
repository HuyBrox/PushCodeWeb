const express = require('express');
const database = require('./config/database');
//import method override

const methodOverride = require('method-override');
//import route client
const route = require('./routes/client/index.route');

//nhúng multer để upload file ảnh
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' });

//import file biến cấu hình hệ thống
const systemConfig = require('./config/system');

//import route admin
const routeAdmin = require('./routes/admin/index.route');
const bodyParser = require('body-parser');

//connect database
database.connect();
const app = express();

// //inport cookie parser
const cookieParser = require('cookie-parser');
app.use(cookieParser())

//import session
const session = require('express-session');

// Cung cấp giá trị cho tùy chọn 'secret'
app.use(session({
    secret: 'mysecret', // Thay 'mysecret' bằng một chuỗi bí mật mạnh mẽ hơn
    resave: false,
    saveUninitialized: true
}));

//import flash: hiển thị thống báo
const flash = require('express-flash');
app.use(cookieParser('huypassworkcookie'));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());
//==================================================
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

//cấu hình pug:
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');
//Khai báo biến toàn cục
app.locals.prefixAdmin = systemConfig.prefixAdmin;
//Cấu hình public folder
app.use(express.static(`${__dirname}/public`));
//route client
route(app);
//route admin
routeAdmin(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});



