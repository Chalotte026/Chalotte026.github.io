class Navbar extends HTMLElement {
    connectedCallback() {
        const path = window.location.pathname;
        const isProjectPage = path.includes('projects.html') || path.includes('project-detail.html');

        const menuItems = isProjectPage 
            ? `<a href="index.html" class="nav-link">Home</a>`
            : `<a href="#about" class="nav-link">About</a>
               <a href="#skills" class="nav-link">Skills</a>
               <a href="#projects" class="nav-link">Project</a>
               <a href="#contact" class="nav-link">Contact</a>`;

        this.innerHTML = `
            <nav id="main-nav" class="sticky top-0 z-50 shadow-sm bg-white dark:bg-gray-900 transition-colors">
                <div class="nav-container">
                    <div class="flex justify-between h-16 items-center">
                        
                        <div class="flex-shrink-0 flex items-center">
                            <a href="index.html" class="w-32 h-10 flex items-center overflow-hidden">
                                <img src="assets/img/logolightmode.png" class="logo-light w-full h-full object-contain">
                                <img src="assets/img/logodarkmode.png" class="logo-dark w-full h-full object-contain">
                            </a>
                        </div>

                        <div class="flex items-center space-x-2 sm:space-x-4">
                            <!-- Desktop Links -->
                            <div class="hidden md:flex items-center space-x-6 mr-4">
                                ${menuItems}
                            </div>

                            <!-- ปุ่ม Menu (ซ่อนถ้าเป็นหน้า Project เพราะมีแค่ลิงก์เดียว) -->
                            <button id="mobile-menu-btn" class="${isProjectPage ? 'hidden' : 'flex'} md:hidden p-2 rounded-lg cursor-pointer items-center justify-center bg-gray-100 dark:bg-gray-800">
                                <img src="assets/img/menubar.svg" alt="Menu" class="icon-menu w-6 h-6">
                            </button>

                            <!-- ปุ่ม Dark Mode -->
                            <button id="theme-toggle" class="p-2 rounded-lg cursor-pointer flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                                <img src="assets/img/light_mode.svg" class="sun-icon icon-toggle w-6 h-6">
                                <img src="assets/img/bedtime.svg" class="moon-icon icon-toggle w-6 h-6">
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Mobile Dropdown -->
                <div id="mobile-menu-content" class="hidden md:hidden shadow-lg bg-white dark:bg-gray-900">
                    <div class="px-4 py-3 space-y-1"> 
                        ${menuItems}
                    </div>
                </div>
            </nav>
        `;
        this.setupMobileMenu();
    }
    
    setupMobileMenu() {
        const btn = this.querySelector('#mobile-menu-btn');
        const content = this.querySelector('#mobile-menu-content');
        if (btn && content) {
            btn.addEventListener('click', () => content.classList.toggle('hidden'));
            content.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => content.classList.add('hidden'));
            });
        }
    }
}
customElements.define('m-navbar', Navbar);
