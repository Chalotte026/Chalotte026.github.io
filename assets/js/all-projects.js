class AllProjects extends HTMLElement {
    constructor() {
        super();
        this.currentFilter = "All"; 
    }

    connectedCallback() {
        this.render();
    }
    render() {
        const filteredProjects = this.currentFilter === "All" 
            ? projectsData 
            : projectsData.filter(p => p.tag === this.currentFilter);

        const filterButtons = ["All", ...allTags].map(tag => `
            <button class="filter-btn ${this.currentFilter === tag ? 'active' : ''}" 
                    data-tag="${tag}">
                ${tag}
            </button>
        `).join('');

        const projectsHTML = filteredProjects.map(project => `
            <div class="featured-card project-fade-in">
                <div class="project-img-container" >
                    <img src="${project.images[0]}" alt="${project.title}" style="width: 100%; height: 100%; object-cover: cover; border-radius: 1rem;">
                </div>
                <div class="project-info">
                    <span class="project-tag">${project.tag}</span>
                    <h3 style="font-size: 1.5rem;">${project.title}</h3>
                    <div class="flex mt-auto ">
                        <a href="project-detail.html?id=${project.id}" class="btn-secondary">
                            View Details →
                        </a>
                    </div>
                </div>
            </div>
        `).join('');

        this.innerHTML = `
            <section class="projects-section" >
                <div class="nav-container">
                    <div class="skills-header">
                        <h2>My All <span>Projects</span></h2>
                        <p class="opacity-70">Gather all my software development work and analyze all my data.</p>
                    </div>
                    <div class="filter-container mt-8 flex flex-wrap justify-center gap-4">
                        ${filterButtons}
                    </div>                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        ${projectsHTML}
                    </div>
                </div>
            </section>
        `;
        this.setupEventListeners();
    }
    setupEventListeners() {
        const buttons = this.querySelectorAll('.filter-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.currentFilter = btn.getAttribute('data-tag');
                this.render(); // สั่งวาดหน้าใหม่พร้อมข้อมูลที่กรองแล้ว
            });
        });
    }
}
customElements.define('m-all-projects', AllProjects);
