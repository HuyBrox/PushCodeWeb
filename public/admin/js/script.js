//xử lí button
const buttonStatus = document.querySelectorAll('[btn-status]');
if (buttonStatus.length > 0) {
    let url = new URL(window.location.href);
    buttonStatus.forEach(btn => {
        btn.addEventListener('click', function () {
            const status = this.getAttribute('btn-status');

            if (status) {
                url.searchParams.set('status', status);
            } else {
                url.searchParams.delete('status');
            }
            console.log(url);
            window.location.href = url.href;
        })
    })
}
//xử lí search
const search = document.querySelector('[textSearch]');
if (search) {
    const btnSearch = document.querySelector('.btnSearch');
    btnSearch.addEventListener('click', function () {
        let url = new URL(window.location.href);
        if (search.value === '') {
            url.searchParams.delete('search');
            window.location.href = url.href;
        }
    })
}
//xử lí pagination
const btnPagination = document.querySelectorAll('[btn-page]');
if (btnPagination) {
    let url = new URL(window.location.href);
    btnPagination.forEach(btn => {
        btn.addEventListener('click', function () {
            const page = this.getAttribute('btn-page');
            if (page) {
                url.searchParams.set('page', page);
            } else {
                url.searchParams.delete('page');
            }
            window.location.href = url.href;
        })
    })
}
//check box
const checkBoxMulti = document.querySelector('[checkbox-multi]');
if (checkBoxMulti) {
    const checkAll = checkBoxMulti.querySelector('#check-all');
    const inputId = checkBoxMulti.querySelectorAll("input[name='id']");
    checkAll.addEventListener('click', function () {
        if (checkAll.checked) {
            inputId.forEach(item => {
                item.checked = true;
            })
        } else {
            inputId.forEach(item => {
                item.checked = false;
            })
        }
    })
    inputId.forEach(item => {
        item.addEventListener('click', () => {
            const countChecked = checkBoxMulti.querySelectorAll("input[name=id]:checked").length
            if (inputId.length == countChecked) {
                checkAll.checked = true;
            } else {
                checkAll.checked = false;
            }
        })
    });
}
const formChangeMulti = document.querySelector('[form-change-multi]');
if (formChangeMulti) {
    formChangeMulti.addEventListener('submit', (e) => {
        e.preventDefault(); // Ngăn chặn sự kiện mặc định khi submit

        const checkBoxMulti = document.querySelector('[checkbox-multi]');
        const inputChecked = checkBoxMulti.querySelectorAll("input[name='id']:checked");
        const selectType = document.querySelector('select.form-control option:checked').value;
        const pathForm = formChangeMulti.getAttribute('path');

        if (inputChecked.length > 0 && selectType !== '') {
            let listId = [];
            if (selectType != 'ChangeManyPosition') {
                inputChecked.forEach(item => {
                    const id = item.value;
                    listId.push(id);
                });
                formChangeMulti.querySelector("input[name='ids']").value = listId.join(", ");
            } else {
                inputChecked.forEach(item => {
                    const id = item.value;
                    const position = item.closest('tr').querySelector('input[name="position"]').value;

                    listId.push(`${id}-${position}`);
                });
                formChangeMulti.querySelector("input[name='ids']").value = listId.join(", ");
            }
            switch (selectType) {
                case 'Active':
                    formChangeMulti.action = `${pathForm}change-multi?_method=PATCH`;
                    break;
                case 'Inactive':
                    formChangeMulti.action = `${pathForm}change-multi?_method=PATCH`;
                    break;
                case 'DeleteManyItem':
                    formChangeMulti.action = `${pathForm}delete-multi?_method=DELETE`;
                    break;
                case 'ChangeManyPosition':
                    formChangeMulti.action = `${pathForm}change-position?_method=PATCH`;
                    break;
                default:
                    break;
            }
            formChangeMulti.submit();
        } else {
            if (inputChecked.length === 0 && selectType === '') {
                alert('Xem lại thông tin bạn đã chọn');
            } else {
                if (inputChecked.length === 0) {
                    alert("Chọn ít nhất 1 sản phẩm");
                }
                if (selectType === '') {
                    alert("Chọn Chức Năng");
                }
            }
        }
    });
}
//Show alert
const showAlert = document.querySelector('[show-alert]');
if (showAlert) {
    const timeOut = showAlert.getAttribute('data-time');
    const closeAlert = showAlert.querySelector('.close-alert');
    setTimeout(() => {
        showAlert.classList.add('alert-hidden');
    }, timeOut);
    closeAlert.addEventListener('click', () => {
        showAlert.classList.add('alert-hidden');
    })
}
//preview image
// preview image
const uploadImg = document.querySelector('[upload-img]');
if (uploadImg) {
    const previewImg = document.querySelector('[preview-img]');
    const inputImg = document.querySelector('[input-img]');
    const btnClosePreview = document.querySelector('[close-img]');
    const groupInputImg = document.querySelector('.image-preview-container');
    inputImg.addEventListener('change', (e) => {
        console.log(e);
        const file = e.target.files[0];
        if (file) {
            previewImg.src = URL.createObjectURL(file);
            previewImg.style.display = 'block';
            btnClosePreview.style.display = 'inline-block';
            groupInputImg.style.display = 'block';
        }
    });
    if (previewImg !== '') {
        previewImg.style.display = 'block';
        btnClosePreview.style.display = 'inline-block';
        groupInputImg.style.display = 'block';
    }
    btnClosePreview.addEventListener('click', () => {
        previewImg.src = '';
        previewImg.style.display = 'none';
        btnClosePreview.style.display = 'none';
        inputImg.value = '';
    });
}

