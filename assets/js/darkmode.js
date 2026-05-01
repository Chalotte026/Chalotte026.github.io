const initTheme = () => {
    // เช็คทั้ง localStorage และค่าจากระบบ OS
    const isDark = localStorage.theme === 'dark' || 
                  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', isDark);
};

const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.theme = isDark ? 'dark' : 'light';
};

// รันทันทีเพื่อกันหน้าจอกระพริบสีขาว (FOUC)
initTheme();

// รอจนกว่า Web Component จะสร้างปุ่มเสร็จแล้วค่อยผูก Event
window.addEventListener('DOMContentLoaded', () => {
    const checkBtn = setInterval(() => {
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleTheme);
            clearInterval(checkBtn);
        }
    }, 50);
});