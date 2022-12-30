document.addEventListener('DOMContentLoaded', () => {
    const btnModal = document.querySelector('[data-modal]'),
        btnModalMob = document.querySelector('[data-modal-mob]'),
        cLosed = document.querySelector('[data-closed]'),
        modal = document.querySelector('.modal');

    btnModal.onclick = function () {
        modal.classList.toggle('modal-active');
    };

    btnModalMob.onclick = function () {
        modal.classList.toggle('modal-active');
    };

    cLosed.onclick = function () {
        modal.classList.remove('modal-active');
    };
});