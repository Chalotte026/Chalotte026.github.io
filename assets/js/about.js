class AboutSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="about" class="about-section">
                <div class="nav-container">
                    <div class="about-grid">

                        <div class="about-info-card">
                            <div class="about-info-item">
                                <label><strong>Name</strong></label>
                                <p>Patinya Charoonchart</p>
                            </div>
                            <div class="about-info-item">
                                <label><strong>Education</strong></label>
                                <p>B.Sc. in Computer Science<br>(Information Technology & Innovation)</p>
                            </div>
                            <div class="about-info-item">
                                <label><strong>Achievement</strong></label>
                                <p class="highlight-text" style="font-weight: 600; font-size: 1.2rem;">
                                    First-Class Honors
                                </p>
                                <p class="text-sm opacity-70">GPA: 3.84 / 4.00</p>
                            </div>
                            <div class="about-info-item">
                                <label><strong>University</strong></label>
                                <p>Bangkok University</p>
                            </div>
                            <div class="about-info-item">
                                <label><strong>Career Interests</strong></label>
                                <p>Frontend Developer, Full-Stack, Data Science</p>
                            </div>
                        </div>

                        <div class="about-text">
                            <h2>About <span style="font-weight: 800;">ME</span></h2>
                            <p>
                                I am a <strong>Computer Science</strong> graduate who is deeply passionate about solving problems through technology. Rather than just focusing on the final product, I find joy in the <strong>process of learning</strong>—from understanding how a line of code affects user experience to exploring how data can tell a story.
                            </p>
                            <p>
                                My journey has led me to explore <strong>Full-Stack</strong> and <strong>Mobile Development</strong>. I believe that being a good developer means being a lifelong student. I enjoy the challenge of learning new frameworks and best practices to ensure that the solutions I build are efficient and truly helpful for the end-user.
                            </p>
                            <p>
                                In addition to development, I have a keen interest in <strong>Data Science</strong> and <strong>AI</strong>. I see data as a tool for empathy—helping us understand user needs better. By combining <strong>Machine Learning</strong> with practical engineering, I aim to create intelligent systems that make life a little bit easier for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define('m-about', AboutSection);
