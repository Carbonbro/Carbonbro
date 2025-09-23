document.addEventListener('DOMContentLoaded', () => {
    // 獲取模式切換按鈕和 body 元素
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // 為按鈕添加點擊事件監聽器
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            // 切換 body 上的 'light-mode' class
            body.classList.toggle('light-mode');

            // 根據當前模式更新按鈕文字
            if (body.classList.contains('light-mode')) {
                themeToggleBtn.textContent = '淺色模式';
            } else {
                themeToggleBtn.textContent = '深色模式';
            }
        });
    }
});
