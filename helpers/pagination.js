module.exports = (object, query, countProduct) => {
    if (query.page) {
        object.currentPage = parseInt(query.page);
        object.skip = (object.currentPage - 1) * object.limitItem
    }
    //tính số lượng trang
    const totalPage = Math.ceil(countProduct / object.limitItem);
    object.totalPage = totalPage;
    return object;
}