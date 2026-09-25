const fs = require('fs');
const path = require('path');

const dir = 'd:/Traviora/Traviora-demo2-webpage';

const navbarHTML = `    <!-- Navigation -->
    <nav id="navbar"
        class="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-black/5 transition-transform duration-300 transform translate-y-0">
        <div class="max-w-7xl mx-auto px-4 md:px-6 py-2.5 md:py-3.5 lg:py-4.5 flex justify-between items-center">
            <a href="index.html" class="flex flex-col items-center justify-center group mt-0.5 relative z-20">
                <img src="assets/ChatGPT%20Image%20Aug%2017,%202026,%2012_36_42%20PM.png" alt="Traviora Logo"
                    class="h-5 md:h-6 lg:h-7 w-auto object-contain group-hover:scale-105 transition-transform mb-0.5">
                <span class="text-sm leading-none uppercase ml-1 tracking-[0.25em] flex items-center"><strong
                        class="font-black text-slate-900">TRAV</strong><span
                        class="font-medium text-amber-500">IYORA</span></span>
            </a>

            <!-- Desktop Links (Floating Layout with Soft Tint Capsule & 360 Icon Spin FX) -->
            <div
                class="hidden lg:flex items-center gap-1.5 xl:gap-2.5 font-black text-slate-800 text-[10.5px] uppercase tracking-[0.06em] desktop-menu-links">
                
                <!-- 1. Home -->
                <a href="index.html"
                    class="relative group px-3.5 py-2 rounded-full border border-transparent transition-all duration-300 ease-out hover:bg-blue-50/80 hover:ring-2 hover:ring-blue-400/80 hover:shadow-[0_6px_18px_rgba(37,99,235,0.18)] hover:-translate-y-0.5 cursor-pointer">
                    <span class="relative z-10 flex items-center gap-2">
                        <i class="fa-solid fa-house text-[15px] text-slate-400 group-hover:text-blue-600 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-500 ease-in-out shrink-0"></i>
                        <span class="font-black text-[11px] tracking-[0.06em] group-hover:text-blue-700 transition-colors duration-300">HOME</span>
                    </span>
                </a>

                <!-- 2. Tourist Visa -->
                <a href="visas.html"
                    class="relative group px-3.5 py-2 rounded-full border border-transparent transition-all duration-300 ease-out hover:bg-amber-50/80 hover:ring-2 hover:ring-amber-400/80 hover:shadow-[0_6px_18px_rgba(245,158,11,0.18)] hover:-translate-y-0.5 cursor-pointer">
                    <span class="relative z-10 flex items-center gap-2">
                        <i class="fa-solid fa-passport text-[15px] text-slate-400 group-hover:text-amber-500 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-500 ease-in-out shrink-0"></i>
                        <span class="flex flex-col text-left leading-[1.0] group-hover:text-amber-700 transition-colors duration-300">
                            <span>TOURIST</span>
                            <span>VISA</span>
                        </span>
                    </span>
                </a>

                <!-- 3. Medical Tourism -->
                <a href="medical.html"
                    class="relative group px-3.5 py-2 rounded-full border border-transparent transition-all duration-300 ease-out hover:bg-emerald-50/80 hover:ring-2 hover:ring-emerald-400/80 hover:shadow-[0_6px_18px_rgba(16,185,129,0.18)] hover:-translate-y-0.5 cursor-pointer">
                    <span class="relative z-10 flex items-center gap-2">
                        <i class="fa-solid fa-notes-medical text-[15px] text-slate-400 group-hover:text-emerald-500 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-500 ease-in-out shrink-0"></i>
                        <span class="flex flex-col text-left leading-[1.0] group-hover:text-emerald-700 transition-colors duration-300">
                            <span>MEDICAL</span>
                            <span>TOURISM</span>
                        </span>
                    </span>
                </a>

                <!-- 4. Tour Booking -->
                <a href="tours.html"
                    class="relative group px-3.5 py-2 rounded-full border border-transparent transition-all duration-300 ease-out hover:bg-purple-50/80 hover:ring-2 hover:ring-purple-400/80 hover:shadow-[0_6px_18px_rgba(147,51,234,0.18)] hover:-translate-y-0.5 cursor-pointer">
                    <span class="relative z-10 flex items-center gap-2">
                        <i class="fa-solid fa-earth-americas text-[15px] text-slate-400 group-hover:text-purple-600 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-500 ease-in-out shrink-0"></i>
                        <span class="flex flex-col text-left leading-[1.0] group-hover:text-purple-700 transition-colors duration-300">
                            <span>TOUR</span>
                            <span>BOOKING</span>
                        </span>
                    </span>
                </a>

                <!-- 5. Flight Booking -->
                <a href="flight-booking.html"
                    class="relative group px-3.5 py-2 rounded-full border border-transparent transition-all duration-300 ease-out hover:bg-sky-50/80 hover:ring-2 hover:ring-sky-400/80 hover:shadow-[0_6px_18px_rgba(14,165,233,0.18)] hover:-translate-y-0.5 cursor-pointer">
                    <span class="relative z-10 flex items-center gap-2">
                        <i class="fa-solid fa-plane text-[15px] text-slate-400 group-hover:text-sky-500 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-500 ease-in-out shrink-0"></i>
                        <span class="flex flex-col text-left leading-[1.0] group-hover:text-sky-700 transition-colors duration-300">
                            <span>FLIGHT</span>
                            <span>BOOKING</span>
                        </span>
                    </span>
                </a>

                <!-- 6. Cab Booking -->
                <a href="cab-booking.html"
                    class="relative group px-3.5 py-2 rounded-full border border-transparent transition-all duration-300 ease-out hover:bg-orange-50/80 hover:ring-2 hover:ring-orange-400/80 hover:shadow-[0_6px_18px_rgba(249,115,22,0.18)] hover:-translate-y-0.5 cursor-pointer">
                    <span class="relative z-10 flex items-center gap-2">
                        <i class="fa-solid fa-taxi text-[15px] text-slate-400 group-hover:text-orange-500 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-500 ease-in-out shrink-0"></i>
                        <span class="flex flex-col text-left leading-[1.0] group-hover:text-orange-700 transition-colors duration-300">
                            <span>CAB</span>
                            <span>BOOKING</span>
                        </span>
                    </span>
                </a>

                <!-- 7. Hotel Booking -->
                <a href="hotels.html"
                    class="relative group px-3.5 py-2 rounded-full border border-transparent transition-all duration-300 ease-out hover:bg-rose-50/80 hover:ring-2 hover:ring-rose-400/80 hover:shadow-[0_6px_18px_rgba(244,63,94,0.18)] hover:-translate-y-0.5 cursor-pointer">
                    <span class="relative z-10 flex items-center gap-2">
                        <i class="fa-solid fa-hotel text-[15px] text-slate-400 group-hover:text-rose-500 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-500 ease-in-out shrink-0"></i>
                        <span class="flex flex-col text-left leading-[1.0] group-hover:text-rose-700 transition-colors duration-300">
                            <span>HOTEL</span>
                            <span>BOOKING</span>
                        </span>
                    </span>
                </a>

                <!-- 8. About -->
                <a href="about.html"
                    class="relative group px-3.5 py-2 rounded-full border border-transparent transition-all duration-300 ease-out hover:bg-indigo-50/80 hover:ring-2 hover:ring-indigo-400/80 hover:shadow-[0_6px_18px_rgba(99,102,241,0.18)] hover:-translate-y-0.5 cursor-pointer">
                    <span class="relative z-10 flex items-center gap-2">
                        <i class="fa-solid fa-circle-info text-[15px] text-slate-400 group-hover:text-indigo-600 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-500 ease-in-out shrink-0"></i>
                        <span class="font-black text-[11px] tracking-[0.06em] group-hover:text-indigo-700 transition-colors duration-300">ABOUT</span>
                    </span>
                </a>
            </div>

            <!-- Header Actions -->
            <div class="flex items-center gap-3 md:gap-3.5 relative pr-1 md:pr-0 z-20">
                <!-- Mobile Menu Toggle Button -->
                <button id="mobileMenuBtn" type="button" aria-label="Open navigation menu"
                    class="lg:hidden relative z-30 w-9 h-9 md:w-10 md:h-10 flex flex-col justify-center items-center gap-1.5 bg-slate-50 hover:bg-slate-100 rounded-full border border-slate-200 cursor-pointer pointer-events-auto transition-colors">
                    <span class="w-4 h-0.5 bg-slate-800 rounded-full pointer-events-none"></span>
                    <span class="w-4 h-0.5 bg-slate-800 rounded-full pointer-events-none"></span>
                    <span class="w-4 h-0.5 bg-slate-800 rounded-full pointer-events-none"></span>
                </button>

                <!-- Vertically Stacked Profile Button (Light Theme Icon Upside, Text Profile Below) -->
                <a href="profile.html" aria-label="User Profile"
                    class="relative z-30 group flex flex-col items-center justify-center gap-1 cursor-pointer pointer-events-auto transition-all duration-300">
                    
                    <!-- Upside Profile Icon Ring with Light Theme Container -->
                    <div class="relative w-8 h-8 md:w-9 md:h-9 rounded-full bg-slate-100 group-hover:bg-slate-900 border border-slate-200/90 group-hover:border-slate-800 text-slate-700 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:shadow-md group-hover:scale-110">
                        <i class="fa-regular fa-user text-xs md:text-sm text-slate-700 group-hover:text-amber-300 transition-colors"></i>
                        <span class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white"></span>
                    </div>

                    <!-- Below Text: PROFILE -->
                    <span class="text-[9px] md:text-[10px] font-black uppercase tracking-[0.14em] text-slate-700 group-hover:text-slate-900 transition-colors leading-none">PROFILE</span>
                </a>
            </div>
        </div>

        <!-- Mobile Navigation Menu (Centered Modal Overlay) -->
        <div id="mobileMenu"
            class="lg:hidden fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 opacity-0 pointer-events-none">

            <style>
                .border-beam {
                    background: conic-gradient(from 0deg, transparent 65%, rgba(0, 0, 0, 0.8) 100%);
                    animation: spinBeam 2s linear infinite;
                }

                .border-beam-active {
                    background: conic-gradient(from 0deg, transparent 40%, rgba(0, 0, 0, 1) 100%);
                }

                @keyframes spinBeam {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>

            <!-- Backdrop Overlay (pointer-events-none by default when closed) -->
            <div id="mobileMenuOverlay" class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm pointer-events-none transition-opacity duration-300"></div>

            <!-- Dead-Centered Modal Card -->
            <div id="mobileMenuCard" class="relative z-10 bg-white w-full max-w-[340px] rounded-[28px] shadow-[0_30px_60px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden transform scale-95 transition-all duration-300 my-auto pointer-events-auto">

                <div class="px-4 pt-4 pb-2 w-full">
                    <!-- Navigation Header -->
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-[11px] font-black tracking-[0.25em] text-black uppercase ml-1">Navigation</span>
                        <button id="closeMobileMenuBtn" type="button" aria-label="Close navigation menu"
                            class="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 hover:bg-slate-200 transition-colors shadow-inner z-[60] relative cursor-pointer">
                            <i class="fa-solid fa-xmark text-[13px] pointer-events-none"></i>
                        </button>
                    </div>

                    <!-- 8 Compact Mobile Links -->
                    <div class="grid grid-cols-2 gap-2 max-h-[58vh] overflow-y-auto pr-1">

                        <!-- 1. Home -->
                        <a href="index.html"
                            class="mobile-link group flex flex-col items-center text-center gap-1 p-2.5 rounded-[16px] bg-slate-50/30 hover:bg-white transition-all duration-300">
                            <div class="icon-wrap relative w-9 h-9 rounded-[12px] bg-slate-200 flex items-center justify-center shrink-0 group-hover:-translate-y-0.5 transition-transform duration-300 overflow-hidden shadow-sm">
                                <div class="beam-element absolute w-[250%] h-[250%] border-beam opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div class="inner-core absolute inset-[1.5px] rounded-[10px] bg-slate-50 group-hover:bg-white transition-colors duration-300 flex items-center justify-center z-10">
                                    <i class="fa-solid fa-house text-[13px] text-slate-800 group-hover:text-black transition-colors"></i>
                                </div>
                            </div>
                            <span class="text-[9.5px] font-black uppercase tracking-[0.1em] text-slate-800 group-hover:text-black transition-all mt-0.5 leading-tight text-center">Home</span>
                        </a>

                        <!-- 2. Tourist Visa -->
                        <a href="visas.html"
                            class="mobile-link group flex flex-col items-center text-center gap-1 p-2.5 rounded-[16px] bg-slate-50/30 hover:bg-white transition-all duration-300">
                            <div class="icon-wrap relative w-9 h-9 rounded-[12px] bg-slate-200 flex items-center justify-center shrink-0 group-hover:-translate-y-0.5 transition-transform duration-300 overflow-hidden shadow-sm">
                                <div class="beam-element absolute w-[250%] h-[250%] border-beam opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div class="inner-core absolute inset-[1.5px] rounded-[10px] bg-slate-50 group-hover:bg-white transition-colors duration-300 flex items-center justify-center z-10">
                                    <i class="fa-solid fa-passport text-[13px] text-slate-800 group-hover:text-black transition-colors"></i>
                                </div>
                            </div>
                            <span class="text-[9.5px] font-black uppercase tracking-[0.1em] text-slate-800 group-hover:text-black transition-all mt-0.5 leading-tight text-center">Tourist Visa</span>
                        </a>

                        <!-- 3. Medical Tourism -->
                        <a href="medical.html"
                            class="mobile-link group flex flex-col items-center text-center gap-1 p-2.5 rounded-[16px] bg-slate-50/30 hover:bg-white transition-all duration-300">
                            <div class="icon-wrap relative w-9 h-9 rounded-[12px] bg-slate-200 flex items-center justify-center shrink-0 group-hover:-translate-y-0.5 transition-transform duration-300 overflow-hidden shadow-sm">
                                <div class="beam-element absolute w-[250%] h-[250%] border-beam opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div class="inner-core absolute inset-[1.5px] rounded-[10px] bg-slate-50 group-hover:bg-white transition-colors duration-300 flex items-center justify-center z-10">
                                    <i class="fa-solid fa-notes-medical text-[13px] text-slate-800 group-hover:text-black transition-colors"></i>
                                </div>
                            </div>
                            <span class="text-[9.5px] font-black uppercase tracking-[0.1em] text-slate-800 group-hover:text-black transition-all mt-0.5 leading-tight text-center">Medical Tourism</span>
                        </a>

                        <!-- 4. Tour Booking -->
                        <a href="tours.html"
                            class="mobile-link group flex flex-col items-center text-center gap-1 p-2.5 rounded-[16px] bg-slate-50/30 hover:bg-white transition-all duration-300">
                            <div class="icon-wrap relative w-9 h-9 rounded-[12px] bg-slate-200 flex items-center justify-center shrink-0 group-hover:-translate-y-0.5 transition-transform duration-300 overflow-hidden shadow-sm">
                                <div class="beam-element absolute w-[250%] h-[250%] border-beam opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div class="inner-core absolute inset-[1.5px] rounded-[10px] bg-slate-50 group-hover:bg-white transition-colors duration-300 flex items-center justify-center z-10">
                                    <i class="fa-solid fa-earth-americas text-[13px] text-slate-800 group-hover:text-black transition-colors"></i>
                                </div>
                            </div>
                            <span class="text-[9.5px] font-black uppercase tracking-[0.1em] text-slate-800 group-hover:text-black transition-all mt-0.5 leading-tight text-center">Tour Booking</span>
                        </a>

                        <!-- 5. Flight Booking -->
                        <a href="flight-booking.html"
                            class="mobile-link group flex flex-col items-center text-center gap-1 p-2.5 rounded-[16px] bg-slate-50/30 hover:bg-white transition-all duration-300">
                            <div class="icon-wrap relative w-9 h-9 rounded-[12px] bg-slate-200 flex items-center justify-center shrink-0 group-hover:-translate-y-0.5 transition-transform duration-300 overflow-hidden shadow-sm">
                                <div class="beam-element absolute w-[250%] h-[250%] border-beam opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div class="inner-core absolute inset-[1.5px] rounded-[10px] bg-slate-50 group-hover:bg-white transition-colors duration-300 flex items-center justify-center z-10">
                                    <i class="fa-solid fa-plane text-[13px] text-slate-800 group-hover:text-black transition-colors"></i>
                                </div>
                            </div>
                            <span class="text-[9.5px] font-black uppercase tracking-[0.1em] text-slate-800 group-hover:text-black transition-all mt-0.5 leading-tight text-center">Flight Booking</span>
                        </a>

                        <!-- 6. Cab Booking -->
                        <a href="cab-booking.html"
                            class="mobile-link group flex flex-col items-center text-center gap-1 p-2.5 rounded-[16px] bg-slate-50/30 hover:bg-white transition-all duration-300">
                            <div class="icon-wrap relative w-9 h-9 rounded-[12px] bg-slate-200 flex items-center justify-center shrink-0 group-hover:-translate-y-0.5 transition-transform duration-300 overflow-hidden shadow-sm">
                                <div class="beam-element absolute w-[250%] h-[250%] border-beam opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div class="inner-core absolute inset-[1.5px] rounded-[10px] bg-slate-50 group-hover:bg-white transition-colors duration-300 flex items-center justify-center z-10">
                                    <i class="fa-solid fa-taxi text-[13px] text-slate-800 group-hover:text-black transition-colors"></i>
                                </div>
                            </div>
                            <span class="text-[9.5px] font-black uppercase tracking-[0.1em] text-slate-800 group-hover:text-black transition-all mt-0.5 leading-tight text-center">Cab Booking</span>
                        </a>

                        <!-- 7. Hotel Booking -->
                        <a href="hotels.html"
                            class="mobile-link group flex flex-col items-center text-center gap-1 p-2.5 rounded-[16px] bg-slate-50/30 hover:bg-white transition-all duration-300">
                            <div class="icon-wrap relative w-9 h-9 rounded-[12px] bg-slate-200 flex items-center justify-center shrink-0 group-hover:-translate-y-0.5 transition-transform duration-300 overflow-hidden shadow-sm">
                                <div class="beam-element absolute w-[250%] h-[250%] border-beam opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div class="inner-core absolute inset-[1.5px] rounded-[10px] bg-slate-50 group-hover:bg-white transition-colors duration-300 flex items-center justify-center z-10">
                                    <i class="fa-solid fa-hotel text-[13px] text-slate-800 group-hover:text-black transition-colors"></i>
                                </div>
                            </div>
                            <span class="text-[9.5px] font-black uppercase tracking-[0.1em] text-slate-800 group-hover:text-black transition-all mt-0.5 leading-tight text-center">Hotel Booking</span>
                        </a>

                        <!-- 8. About -->
                        <a href="about.html"
                            class="mobile-link group flex flex-col items-center text-center gap-1 p-2.5 rounded-[16px] bg-slate-50/30 hover:bg-white transition-all duration-300">
                            <div class="icon-wrap relative w-9 h-9 rounded-[12px] bg-slate-200 flex items-center justify-center shrink-0 group-hover:-translate-y-0.5 transition-transform duration-300 overflow-hidden shadow-sm">
                                <div class="beam-element absolute w-[250%] h-[250%] border-beam opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div class="inner-core absolute inset-[1.5px] rounded-[10px] bg-slate-50 group-hover:bg-white transition-colors duration-300 flex items-center justify-center z-10">
                                    <i class="fa-solid fa-circle-info text-[13px] text-slate-800 group-hover:text-black transition-colors"></i>
                                </div>
                            </div>
                            <span class="text-[9.5px] font-black uppercase tracking-[0.1em] text-slate-800 group-hover:text-black transition-all mt-0.5 leading-tight text-center">About</span>
                        </a>

                    </div>
                </div>

                <div class="h-[1px] bg-slate-200 mx-4 w-[calc(100%-32px)]"></div>

                <!-- Footer Actions -->
                <div class="flex items-center justify-between w-full px-4 py-3 gap-2">
                    <a href="profile.html"
                        class="flex-1 flex justify-center items-center gap-1.5 group py-2 rounded-[12px] hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200">
                        <i class="fa-regular fa-user text-[12px] text-slate-700 group-hover:text-black transition-colors"></i>
                        <span class="text-[10px] font-black uppercase text-slate-800 group-hover:text-black transition-all tracking-[0.1em]">Account</span>
                    </a>
                    <div class="w-[1px] h-4 bg-slate-300"></div>
                    <a href="index.html"
                        class="flex-1 items-center flex justify-center gap-1.5 group py-2 rounded-[12px] hover:bg-red-50 hover:border-red-200 border border-transparent transition-all">
                        <span class="text-[10px] font-black uppercase text-slate-800 group-hover:text-red-500 transition-all tracking-[0.1em]">Sign Out</span>
                        <i class="fa-solid fa-arrow-right-from-bracket text-[12px] text-slate-700 group-hover:text-red-500 transition-colors"></i>
                    </a>
                </div>
            </div>
        </div>
    </nav>`;

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if file has any site navbar <nav ...>
    if (content.includes('<nav id="navbar"') || content.includes('<nav class="fixed w-full top-0')) {
        const navRegex = /<!-- Navigation -->[\s\S]*?<nav[\s\S]*?<\/nav>/i;
        const navRegexAlt = /<nav[\s\S]*?<\/nav>/i;

        if (navRegex.test(content)) {
            content = content.replace(navRegex, navbarHTML);
        } else if (navRegexAlt.test(content)) {
            content = content.replace(navRegexAlt, navbarHTML);
        }

        // Ensure js/navbar.js is included before </body>
        if (!content.includes('js/navbar.js')) {
            content = content.replace('</body>', '    <script src="js/navbar.js"></script>\n</body>');
        }

        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Successfully updated navbar in:', file);
    }
});
