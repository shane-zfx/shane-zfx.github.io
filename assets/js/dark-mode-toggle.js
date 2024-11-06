// _includes/dark-mode-toggle.js

// 检查用户之前的偏好设置
const userPreference = localStorage.getItem('theme');
const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

if (userPreference) {
    document.body.classList.toggle('dark-mode', userPreference === 'dark');
} else {
    document.body.classList.toggle('dark-mode', systemPreference === 'dark');
}

// 切换暗黑模式
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const newTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme); // 保存用户偏好
}

// 在页面上添加按钮
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Toggle Dark Mode';
    toggleButton.onclick = toggleDarkMode;
    document.body.appendChild(toggleButton);
});
