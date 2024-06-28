if (document.querySelector('[btn-change-status]')) {
    document.addEventListener('DOMContentLoaded', () => {
        const btnChangeStatus = document.querySelectorAll('[btn-change-status]');
        const formChangeStatus = document.querySelector('#form-change-status');
        const patch = formChangeStatus.getAttribute('data-patch');
        console.log(patch);
        if (btnChangeStatus.length > 0) {
            btnChangeStatus.forEach(btn => {
                btn.addEventListener('click', () => {
                    const dataStatus = btn.getAttribute('data-status');
                    const id = btn.getAttribute('data-id-status');
                    let statusChange = (dataStatus == 'Active') ? 'Inactive' : 'Active';
                    console.log(statusChange);
                    const action = `${patch}/${statusChange}/${id}?_method=PATCH`;
                    console.log(action)
                    formChangeStatus.setAttribute('action', action);
                    formChangeStatus.submit();
                })
            })
        }
    });
}
//=======Xóa sản phẩm=======
const btn_delete = document.querySelectorAll('[btn-delete]');
if (btn_delete.length > 0) {
    btn_delete.forEach(btn => {
        btn.addEventListener('click', () => {
            const form_delete = document.querySelector('#form-delete')
            const path = form_delete.getAttribute('data-path')
            const confirmDelete = confirm('Bạn có chắc muốn xóa sản phẩm này không?');
            if (confirmDelete) {
                const id = btn.getAttribute('data-id');
                form_delete.action = `${path}/${id}?_method=DELETE`;
                form_delete.submit();
            }
        })
    })
}
//=======Thêm mới sản phẩm=======


