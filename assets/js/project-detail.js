class ProjectDetail extends HTMLElement {
    connectedCallback() {
        const project = window.currentProject;
        if (!project) return;

        const demoButton = (project.demo && project.demo !== "#" && project.demo !== "")
            ? `<a href="${project.demo}" target="_blank" class="btn-secondary flex justify-center items-center gap-3 py-4 rounded-full font-bold shadow-lg">
        Live Project Demo
        <svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6 m4-1 7 7-7 7"/></svg>
       </a>`
            : "";

        this.innerHTML = `
            <section class="py-7 project-fade-in">
                <div class="nav-container">
                    
                    <!-- ส่วนปุ่มย้อนกลับ -->
                    <div class="mb-8">
                        <a href="projects.html" class="flex items-center gap-2 opacity-60 hover:opacity-100 transition-all text-sm">
                            <svg xmlns="http://w3.org" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                            Back to All Projects
                        </a>
                    </div>

                    <!-- Swiper Gallery -->
                    <div class="rounded-3xl overflow-hidden shadow-2xl mb-12" style="background: var(--base-variant);">
                        <div class="swiper detailSwiper" style="height: 500px;">
                            <div class="swiper-wrapper">
                                ${project.images.map(img => `
                                    <div class="swiper-slide">
                                       <img src="${img}" class="w-full h-auto block">
                                    </div>
                                `).join('')}
                            </div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>

                    <!-- ข้อมูลโปรเจกต์แบบ Bento -->
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        
                        <!-- ฝั่งซ้าย: คำอธิบาย (ใหญ่) -->
                        <div class="lg:col-span-2">
                            <span class="project-tag">${project.tag}</span>
                            <h1 class="text-4xl md:text-5xl font-extrabold mt-2 mb-8">${project.title}</h1>
                            
                            <div class="prose dark:prose-invert max-w-none opacity-90 leading-relaxed text-lg">
                                ${project.description}
                            </div>
                        </div>             
                        <!-- ฝั่งขวา: รายละเอียด Tech & Link -->
                        <div class="space-y-8">
                            <div class="p-8 rounded-3xl" style="background: var(--base-variant);">
                                <h3 class="text-xl font-bold mb-6">Technologies</h3>
                                <div class="skill-tags flex flex-wrap gap-2">
                                    ${project.tech.map(t => `<span class="tag">${t}</span>`).join('')}
                                </div>
                            </div>

                            <div class="flex flex-col gap-4">
                                ${demoButton} <!-- แสดงปุ่มเฉพาะเมื่อมีลิงก์ -->
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-3 mt-12">
                        <h3 class="text-2xl font-bold mb-6">Project Gallery</h3>
                        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                            ${project.images.map((img, index) => `
                                <div class="group relative aspect-square overflow-hidden rounded-2xl bg-white/5 cursor-pointer" 
                                    onclick="openFullImage('${img}')">
                                    <img src="${img}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Modal สำหรับแสดงรูปใหญ่ (Full Image) -->
                    <div id="image-modal" class="fixed inset-0 z-[9999] hidden bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10" onclick="closeFullImage()">
                        <!-- ปุ่มปิด -->
                        <button class="absolute top-5 right-5 text-white z-[10000] p-2 hover:bg-white/10 rounded-full transition-all">
                            <svg xmlns="http://w3.org" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>
                        
                        <!-- รูปภาพหลัก -->
                        <div class="w-full h-full flex items-center justify-center">
                            <img id="modal-img" src="" class="max-w-full max-h-full object-contain rounded-lg shadow-2xl scale-95 transition-transform duration-300">
                        </div>
                    </div>
                </div>
            </section>
        `;
        this.initSwiper();
    }

    initSwiper() {
        setTimeout(() => {
            // สร้างเฉพาะ Swiper ตัวใหญ่ด้านบน (ทำงานอิสระ)
            new Swiper(".detailSwiper", {
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                spaceBetween: 10,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                },
            });
        }, 100);
    }

}
customElements.define('m-project-detail', ProjectDetail);

window.openFullImage = function (src) {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('modal-img');

    // ย้าย modal ไปต่อท้าย <body> เพื่อแก้ปัญหา fixed ไม่อยู่กลางจอเมื่อมีการ scroll
    document.body.appendChild(modal);

    img.src = src;
    modal.style.display = 'flex';
    modal.classList.remove('hidden');

    // ตรวจสอบความถูกต้องของตำแหน่งอีกครั้ง
    modal.style.top = '0';
    modal.style.left = '0';

    setTimeout(() => {
        img.classList.remove('scale-95');
        img.classList.add('scale-100');
    }, 10);

    document.body.style.overflow = 'hidden';
};

window.closeFullImage = function () {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('modal-img');

    img.classList.remove('scale-100');
    img.classList.add('scale-95');

    setTimeout(() => {
        modal.classList.add('hidden');
        modal.style.display = 'none';
        // กลับมา scroll ได้ปกติ
        document.body.style.overflow = 'auto';
    }, 200);
};
