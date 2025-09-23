document.addEventListener('DOMContentLoaded', () => {
    // 獲取模式切換按鈕和 body 元素
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const skyObject = document.getElementById('sky-object');

    // 初始設定按鈕文字 (淺色模式是預設)
    themeToggleBtn.textContent = '深色模式';

    // 為按鈕添加點擊事件監聽器
    if (themeToggleBtn && skyObject) {
        themeToggleBtn.addEventListener('click', () => {
            // 切換 body 上的 'dark-mode' class
            body.classList.toggle('dark-mode');

            // 根據當前模式更新按鈕文字和天空物體圖標
            if (body.classList.contains('dark-mode')) {
                themeToggleBtn.textContent = '淺色模式';
                skyObject.innerHTML = '<i class="fas fa-moon"></i>'; // 切換為月亮圖標
            } else {
                themeToggleBtn.textContent = '深色模式';
                skyObject.innerHTML = '<i class="fas fa-sun"></i>'; // 切換回太陽圖標
            }
        });
    }
});
