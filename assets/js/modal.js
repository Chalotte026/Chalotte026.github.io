class ModalManager extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="custom-modal" class="fixed inset-0 z-[9999] flex items-center justify-center hidden">
                <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                <div class="bg-[var(--base-variant)] p-8 rounded-2xl shadow-2xl relative z-10 text-center max-w-sm mx-4 w-full transition-colors duration-300">
                    
                    <!-- 1. State: Confirm -->
                    <div id="modal-confirm-content" class="modal-content-part">
                        <h3 class="text-2xl font-bold mb-2 text-[var(--accent-color)]">Are you sure?</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-8">Do you want to send this message to Patinya?</p>
                        <div class="flex gap-4">
                            <button id="modal-cancel-btn" class="btn-cancle flex-1">Cancel</button>
                            <button id="modal-confirm-btn" class="btn-success flex-1">Yes, Send</button>
                        </div>
                    </div>

                    <!-- 2. State: Loading -->
                    <div id="modal-loading-content" class="modal-content-part hidden py-10">
                        <div class="loading-spinner mx-auto mb-4"></div>
                        <p class="text-gray-600 dark:text-gray-400">Processing your request...</p>
                    </div>

                    <!-- 3. State: Success -->
                    <div id="modal-success-content" class="modal-content-part hidden">
                        <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">✓</div>
                        <h3 class="text-2xl font-bold mb-2 text-[var(--accent-color)]">Success!</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-6">Your message has been sent successfully.</p>
                        <button id="modal-close-btn" class="btn-success w-full">Great!</button>
                    </div>
                </div>
            </div>
        `;
    }

    showState(stateName) {
        document.body.style.overflow = 'hidden';
        const states = ['confirm', 'loading', 'success'];
        states.forEach(s => {
            this.querySelector(`#modal-${s}-content`).classList.add('hidden');
        });
        this.querySelector(`#modal-${stateName}-content`).classList.remove('hidden');
        this.querySelector('#custom-modal').classList.remove('hidden');
    }

    hide() {
        document.body.style.overflow = 'auto';
        this.querySelector('#custom-modal').classList.add('hidden');
    }
}
customElements.define('m-modal', ModalManager);
