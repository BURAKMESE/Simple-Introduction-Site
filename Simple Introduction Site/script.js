document.addEventListener('DOMContentLoaded', () => {
    const contentHeading = document.getElementById('content-heading');
    const contentText = document.getElementById('content-text');
    const changeContentBtn = document.getElementById('change-content-btn');

    changeContentBtn.addEventListener('click', () => {
        contentHeading.textContent = 'Yeni Başlık';
        contentText.textContent = 'Yeni içerik metni burada olacak.';
    });
});