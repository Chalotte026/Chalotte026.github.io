class HeroSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="hero-section relative overflow-hidden">
                <div class="nav-container flex flex-col md:flex-row gap-12 items-center relative z-10 py-20">
                    <div class="hero-content flex-1 text-center md:text-left">
                        <h1 class="text-5xl md:text-7xl">Hi, I'm <span><strong>Patinya</strong></span></h1>
                        <h2 class="text-2xl md:text-3xl font-bold mt-4">
                            Exploring <span id="typewriter" class="text-accent"></span>
                        </h2>
                        <p class="mt-6 text-lg opacity-80 leading-relaxed max-w-xl mx-auto md:mx-0">
                            A <strong>Computer Science</strong> enthusiast who enjoys building complete solutions. 
                            I focus on creating clean interfaces while leveraging data to solve real-world problems.
                        </p>
                        <div class="flex gap-4 justify-center md:justify-start mt-8">
                            <a href="assets/pdf/Resume_Patinya_Charoonchart_Engineer.pdf" download class="btn-secondary flex items-center gap-2 active:scale-95 group">
                                Download Resume
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-y-1 transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                            </a>
                            <a href="#projects" class="btn-primary flex items-center gap-2">
                                View Projects
                            </a>
                        </div>
                    </div>

                    <!-- ส่วนรูปภาพพร้อมลูกเล่น Floating -->
                    <div class="hero-image-container flex-1 relative">
                        <div class="relative inline-block">
                            <img src="assets/img/profile1.jpg" alt="Patinya" class="profile-img relative z-10 shadow-2xl">
                            <div class="quarter-circle-decor"></div>
                            
                            <!-- Floating Icons (ลูกเล่นไอคอนลอย) -->
                            <div class="floating-icon icon-1"><i class="fab fa-python text-blue-500"></i></div>
                            <div class="floating-icon icon-2"><i class="fab fa-js text-yellow-400"></i></div>
                            <div class="floating-icon icon-3"><i class="fas fa-database text-accent"></i></div>
                        </div>
                    </div>
                </div>

                <div class="wave-container-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="xMinYMax slice">
                        <path fill="var(--accent-color)" opacity="0.4"
                            d="M0,96L40,117.3C80,139,160,181,240,181.3C320,181,400,139,480,117.3C560,96,640,96,720,117.3C800,139,880,181,960,192C1040,203,1120,181,1200,149.3C1280,117,1360,75,1400,53.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
                        </path>
                    </svg>
                </div>
            </section>
        `;
        this.initTypewriter();
    }

    initTypewriter() {
        const words = ["Web Solutions", "Mobile Apps", "Data Insights", "AI Models"];
        let i = 0;
        let timer;
        const target = this.querySelector('#typewriter');

        function type() {
            let word = words[i].split("");
            var loopTyping = function() {
                if (word.length > 0) {
                    target.innerHTML += word.shift();
                    timer = setTimeout(loopTyping, 100);
                } else {
                    setTimeout(deleteWord, 2000);
                }
            };
            loopTyping();
        }

        function deleteWord() {
            let word = target.innerHTML;
            var loopDeleting = function() {
                if (word.length > 0) {
                    word = word.substring(0, word.length - 1);
                    target.innerHTML = word;
                    timer = setTimeout(loopDeleting, 50);
                } else {
                    i = (i + 1) % words.length;
                    type();
                }
            };
            loopDeleting();
        }
        type();
    }
}
customElements.define('m-hero', HeroSection);
