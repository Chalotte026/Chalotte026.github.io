class ProjectsSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="projects" class="projects-section">
                <div class="nav-container">
                    <div class="skills-header text-center">
                        <div>
                            <h2>Featured Capstone <span><strong>Project</strong></span></h2>
                            <p class="opacity-70 mt-2 mb-8 text-sm md:text-base mx-auto max-w-2xl">
                                A highlight of the graduation project that incorporates a comprehensive range of skill development.
                            </p>
                        </div>
                        <a href="projects.html" class="group flex items-center gap-2 font-bold transition-all duration-300" style="color: var(--text-color);">
                            <span class="group-hover:text-[var(--accent-color)] transition-colors">View All Projects</span>
                            <svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" 
                                 class="group-hover:text-[var(--accent-color)] group-hover:translate-x-2 transition-all duration-300">
                                <path d="M5 12h14 m-7-7 7 7-7 7"/>
                            </svg>
                        </a>
                    </div>

                    <div class="featured-card">
                        <div class="project-img-container" style="height: 500px; overflow: hidden; border-radius: 1.5rem; pointer-events: auto;">
                            <div class="swiper mySwiper" style="height: 100%;">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide"><img src="assets/img/projects/project1_1.png" style="width:100%; height:100%; object-fit: cover; transition: none;"></div>
                                    <div class="swiper-slide"><img src="assets/img/projects/project1_2.png" style="width:100%; height:100%; object-fit: cover; transition: none;"></div>
                                    <div class="swiper-slide"><img src="assets/img/projects/project1_3.png" style="width:100%; height:100%; object-fit: cover; transition: none;"></div>
                                    <div class="swiper-slide"><img src="assets/img/projects/project1_4.png" style="width:100%; height:100%; object-fit: cover; transition: none;"></div>
                                </div>
                                <div class="swiper-button-next"></div>
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>

                        <div class="project-info">
                            <span class="project-tag">Full-Stack Capstone Project</span>
                            <h3>University Openhouse Dynamic Platform</h3>
                            <p>
                                <strong>As my inaugural web development project,</strong> I re-engineered a traditional static university website into a <strong>Robust Dynamic Platform</strong>. 
                                Developed a comprehensive CMS allowing admins to manage real-time content, themes, and multimedia.
                            </p>
                            <p class="text-sm opacity-80 mb-6">
                                Integrated a registration system with an <strong>Admin Dashboard</strong> that transforms raw data into <strong>Visual Insights</strong> using interactive graphs.
                            </p>
                            
                            <div class="skill-tags mb-8">
                                <span class="tag">HTML/CSS/Javascript</span>
                                <span class="tag">Firebase</span>
                                <span class="tag">Data Visualization</span>
                            </div>

                            <div class="flex gap-4">
                                <a href="project-detail.html?id=1" class="btn-secondary flex items-center gap-2 active:scale-95 transition-transform">
                                    View Project Details
                                    <svg xmlns="http://w3.org" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14L21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
        this.initSwiper();
    }

    initSwiper() {
        setTimeout(() => {
            new Swiper(".mySwiper", {
                loop: true,
                grabCursor: true,
                pagination: { el: ".swiper-pagination", clickable: true },
                navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
                autoplay: { delay: 4000, disableOnInteraction: false },
            });
        }, 100);
    }
}
customElements.define('m-projects', ProjectsSection);
