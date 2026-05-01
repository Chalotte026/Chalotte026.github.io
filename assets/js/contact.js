class ContactSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="contact" class="contact-section">
                <div class="nav-container">
                    <div class="skills-header">
                        <h2>Get in <span>Touch</span></h2>
                    </div>

                    <div class="contact-card">
                        <!-- Left: Form Area -->
                        <div class="contact-form-area">
                            <form id="contact-form" action="https://api.web3forms.com/submit" method="POST">
                                <input type="hidden" name="access_key" value="d2bfefbb-8838-42e3-942f-0b6b8bc1e278">
                                <div class="form-group">
                                    <label>Full Name</label>
                                    <input type="text" name="name" placeholder="Your Name" required>
                                </div>
                                <div class="form-group">
                                    <label>Email Address</label>
                                    <input type="email" name="email" placeholder="Your Email" required>
                                </div>
                                <div class="form-group">
                                    <label>Message</label>
                                    <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
                                </div>
                                <button type="submit" class="btn-secondary">Send Message</button>
                            </form>
                        </div>

                        <!-- Right: Info Area (Icon Left, Text Right) -->
                        <div class="contact-info-area">
                            <div class="contact-method">
                                <img src="assets/img/email-icon.png" alt="Email" class="contact-icon-img">
                                <div class="contact-details">
                                    <h4>Email</h4>
                                    <p>patinya.char26@email.com</p>
                                </div>
                            </div>
                            <div class="contact-method">
                                <img src="assets/img/telephone-call-icon.png" alt="Phone" class="contact-icon-img">
                                <div class="contact-details">
                                    <h4>Phone</h4>
                                    <p>+66 064-094-8507</p>
                                </div>
                            </div>
                            <div class="contact-method">
                                <img src="assets/img/linkedin-icon.png" alt="LinkedIn" class="contact-icon-img">
                                <div class="contact-details">
                                    <h4>LinkedIn</h4>
                                    <a href="https://linkedin.com/in/patinya-charoonchart-890365290" target="_blank" class="contact-link">My LinkedIn</a>
                                </div>
                            </div>
                            <div class="contact-method">
                                <img src="assets/img/github-icon.png" alt="GitHub" class="contact-icon-img">
                                <div class="contact-details">
                                    <h4>GitHub</h4>
                                    <a href="https://github.com/Chalotte026" target="_blank" class="contact-link">Chalotte026</a>
                                </div>
                            </div>
                            <div class="contact-method">
                                <img src="assets/img/location-icon.png" alt="Location" class="contact-icon-img">
                                <div class="contact-details">
                                    <h4>Location</h4>
                                    <p>Bangkok, Thailand</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
        this.setupContactLogic();
    }
    setupContactLogic() {
        const form = this.querySelector('#contact-form');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const modal = document.querySelector('m-modal');
            if (modal && typeof modal.showState === 'function') {
                modal.showState('confirm');
                this.bindModalButtons(modal, form);
            } else {
                console.error("Modal component not found or not ready");
            }
        });
    }
    bindModalButtons(modal, form) {
        const confirmBtn = document.querySelector('#modal-confirm-btn');
        const cancelBtn = document.querySelector('#modal-cancel-btn');
        const closeBtn = document.querySelector('#modal-close-btn');

        // ลบ Event เดิมออกก่อนเพื่อป้องกันการส่งซ้ำ (Double Binding)
        const newConfirmBtn = confirmBtn.cloneNode(true);
        confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);

        newConfirmBtn.addEventListener('click', async () => {
            modal.showState('loading');
            const formData = new FormData(form);
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                if (response.ok) {
                    modal.showState('success');
                    form.reset();
                } else { throw new Error(); }
            } catch (error) {
                alert("Error! Please try again.");
                modal.hide();
            }
        });

        cancelBtn.onclick = () => modal.hide();
        closeBtn.onclick = () => modal.hide();
    }
}
customElements.define('m-contact', ContactSection);
