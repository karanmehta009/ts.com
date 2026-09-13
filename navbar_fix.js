const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const desktopNavPattern = /<div class="hidden lg:flex[^>]*>([\s\S]*?)<\/div>/i;

const stdDesktopNav = `<div class="hidden lg:flex space-x-0 font-black text-slate-500 text-[11px] uppercase tracking-[0.1em] items-center desktop-menu-links">
                <a href="index.html" class="relative group px-3 py-1.5 transition-colors duration-300 hover:text-blue-700 cursor-pointer">
                    <span class="relative z-10 flex items-center gap-1.5 transform group-hover:scale-[1.04] transition-all duration-300 ease-out after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:rounded-full after:origin-right after:scale-x-0 group-hover:after:origin-left group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out"><i class="fa-solid fa-house text-[11px] opacity-70 group-hover:opacity-100 group-hover:text-blue-600 group-hover:-rotate-6 group-hover:scale-110 transition-all duration-300"></i> Home</span>
                </a>
                <a href="visas.html" class="relative group px-3 py-1.5 transition-colors duration-300 hover:text-blue-700 cursor-pointer">
                    <span class="relative z-10 flex items-center gap-1.5 transform group-hover:scale-[1.04] transition-all duration-300 ease-out after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:rounded-full after:origin-right after:scale-x-0 group-hover:after:origin-left group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out"><i class="fa-solid fa-passport text-[11px] opacity-70 group-hover:opacity-100 group-hover:text-blue-600 group-hover:-rotate-6 group-hover:scale-110 transition-all duration-300"></i> Visa</span>
                </a>
                <a href="tours.html" class="relative group px-3 py-1.5 transition-colors duration-300 hover:text-blue-700 cursor-pointer">
                    <span class="relative z-10 flex items-center gap-1.5 transform group-hover:scale-[1.04] transition-all duration-300 ease-out after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:rounded-full after:origin-right after:scale-x-0 group-hover:after:origin-left group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out"><i class="fa-solid fa-plane-departure text-[11px] opacity-70 group-hover:opacity-100 group-hover:text-blue-600 group-hover:-rotate-6 group-hover:scale-110 transition-all duration-300"></i> Tour</span>
                </a>
                <a href="medical.html" class="relative group px-3 py-1.5 transition-colors duration-300 hover:text-blue-700 cursor-pointer">
                    <span class="relative z-10 flex items-center gap-1.5 transform group-hover:scale-[1.04] transition-all duration-300 ease-out after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:rounded-full after:origin-right after:scale-x-0 group-hover:after:origin-left group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out"><i class="fa-solid fa-notes-medical text-[11px] opacity-70 group-hover:opacity-100 group-hover:text-blue-600 group-hover:-rotate-6 group-hover:scale-110 transition-all duration-300"></i> Medical</span>
                </a>
                <a href="hotels.html" class="relative group px-3 py-1.5 transition-colors duration-300 hover:text-blue-700 cursor-pointer">
                    <span class="relative z-10 flex items-center gap-1.5 transform group-hover:scale-[1.04] transition-all duration-300 ease-out after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:rounded-full after:origin-right after:scale-x-0 group-hover:after:origin-left group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out"><i class="fa-solid fa-hotel text-[11px] opacity-70 group-hover:opacity-100 group-hover:text-blue-600 group-hover:-rotate-6 group-hover:scale-110 transition-all duration-300"></i> Hotels</span>
                </a>
                <a href="about.html" class="relative group px-3 py-1.5 transition-colors duration-300 hover:text-blue-700 cursor-pointer">
                    <span class="relative z-10 flex items-center gap-1.5 transform group-hover:scale-[1.04] transition-all duration-300 ease-out after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:rounded-full after:origin-right after:scale-x-0 group-hover:after:origin-left group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out"><i class="fa-solid fa-circle-info text-[11px] opacity-70 group-hover:opacity-100 group-hover:text-blue-600 group-hover:-rotate-6 group-hover:scale-110 transition-all duration-300"></i> About</span>
                </a>
            </div>`;

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    let hasChanges = false;
    
    // Replace the desktop nav
    if (desktopNavPattern.test(content)) {
        content = content.replace(desktopNavPattern, stdDesktopNav);
        hasChanges = true;
    }

    // Remove any Mobile Menu items that mention Destination / destinations.html
    const mobileDestPattern1 = /<a href="destinations\.html"[^>]*>[\s\S]*?<\/a>/ig;
    if (mobileDestPattern1.test(content)) {
        content = content.replace(mobileDestPattern1, '');
        hasChanges = true;
    }
    
    // Remove Services from mobile menu
    const mobileServicesPattern = /<a href="services\.html"[^>]*mobile-link[^>]*>[\s\S]*?<\/a>/ig;
    if (mobileServicesPattern.test(content)) {
        content = content.replace(mobileServicesPattern, '');
        hasChanges = true;
    }
    
    // If it's a simple link in footer
    const footerDestPattern = /<li><a href="destinations\.html"[^>]*>Destinations<\/a><\/li>/gi;
    if(footerDestPattern.test(content)){
        content = content.replace(footerDestPattern, '');
        hasChanges = true;
    }

    // Since we lost the dynamic active state on the JS for the desktop nav, we can add it to the mobile script that's already there
    // we'll inject a script just before </body> to highlight active links
    const scriptInject = `
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const currentPath = window.location.pathname.split('/').pop() || 'index.html';
            document.querySelectorAll('.desktop-menu-links a').forEach(a => {
                const href = a.getAttribute('href');
                if (href === currentPath) {
                    a.classList.add('text-blue-700');
                    a.classList.remove('text-slate-500');
                    const span = a.querySelector('span.z-10');
                    if(span) {
                        span.classList.add('after:scale-x-100');
                        span.classList.remove('after:scale-x-0');
                    }
                    const icon = a.querySelector('i');
                    if(icon) {
                        icon.classList.remove('opacity-70', 'group-hover:opacity-100');
                        icon.classList.add('opacity-100', 'text-blue-600');
                    }
                }
            });
        });
    </script>
</body>`;

    // Remove Start Application Dropdown
    const startIndex = content.indexOf('Start Application');
    if (startIndex !== -1) {
        const groupRegex = /<div class="relative[^>]*>/g;
        let match;
        let targetStart = -1;
        while ((match = groupRegex.exec(content)) !== null) {
            if (match.index < startIndex) {
                targetStart = match.index;
            } else {
                break;
            }
        }
        
        if (targetStart !== -1) {
            let openDivs = 0;
            let ptr = targetStart;
            while (ptr < content.length) {
                if (content.startsWith('<div', ptr)) {
                    openDivs++;
                    ptr += 4;
                } else if (content.startsWith('</div', ptr)) {
                    openDivs--;
                    if (openDivs === 0) {
                        let targetEnd = content.indexOf('>', ptr) + 1;
                        let block = content.substring(targetStart, targetEnd);
                        if (block.includes('Start Application')) {
                            content = content.substring(0, targetStart) + content.substring(targetEnd);
                            hasChanges = true;
                        }
                        break;
                    }
                    ptr += 5;
                } else {
                    ptr++;
                }
            }
        }
    }

    // Add/Update Logout Button right after Profile Link
    const profilePattern = /(<a href="profile\.html"[\s\S]*?w-10 h-10[\s\S]*?<\/a>)(?:\s*<button[^>]*title="Logout"[\s\S]*?<\/button>)?/i;
    if (profilePattern.test(content)) {
        const replacement = `<a href="profile.html"
                    class="relative group w-8 h-8 md:w-11 md:h-11 rounded-full bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 transition-all duration-[600ms] ease-out hover:border-transparent hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:bg-white isolate hover:-translate-y-1.5 overflow-visible">
                    <span class="absolute inset-0 rounded-full bg-blue-500/0 group-hover:bg-blue-400/40 blur-xl transition-all duration-[600ms] -z-30"></span>
                    <span class="absolute inset-[-4px] bg-[conic-gradient(from_0deg,transparent_0_280deg,rgba(59,130,246,0.9)_360deg)] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_2s_linear_infinite] rounded-full -z-20"></span>
                    <span class="absolute inset-[-4px] bg-[conic-gradient(from_0deg,transparent_0_280deg,rgba(236,72,153,0.9)_360deg)] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_1.5s_linear_infinite_reverse] rounded-full -z-20"></span>
                    <span class="absolute inset-[2px] bg-slate-50 group-hover:bg-white rounded-full transition-colors duration-500 -z-10 shadow-inner"></span>
                    <span class="absolute w-1/2 h-1/2 bg-blue-300 rounded-full opacity-0 group-hover:animate-[ping_1.2s_ease-out_infinite] -z-10"></span>
                    <i class="fa-regular fa-user text-lg transition-all duration-[700ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:text-blue-600 group-hover:[transform:rotateY(360deg)_scale(1.2)]"></i>
                    <span class="absolute top-[1px] right-[1px] w-2.5 h-2.5 bg-gradient-to-tr from-pink-500 to-rose-500 rounded-full border-2 border-white shadow-sm z-10 group-hover:animate-bounce flex items-center justify-center">
                        <span class="absolute w-full h-full bg-rose-400 rounded-full opacity-0 group-hover:animate-ping"></span>
                    </span>
                </a>
                <button class="hidden lg:block relative overflow-hidden group bg-slate-100 text-slate-600 w-14 h-8 md:w-20 md:h-10 rounded-full text-[8.5px] md:text-[9px] uppercase tracking-wide font-black transition-all duration-[500ms] ml-1.5 shadow-sm border border-slate-200/50 hover:shadow-[0_8px_20px_rgba(239,68,68,0.25)]" title="Logout" onclick="window.location.href='index.html'">
                    <span class="absolute inset-0 w-full h-full bg-red-500 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-[500ms] ease-[cubic-bezier(0.25,1,0.5,1)]"></span>
                    <div class="absolute inset-0 flex flex-col items-center justify-center z-10 transition-transform duration-[500ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-full">
                        <span>Log Out</span>
                    </div>
                    <div class="absolute inset-0 flex items-center justify-center text-white z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-[500ms] ease-[cubic-bezier(0.25,1,0.5,1)]">
                        <i class="fa-solid fa-arrow-right-from-bracket text-[11px] md:text-[12px]"></i>
                    </div>
                </button>`;
        const replaced = content.replace(profilePattern, replacement);
        if (replaced !== content) {
            content = replaced;
            hasChanges = true;
        }
    }
    
    if (hasChanges && !content.includes('.desktop-menu-links a')) {
        content = content.replace(/<\/body>/i, scriptInject);
    }

    if (hasChanges) {
        fs.writeFileSync(path.join(dir, file), content);
        console.log("Updated", file);
    }
});
