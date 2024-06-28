module.exports = (query) => {

    //chứa tất cả đoạn code xử lí logic của controller
    let filterStatus = [
        {
            name: 'Tất cả',
            status: '',
            class: ''
        },
        {
            name: 'Hoạt động',
            status: 'Active',
            class: ''
        },
        {
            name: 'Dừng hoạt động',
            status: 'Inactive',
            class: ''
        }
    ];
    if (query.status) {
        const index = filterStatus.findIndex(item => item.status == query.status);
        filterStatus[index].class = 'active';
    } else {
        filterStatus[0].class = 'active';
    }
    return filterStatus;
}