// Traviora Global Navigation Bar & Mobile Menu Controller

window.toggleMobileMenu = function (e) {
    if (e && e.type === 'touchstart') {
        // Prevent ghost clicks on touch devices only for toggle button
        if (typeof e.preventDefault === 'function') e.preventDefault();
    }
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuCard = document.getElementById('mobileMenuCard');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    if (!mobileMenu) return;

    // Check if hidden (opacity-0, pointer-events-none, hidden, lg:hidden, or CSS display:none)
    const computedStyle = window.getComputedStyle(mobileMenu);
    const isHidden = mobileMenu.classList.contains('opacity-0') || 
                     mobileMenu.classList.contains('pointer-events-none') || 
                     mobileMenu.classList.contains('hidden') ||
                     computedStyle.display === 'none' ||
                     computedStyle.opacity === '0';

    if (isHidden) {
        // Force show mobile menu modal
        mobileMenu.classList.remove('opacity-0', 'pointer-events-none', 'hidden', 'lg:hidden');
        mobileMenu.classList.add('opacity-100', 'pointer-events-auto', '!flex');
        mobileMenu.style.display = 'flex';
        mobileMenu.style.opacity = '1';
        mobileMenu.style.pointerEvents = 'auto';

        if (mobileMenuOverlay) {
            mobileMenuOverlay.classList.remove('pointer-events-none', 'opacity-0', 'hidden');
            mobileMenuOverlay.classList.add('pointer-events-auto', 'opacity-100');
            mobileMenuOverlay.style.opacity = '1';
            mobileMenuOverlay.style.pointerEvents = 'auto';
        }
        if (mobileMenuCard) {
            mobileMenuCard.classList.remove('scale-95', 'pointer-events-none', 'hidden');
            mobileMenuCard.classList.add('scale-100', 'pointer-events-auto');
            mobileMenuCard.style.pointerEvents = 'auto';
        }
        document.body.style.overflow = 'hidden';
    } else {
        window.closeMobileMenu();
    }
};

window.closeMobileMenu = function (e) {
    // CRITICAL: DO NOT call e.preventDefault() or e.stopPropagation() here!
    // This allows anchor links (<a href="...">) to navigate normally.
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuCard = document.getElementById('mobileMenuCard');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    if (!mobileMenu) return;

    mobileMenu.classList.remove('opacity-100', 'pointer-events-auto', '!flex');
    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
    mobileMenu.style.display = '';
    mobileMenu.style.opacity = '';
    mobileMenu.style.pointerEvents = '';

    if (mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove('pointer-events-auto', 'opacity-100');
        mobileMenuOverlay.classList.add('pointer-events-none', 'opacity-0');
        mobileMenuOverlay.style.opacity = '';
        mobileMenuOverlay.style.pointerEvents = '';
    }
    if (mobileMenuCard) {
        mobileMenuCard.classList.remove('scale-100', 'pointer-events-auto');
        mobileMenuCard.classList.add('scale-95', 'pointer-events-none');
        mobileMenuCard.style.pointerEvents = '';
    }
    document.body.style.overflow = '';
};

function initNavbarListeners() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMobileMenuBtn = document.getElementById('closeMobileMenuBtn');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

    if (mobileMenuBtn) {
        mobileMenuBtn.removeEventListener('click', window.toggleMobileMenu);
        mobileMenuBtn.addEventListener('click', window.toggleMobileMenu);
    }
    if (closeMobileMenuBtn) {
        closeMobileMenuBtn.removeEventListener('click', window.closeMobileMenu);
        closeMobileMenuBtn.addEventListener('click', window.closeMobileMenu);
    }
    if (mobileMenuOverlay) {
        mobileMenuOverlay.removeEventListener('click', window.closeMobileMenu);
        mobileMenuOverlay.addEventListener('click', window.closeMobileMenu);
    }

    document.querySelectorAll('#mobileMenu a.mobile-link').forEach(link => {
        link.removeEventListener('click', window.closeMobileMenu);
        link.addEventListener('click', window.closeMobileMenu);
    });

    // ESC Key listener to close modal
    document.removeEventListener('keydown', handleEscKey);
    document.addEventListener('keydown', handleEscKey);

    function handleEscKey(e) {
        if (e.key === 'Escape') {
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu && (mobileMenu.style.display === 'flex' || mobileMenu.classList.contains('opacity-100'))) {
                window.closeMobileMenu();
            }
        }
    }

    // Active Page Highlighting Logic
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
    else if (path === 'profile.html') targetHref = 'profile.html';

    // Desktop Links Active State
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
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbarListeners);
} else {
    initNavbarListeners();
}
