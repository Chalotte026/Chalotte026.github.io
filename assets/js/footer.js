class FooterSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer id="footer" class="py-8 dark:border-gray-800">
                <div class="nav-container text-center">
                    <p class="text-sm opacity-50">
                        &copy; 2024 Patinya Charoonchart. Built with ❤️ and Code.
                    </p>
                </div>
            </footer>

            <!-- ปุ่มลอย Back to Top พร้อมรูป SVG -->
            <button id="back-to-top" class="fixed bottom-8 right-8 shadow-xl translate-y-20 opacity-0 transition-all duration-300 z-50 flex items-center justify-center cursor-pointer">
                <img src="assets/img/arrow_upward.svg" alt="Top" class="btt-icon">
            </button>
        `;
        this.initBackToTop();
    }

    initBackToTop() {
        const btn = this.querySelector('#back-to-top');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                btn.classList.remove('translate-y-20', 'opacity-0');
                btn.classList.add('translate-y-0', 'opacity-100');
            } else {
                btn.classList.add('translate-y-20', 'opacity-0');
                btn.classList.remove('translate-y-0', 'opacity-100');
            }
        });

        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}
customElements.define('m-footer', FooterSection);
