module.exports = (query) => {
    let textSearch = "";
    if (query.search) {
        textSearch = query.search;
        //tạo regex
        const regex = new RegExp(textSearch, 'i');
        return { a: regex, b: textSearch };
    } else {
        return { a: "", b: textSearch };
    }
}