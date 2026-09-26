const fs = require('fs');
const path = require('path');

const dir = 'd:/Traviora/Traviora-demo2-webpage';

const navbarHTML = `    <!-- Navigation -->
    <nav id="navbar"
        class="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-black/5 transition-transform duration-300 transform translate-y-0">
        <div class="max-w-7xl mx-auto px-4 md:px-6 py-2.5 md:py-3.5 lg:py-4 flex justify-between items-center">
            <a href="index.html" class="flex flex-col items-center justify-center group mt-0.5 relative z-20">
                <img src="assets/ChatGPT%20Image%20Aug%2017,%202026,%2012_36_42%20PM.png" alt="Traviora Logo"
                    class="h-7 md:h-8 lg:h-9 w-auto object-contain group-hover:scale-105 transition-transform mb-0.5">
                <span class="text-sm leading-none uppercase ml-1 tracking-[0.25em] flex items-center"><strong
                        class="font-black text-slate-900">TRAV</strong><span
                        class="font-medium text-amber-500">IYORA</span></span>
            </a>

            <!-- Desktop Links (Vibrant Tactile Sticker Badge Design with Refined Typography) -->
            <div class="hidden lg:flex items-center gap-4 lg:gap-6 xl:gap-7 text-slate-800 desktop-menu-links uppercase">
                
                <!-- 1. Home (Active Solid Blue Sticker Capsule) -->
                <a href="index.html" class="flex flex-col items-center justify-center px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-[0_4px_16px_rgba(37,99,235,0.3)] hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-0.5 shrink-0">
                    <i class="fa-solid fa-house text-[15px] mb-0.5 text-white"></i>
                    <span class="font-['Outfit'] font-extrabold text-[11px] leading-tight text-white tracking-[0.06em] text-center uppercase">HOME</span>
                </a>

                <!-- 2. Tourist Visa -->
                <a href="visas.html" class="flex flex-col items-center justify-center p-1 rounded-xl hover:bg-slate-100/70 text-slate-800 transition-all duration-300 transform hover:-translate-y-0.5 group shrink-0">
                    <div class="w-10 h-10 rounded-[14px] bg-gradient-to-b from-slate-50 via-white to-slate-100/90 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.05)] group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:border-blue-600 group-hover:shadow-[0_6px_16px_rgba(37,99,235,0.3)] flex items-center justify-center transition-all duration-300 transform group-hover:scale-105 mb-0.5">
                        <i class="fa-solid fa-passport text-[16px] text-slate-700 group-hover:text-white transition-colors duration-300"></i>
                    </div>
                    <span class="font-['Outfit'] font-bold text-[11px] leading-[1.2] text-slate-700 group-hover:text-blue-600 tracking-[0.06em] text-center uppercase">TOURIST<br>VISA</span>
                </a>

                <!-- 3. Medical Tourism -->
                <a href="medical.html" class="flex flex-col items-center justify-center p-1 rounded-xl hover:bg-slate-100/70 text-slate-800 transition-all duration-300 transform hover:-translate-y-0.5 group shrink-0">
                    <div class="w-10 h-10 rounded-[14px] bg-gradient-to-b from-slate-50 via-white to-slate-100/90 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.05)] group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:border-blue-600 group-hover:shadow-[0_6px_16px_rgba(37,99,235,0.3)] flex items-center justify-center transition-all duration-300 transform group-hover:scale-105 mb-0.5">
                        <i class="fa-solid fa-square-plus text-[16px] text-slate-700 group-hover:text-white transition-colors duration-300"></i>
                    </div>
                    <span class="font-['Outfit'] font-bold text-[11px] leading-[1.2] text-slate-700 group-hover:text-blue-600 tracking-[0.06em] text-center uppercase">MEDICAL<br>TOURISM</span>
                </a>

                <!-- 4. Tour Booking -->
                <a href="tours.html" class="flex flex-col items-center justify-center p-1 rounded-xl hover:bg-slate-100/70 text-slate-800 transition-all duration-300 transform hover:-translate-y-0.5 group shrink-0">
                    <div class="w-10 h-10 rounded-[14px] bg-gradient-to-b from-slate-50 via-white to-slate-100/90 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.05)] group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:border-blue-600 group-hover:shadow-[0_6px_16px_rgba(37,99,235,0.3)] flex items-center justify-center transition-all duration-300 transform group-hover:scale-105 mb-0.5">
                        <i class="fa-solid fa-location-dot text-[16px] text-slate-700 group-hover:text-white transition-colors duration-300"></i>
                    </div>
                    <span class="font-['Outfit'] font-bold text-[11px] leading-[1.2] text-slate-700 group-hover:text-blue-600 tracking-[0.06em] text-center uppercase">TOUR<br>BOOKING</span>
                </a>

                <!-- 5. Flight Booking -->
                <a href="flight-booking.html" class="flex flex-col items-center justify-center p-1 rounded-xl hover:bg-slate-100/70 text-slate-800 transition-all duration-300 transform hover:-translate-y-0.5 group shrink-0">
                    <div class="w-10 h-10 rounded-[14px] bg-gradient-to-b from-slate-50 via-white to-slate-100/90 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.05)] group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:border-blue-600 group-hover:shadow-[0_6px_16px_rgba(37,99,235,0.3)] flex items-center justify-center transition-all duration-300 transform group-hover:scale-105 mb-0.5">
                        <i class="fa-solid fa-plane text-[16px] text-slate-700 group-hover:text-white transition-colors duration-300"></i>
                    </div>
                    <span class="font-['Outfit'] font-bold text-[11px] leading-[1.2] text-slate-700 group-hover:text-blue-600 tracking-[0.06em] text-center uppercase">FLIGHT<br>BOOKING</span>
                </a>

                <!-- 6. Cab Booking -->
                <a href="cab-booking.html" class="flex flex-col items-center justify-center p-1 rounded-xl hover:bg-slate-100/70 text-slate-800 transition-all duration-300 transform hover:-translate-y-0.5 group shrink-0">
                    <div class="w-10 h-10 rounded-[14px] bg-gradient-to-b from-slate-50 via-white to-slate-100/90 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.05)] group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:border-blue-600 group-hover:shadow-[0_6px_16px_rgba(37,99,235,0.3)] flex items-center justify-center transition-all duration-300 transform group-hover:scale-105 mb-0.5">
                        <i class="fa-solid fa-car text-[16px] text-slate-700 group-hover:text-white transition-colors duration-300"></i>
                    </div>
                    <span class="font-['Outfit'] font-bold text-[11px] leading-[1.2] text-slate-700 group-hover:text-blue-600 tracking-[0.06em] text-center uppercase">CAB<br>BOOKING</span>
                </a>

                <!-- 7. Hotel Booking -->
                <a href="hotels.html" class="flex flex-col items-center justify-center p-1 rounded-xl hover:bg-slate-100/70 text-slate-800 transition-all duration-300 transform hover:-translate-y-0.5 group shrink-0">
                    <div class="w-10 h-10 rounded-[14px] bg-gradient-to-b from-slate-50 via-white to-slate-100/90 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.05)] group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:border-blue-600 group-hover:shadow-[0_6px_16px_rgba(37,99,235,0.3)] flex items-center justify-center transition-all duration-300 transform group-hover:scale-105 mb-0.5">
                        <i class="fa-solid fa-building text-[16px] text-slate-700 group-hover:text-white transition-colors duration-300"></i>
                    </div>
                    <span class="font-['Outfit'] font-bold text-[11px] leading-[1.2] text-slate-700 group-hover:text-blue-600 tracking-[0.06em] text-center uppercase">HOTEL<br>BOOKING</span>
                </a>

                <!-- 8. About (Distinctive Circular Compass Medallion Sticker) -->
                <a href="about.html" class="flex flex-col items-center justify-center p-1 rounded-xl hover:bg-indigo-50/60 text-slate-800 transition-all duration-300 transform hover:-translate-y-0.5 group shrink-0">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-50/90 via-white to-purple-50/90 border-2 border-indigo-200/90 shadow-[0_3px_10px_rgba(99,102,241,0.12)] group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:border-indigo-600 group-hover:shadow-[0_6px_18px_rgba(99,102,241,0.35)] flex items-center justify-center transition-all duration-300 transform group-hover:scale-105 mb-0.5">
                        <i class="fa-solid fa-compass text-[16px] text-indigo-600 group-hover:text-white transition-all duration-500 group-hover:rotate-45"></i>
                    </div>
                    <span class="font-['Outfit'] font-bold text-[11px] leading-[1.2] text-slate-700 group-hover:text-indigo-600 tracking-[0.06em] text-center uppercase">ABOUT</span>
                </a>
            </div>

            <!-- Header Actions -->
            <div class="flex items-center gap-3 md:gap-3.5 relative pr-1 md:pr-0 z-20">
                <!-- Mobile Menu Toggle Button (Tactile Sticker Badge with Menu Label Below) -->
                <button id="mobileMenuBtn" onclick="toggleMobileMenu(event)" type="button" aria-label="Open navigation menu"
                    class="lg:hidden relative z-30 group flex flex-col items-center justify-center cursor-pointer pointer-events-auto transition-all duration-300 transform hover:-translate-y-0.5">
                    
                    <!-- Tactile Sticker Ring Icon -->
                    <div class="w-10 h-10 rounded-[14px] bg-gradient-to-b from-slate-50 via-white to-slate-100/90 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.05)] group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:border-blue-600 group-hover:shadow-[0_6px_16px_rgba(37,99,235,0.32)] flex flex-col justify-center items-center gap-0.5 transition-all duration-300">
                        <span class="w-3.5 h-0.5 bg-slate-700 group-hover:bg-white rounded-full transition-colors duration-300 pointer-events-none"></span>
                        <span class="w-3.5 h-0.5 bg-slate-700 group-hover:bg-white rounded-full transition-colors duration-300 pointer-events-none"></span>
                        <span class="w-3.5 h-0.5 bg-slate-700 group-hover:bg-white rounded-full transition-colors duration-300 pointer-events-none"></span>
                    </div>

                    <!-- Menu Label Text Below Hamburger Icon -->
                    <span class="font-['Outfit'] font-bold text-[11px] text-slate-700 group-hover:text-blue-600 transition-colors mt-1 tracking-[0.06em] uppercase">MENU</span>
                </button>

                <!-- Thin Vertical Divider Line -->
                <div class="hidden lg:block w-[1px] h-7 bg-slate-200 mx-1"></div>

                <!-- Vertically Stacked Profile Button (Circular Tactile Sticker Badge) -->
                <a href="profile.html" aria-label="User Profile"
                    class="relative z-30 group flex flex-col items-center justify-center cursor-pointer pointer-events-auto transition-all duration-300 transform hover:-translate-y-0.5">
                    
                    <!-- Circular Sticker Outline Ring Icon -->
                    <div class="w-10 h-10 rounded-full bg-gradient-to-b from-slate-50 via-white to-slate-100/90 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.05)] group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:border-blue-600 group-hover:shadow-[0_6px_16px_rgba(37,99,235,0.32)] text-slate-700 group-hover:text-white flex items-center justify-center transition-all duration-300">
                        <i class="fa-regular fa-user text-[15px] text-slate-700 group-hover:text-white transition-colors"></i>
                    </div>

                    <!-- Below Text: PROFILE -->
                    <span class="font-['Outfit'] font-bold text-[11px] text-slate-700 group-hover:text-blue-600 transition-colors mt-1 tracking-[0.06em] uppercase">
                        PROFILE
                    </span>
                </a>
            </div>
        </div>

        <!-- Mobile Navigation Menu (Centered Modal Overlay) -->
        
    </nav>

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

            <!-- Dead-Centered Modal Card (Tactile Sticker Design) -->
            <div id="mobileMenuCard" class="relative z-10 bg-white/95 backdrop-blur-2xl w-full max-w-[360px] rounded-[32px] shadow-[0_35px_80px_rgba(0,0,0,0.3)] border border-slate-100 flex flex-col overflow-hidden transform scale-95 transition-all duration-300 my-auto pointer-events-none">

                <div class="p-5 w-full">
                    <!-- Navigation Modal Header -->
                    <div class="flex items-center justify-between mb-3.5 pb-2.5 border-b border-slate-100">
                        <div class="flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                            <span class="font-['Outfit'] text-[12px] font-black tracking-[0.2em] text-slate-900 uppercase">NAVIGATION</span>
                        </div>
                        <button id="closeMobileMenuBtn" onclick="closeMobileMenu(event)" type="button" aria-label="Close navigation menu"
                            class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-colors shadow-inner z-[60] relative cursor-pointer">
                            <i class="fa-solid fa-xmark text-[14px] pointer-events-none"></i>
                        </button>
                    </div>

                    <!-- 8 Tactile Sticker Grid Links -->
                    <div class="grid grid-cols-2 gap-2.5 max-h-[62vh] overflow-y-auto pr-0.5">

                        <!-- 1. Home (Active Page Capsule) -->
                        <a href="index.html"
                            class="mobile-link group flex flex-col items-center justify-center p-3 rounded-[20px] bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_6px_20px_rgba(37,99,235,0.32)] transition-all duration-300 transform hover:-translate-y-0.5">
                            <div class="w-10 h-10 rounded-[14px] bg-white/20 backdrop-blur-md flex items-center justify-center mb-1.5">
                                <i class="fa-solid fa-house text-[15px] text-white"></i>
                            </div>
                            <span class="font-['Outfit'] font-extrabold text-[12px] text-white text-center leading-tight uppercase">HOME</span>
                        </a>

                        <!-- 2. Tourist Visa -->
                        <a href="visas.html"
                            class="mobile-link group flex flex-col items-center justify-center p-3 rounded-[20px] bg-slate-50/80 hover:bg-blue-50/80 border border-slate-200/70 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-0.5">
                            <div class="w-10 h-10 rounded-[14px] bg-gradient-to-b from-slate-50 via-white to-slate-100/90 border border-slate-200/90 shadow-[0_3px_10px_rgba(0,0,0,0.05)] group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:border-blue-600 group-hover:shadow-[0_6px_16px_rgba(37,99,235,0.3)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 mb-1.5">
                                <i class="fa-solid fa-passport text-[15px] text-blue-600 group-hover:text-white transition-colors"></i>
                            </div>
                            <span class="font-['Outfit'] font-bold text-[12px] text-slate-800 group-hover:text-blue-600 transition-colors text-center leading-tight uppercase">TOURIST VISA</span>
                        </a>

                        <!-- 3. Medical Tourism -->
                        <a href="medical.html"
                            class="mobile-link group flex flex-col items-center justify-center p-3 rounded-[20px] bg-slate-50/80 hover:bg-teal-50/80 border border-slate-200/70 hover:border-teal-200 transition-all duration-300 transform hover:-translate-y-0.5">
                            <div class="w-10 h-10 rounded-[14px] bg-gradient-to-b from-slate-50 via-white to-slate-100/90 border border-slate-200/90 shadow-[0_3px_10px_rgba(0,0,0,0.05)] group-hover:from-teal-600 group-hover:to-emerald-600 group-hover:border-teal-600 group-hover:shadow-[0_6px_16px_rgba(13,148,136,0.3)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 mb-1.5">
                                <i class="fa-solid fa-notes-medical text-[15px] text-teal-600 group-hover:text-white transition-colors"></i>
                            </div>
                            <span class="font-['Outfit'] font-bold text-[12px] text-slate-800 group-hover:text-teal-700 transition-colors text-center leading-tight uppercase">MEDICAL TOURISM</span>
                        </a>

                        <!-- 4. Tour Booking -->
                        <a href="tours.html"
                            class="mobile-link group flex flex-col items-center justify-center p-3 rounded-[20px] bg-slate-50/80 hover:bg-amber-50/80 border border-slate-200/70 hover:border-amber-200 transition-all duration-300 transform hover:-translate-y-0.5">
                            <div class="w-10 h-10 rounded-[14px] bg-gradient-to-b from-slate-50 via-white to-slate-100/90 border border-slate-200/90 shadow-[0_3px_10px_rgba(0,0,0,0.05)] group-hover:from-amber-500 group-hover:to-orange-500 group-hover:border-amber-500 group-hover:shadow-[0_6px_16px_rgba(245,158,11,0.3)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 mb-1.5">
                                <i class="fa-solid fa-earth-americas text-[15px] text-amber-500 group-hover:text-white transition-colors"></i>
                            </div>
                            <span class="font-['Outfit'] font-bold text-[12px] text-slate-800 group-hover:text-amber-600 transition-colors text-center leading-tight uppercase">TOUR BOOKING</span>
                        </a>

                        <!-- 5. Flight Booking -->
                        <a href="flight-booking.html"
                            class="mobile-link group flex flex-col items-center justify-center p-3 rounded-[20px] bg-slate-50/80 hover:bg-sky-50/80 border border-slate-200/70 hover:border-sky-200 transition-all duration-300 transform hover:-translate-y-0.5">
                            <div class="w-10 h-10 rounded-[14px] bg-gradient-to-b from-slate-50 via-white to-slate-100/90 border border-slate-200/90 shadow-[0_3px_10px_rgba(0,0,0,0.05)] group-hover:from-sky-600 group-hover:to-blue-600 group-hover:border-sky-600 group-hover:shadow-[0_6px_16px_rgba(2,132,199,0.3)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 mb-1.5">
                                <i class="fa-solid fa-plane text-[15px] text-sky-600 group-hover:text-white transition-colors"></i>
                            </div>
                            <span class="font-['Outfit'] font-bold text-[12px] text-slate-800 group-hover:text-sky-600 transition-colors text-center leading-tight uppercase">FLIGHT BOOKING</span>
                        </a>

                        <!-- 6. Cab Booking -->
                        <a href="cab-booking.html"
                            class="mobile-link group flex flex-col items-center justify-center p-3 rounded-[20px] bg-slate-50/80 hover:bg-amber-50/80 border border-slate-200/70 hover:border-amber-200 transition-all duration-300 transform hover:-translate-y-0.5">
                            <div class="w-10 h-10 rounded-[14px] bg-gradient-to-b from-slate-50 via-white to-slate-100/90 border border-slate-200/90 shadow-[0_3px_10px_rgba(0,0,0,0.05)] group-hover:from-amber-600 group-hover:to-yellow-600 group-hover:border-amber-600 group-hover:shadow-[0_6px_16px_rgba(217,119,6,0.3)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 mb-1.5">
                                <i class="fa-solid fa-taxi text-[15px] text-amber-600 group-hover:text-white transition-colors"></i>
                            </div>
                            <span class="font-['Outfit'] font-bold text-[12px] text-slate-800 group-hover:text-amber-700 transition-colors text-center leading-tight uppercase">CAB BOOKING</span>
                        </a>

                        <!-- 7. Hotel Booking -->
                        <a href="hotels.html"
                            class="mobile-link group flex flex-col items-center justify-center p-3 rounded-[20px] bg-slate-50/80 hover:bg-indigo-50/80 border border-slate-200/70 hover:border-indigo-200 transition-all duration-300 transform hover:-translate-y-0.5">
                            <div class="w-10 h-10 rounded-[14px] bg-gradient-to-b from-slate-50 via-white to-slate-100/90 border border-slate-200/90 shadow-[0_3px_10px_rgba(0,0,0,0.05)] group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:border-indigo-600 group-hover:shadow-[0_6px_16px_rgba(79,70,229,0.3)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 mb-1.5">
                                <i class="fa-solid fa-hotel text-[15px] text-indigo-600 group-hover:text-white transition-colors"></i>
                            </div>
                            <span class="font-['Outfit'] font-bold text-[12px] text-slate-800 group-hover:text-indigo-600 transition-colors text-center leading-tight uppercase">HOTEL BOOKING</span>
                        </a>

                        <!-- 8. About -->
                        <a href="about.html"
                            class="mobile-link group flex flex-col items-center justify-center p-3 rounded-[20px] bg-slate-50/80 hover:bg-purple-50/80 border border-slate-200/70 hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-0.5">
                            <div class="w-10 h-10 rounded-full bg-gradient-to-b from-slate-50 via-white to-slate-100/90 border border-slate-200/90 shadow-[0_3px_10px_rgba(0,0,0,0.05)] group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:border-indigo-600 group-hover:shadow-[0_6px_16px_rgba(99,102,241,0.3)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 mb-1.5">
                                <i class="fa-solid fa-compass text-[15px] text-purple-600 group-hover:text-white transition-all duration-500 group-hover:rotate-45"></i>
                            </div>
                            <span class="font-['Outfit'] font-bold text-[12px] text-slate-800 group-hover:text-purple-600 transition-colors text-center leading-tight uppercase">ABOUT</span>
                        </a>

                    </div>

                    <div class="h-[1px] bg-slate-100 my-3.5 w-full"></div>

                    <!-- Footer Action Buttons -->
                    <div class="flex items-center justify-between w-full gap-2.5">
                        <a href="profile.html"
                            class="flex-1 flex justify-center items-center gap-2 group py-2.5 px-3 rounded-[16px] bg-slate-50 hover:bg-blue-50 border border-slate-200/80 hover:border-blue-200 transition-all duration-300">
                            <i class="fa-regular fa-user text-[13px] text-slate-700 group-hover:text-blue-600 transition-colors"></i>
                            <span class="font-['Outfit'] text-[12px] font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors tracking-[0.02em] uppercase">MY ACCOUNT</span>
                        </a>
                        <a href="index.html"
                            class="flex-1 items-center flex justify-center gap-2 group py-2.5 px-3 rounded-[16px] bg-slate-50 hover:bg-red-50 border border-slate-200/80 hover:border-red-200 transition-all duration-300">
                            <span class="font-['Outfit'] text-[12px] font-extrabold text-slate-800 group-hover:text-red-500 transition-colors tracking-[0.02em] uppercase">SIGN OUT</span>
                            <i class="fa-solid fa-arrow-right-from-bracket text-[13px] text-slate-700 group-hover:text-red-500 transition-colors"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>`;

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    if (content.includes('<nav id="navbar"') || content.includes('<nav class="fixed w-full top-0')) {
        const navRegex = /<!-- Navigation -->[\s\S]*?<nav[\s\S]*?<\/nav>/i;
        const navRegexAlt = /<nav[\s\S]*?<\/nav>/i;

        if (navRegex.test(content)) {
            content = content.replace(navRegex, navbarHTML);
        } else if (navRegexAlt.test(content)) {
            content = content.replace(navRegexAlt, navbarHTML);
        }

        if (!content.includes('js/navbar.js')) {
            content = content.replace('</body>', '    <script src="js/navbar.js"></script>\n</body>');
        }

        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Successfully updated navbar in:', file);
    }
});
