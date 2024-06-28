const dashboardRouter = require('./dashboard.route');
const productRouter = require('./product.route');
const systemConfig = require('../../config/system');
module.exports = (app) => {
    const pathAdmin = systemConfig.prefixAdmin;
    app.use(pathAdmin + '/dashboard', dashboardRouter);
    app.use(pathAdmin + '/product', productRouter);
}