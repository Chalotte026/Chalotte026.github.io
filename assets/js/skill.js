class SkillsSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="skills" class="skills-section">
                <div class="nav-container">
                    <div class="skills-header text-center mb-12">
                        <h2 class="text-3xl font-bold">Technical <span><strong>Skills</strong></span></h2>
                    </div>
                    
                    <div class="skills-bento">
                        <!-- 1. Programming Languages (Core) -->
                        <div class="bento-item core">
                            <h3 class="font-bold text-accent mb-2">Programming Languages</h3>
                            <p class="text-sm opacity-70 mb-4">The foundational logic I use across all development stacks.</p>
                            <div class="skill-tags">
                                <span class="tag">JavaScript</span>
                                <span class="tag">Python</span>
                                <span class="tag">PHP</span>
                                <span class="tag">SQL</span>
                                <span class="tag">C#</span>
                            </div>
                        </div>

                        <!-- 2. Frontend Development (Large) -->
                        <div class="bento-item frontend large">
                            <h3 class="font-bold text-accent mb-2">Frontend Development</h3>
                            <p class="text-sm opacity-70 mb-4">Crafting high-performance, responsive web interfaces with a focus on modern libraries and clean UI/UX.</p>
                            <div class="skill-tags">
                                <span class="tag">HTML5</span> 
                                <span class="tag">CSS3</span>  
                                <span class="tag">React.js</span>
                                <span class="tag">Tailwind CSS</span>
                                <span class="tag">Material UI</span>
                                <span class="tag">Bootstrap</span>
                                <span class="tag">Lodash</span>
                            </div>
                        </div>

                        <!-- 3. Full-stack & Backend (Tall) -->
                        <div class="bento-item backend tall">
                            <h3 class="font-bold text-accent mb-2">Full-stack & Backend</h3>
                            <p class="text-sm opacity-70 mb-4">Developing scalable server-side applications and efficient database architectures.</p>
                            <div class="skill-tags">
                                <span class="tag">Laravel (PHP)</span>
                                <span class="tag">Node.js</span>
                                <span class="tag">.NET MAUI</span>
                                <span class="tag">SQLite</span>
                                <span class="tag">MongoDB</span>
                            </div>
                        </div>

                        <!-- 4. Data Science -->
                        <div class="bento-item data">
                            <h3 class="font-bold text-accent mb-2">Data Science</h3>
                            <p class="text-sm opacity-70 mb-4">Transforming raw data into actionable insights through visualization.</p>
                            <div class="skill-tags">
                                <span class="tag">Power BI</span>
                                <span class="tag">Data Analysis</span>
                            </div>
                        </div>

                        <!-- 5. Ecosystem & Tools (Large) -->
                        <div class="bento-item tools large">
                            <h3 class="font-bold text-accent mb-2">Ecosystem & Tools</h3>
                            <p class="text-sm opacity-70 mb-4">Professional workflow tools for version control, project management, and remote collaboration.</p>
                            <div class="skill-tags">
                                <span class="tag">Git / GitHub</span>
                                <span class="tag">Bitbucket</span>
                                <span class="tag">Trello</span>
                                <span class="tag">Gather Town</span>
                                <span class="tag">VS Code / Sublime</span>
                                <span class="tag">Figma</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define('m-skills', SkillsSection);
