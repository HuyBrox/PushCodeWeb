module.exports.createPost = (req, res, next) => {
    if (!req.body.title) {
        req.flash('error', 'Vui lòng nhập tên sản phẩm!');
        res.redirect('back');
        return;
    }
    if (req.file) {
        req.body.thumbnail = `/uploads/${req.file.filename}`;
    } else {
        req.body.thumbnail = 'https://img4.thuthuatphanmem.vn/uploads/2020/05/07/hinh-anh-cute-dep-nhat_093404024.jpg'; // Đặt giá trị mặc định nếu không có file
    }
    next();
}
// [PATCH] edit/:id
module.exports.editPatch = (req, res, next) => {
    if (!req.body.title) {
        req.flash('error', 'Vui lòng nhập tên sản phẩm!');
        res.redirect('back');
        return;
    }
    if (req.file) {
        req.body.thumbnail = `/uploads/${req.file.filename}`;
    } else {
        req.body.thumbnail = 'https://img4.thuthuatphanmem.vn/uploads/2020/05/07/hinh-anh-cute-dep-nhat_093404024.jpg'; // Đặt giá trị mặc định nếu không có file
    }
    next();
}