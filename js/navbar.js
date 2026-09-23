document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile menu toggle handlers
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuCard = document.getElementById('mobileMenuCard');
    const closeMobileMenuBtn = document.getElementById('closeMobileMenuBtn');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

    const openMenu = (e) => {
        if (e && e.type === 'touchstart') {
            e.preventDefault();
        }
        if (mobileMenu) {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-full');
            mobileMenu.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
            if (mobileMenuOverlay) {
                mobileMenuOverlay.classList.remove('pointer-events-none');
                mobileMenuOverlay.classList.add('pointer-events-auto');
            }
            if (mobileMenuCard) {
                mobileMenuCard.classList.remove('scale-95');
                mobileMenuCard.classList.add('scale-100');
            }
            document.body.style.overflow = 'hidden';
        }
    };

    const closeMenu = (e) => {
        if (e && e.type === 'touchstart') {
            e.preventDefault();
        }
        if (mobileMenu) {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
            if (mobileMenuOverlay) {
                mobileMenuOverlay.classList.add('pointer-events-none');
                mobileMenuOverlay.classList.remove('pointer-events-auto');
            }
            if (mobileMenuCard) {
                mobileMenuCard.classList.add('scale-95');
                mobileMenuCard.classList.remove('scale-100');
            }
            document.body.style.overflow = '';
        }
    };

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', openMenu);
        mobileMenuBtn.addEventListener('touchstart', openMenu, { passive: false });
    }
    if (closeMobileMenuBtn) {
        closeMobileMenuBtn.addEventListener('click', closeMenu);
        closeMobileMenuBtn.addEventListener('touchstart', closeMenu, { passive: false });
    }
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMenu);
    }

    // 2. Active Page Highlighting Logic
    const path = window.location.pathname.split('/').pop() || 'index.html';
    
    let targetHref = 'index.html';
    if (path === 'index.html' || path === '') targetHref = 'index.html';
    else if (path === 'visas.html' || path.startsWith('visa')) targetHref = 'visas.html';
    else if (path === 'medical.html' || path.startsWith('medical')) targetHref = 'medical.html';
    else if (path === 'tours.html' || path.startsWith('tour')) targetHref = 'tours.html';
    else if (path === 'flight-booking.html') targetHref = 'flight-booking.html';
    else if (path === 'cab-booking.html') targetHref = 'cab-booking.html';
    else if (path === 'hotels.html' || path.startsWith('hotel')) targetHref = 'hotels.html';
    else if (path === 'about.html') targetHref = 'about.html';

    // Desktop Links Active State (Capsule Pill active state)
    document.querySelectorAll('.desktop-menu-links a').forEach(a => {
        const href = a.getAttribute('href');
        const icon = a.querySelector('i');
        
        if (href === targetHref) {
            a.classList.add('bg-blue-50', 'border-blue-200', 'text-blue-700', 'shadow-sm');
            a.classList.remove('border-transparent', 'hover:bg-blue-50/80');
            if (icon) {
                icon.classList.remove('text-slate-400');
                icon.classList.add('text-blue-600');
            }
        } else {
            a.classList.remove('bg-blue-50', 'border-blue-200', 'text-blue-700', 'shadow-sm');
            a.classList.add('border-transparent');
        }
    });

    // Mobile Links Active State
    document.querySelectorAll('#mobileMenu .mobile-link').forEach(a => {
        const href = a.getAttribute('href');
        if (href === targetHref) {
            const innerCore = a.querySelector('.inner-core');
            const beam = a.querySelector('.beam-element');
            const text = a.querySelector('span');

            if (beam) {
                beam.classList.remove('opacity-0');
                beam.classList.add('opacity-100', 'border-beam-active');
            }

            a.classList.add('bg-white', 'pointer-events-none', 'shadow-[0_15px_30px_-5px_rgba(0,0,0,0.08)]');
            a.classList.remove('bg-slate-50/30', 'hover:bg-white');

            if (text) {
                text.classList.remove('text-slate-800');
                text.classList.add('text-black', 'scale-105');
            }

            if (innerCore) {
                innerCore.classList.remove('bg-slate-50');
                innerCore.classList.add('bg-white', 'shadow-sm');
                const icon = innerCore.querySelector('i');
                if (icon) {
                    icon.classList.remove('text-slate-800');
                    icon.classList.add('text-black');
                }
            }
        }
    });
});
