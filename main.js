/**
 * Shared Javascript for mysolar.id
 * Handles Navbar behavior, Scroll reveals, and Mobile interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('header') || document.querySelector('nav.fixed');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    // 2. Intersection Observer for Scroll Reveal
    const revealOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, revealOptions);

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('active');
        }
        revealObserver.observe(el);
    });

    // 3. Mobile Menu Toggle
    const menuBtn = document.querySelector('#mobile-menu-btn');
    const mobileNav = document.querySelector('#mobile-nav');

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
            const isOpen = mobileNav.classList.contains('mobile-nav-open');
            if (isOpen) {
                mobileNav.classList.remove('mobile-nav-open');
                menuBtn.querySelector('span').textContent = 'menu';
            } else {
                mobileNav.classList.add('mobile-nav-open');
                menuBtn.querySelector('span').textContent = 'close';
            }
        });
    }

    // 4. Hero Staggered Animation
    const heroElements = document.querySelectorAll('.hero-entrance');
    heroElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });

    // 5. Language Switching Logic
    const langSwitcher = document.getElementById('lang-switcher');
    const langSwitcherMobile = document.getElementById('lang-switcher-mobile');
    
    const updateContent = (lang) => {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (window.translations && window.translations[lang] && window.translations[lang][key]) {
                el.textContent = window.translations[lang][key];
            }
        });
        localStorage.setItem('preferredLang', lang);
        if (langSwitcher) langSwitcher.value = lang;
        if (langSwitcherMobile) langSwitcherMobile.value = lang;
    };

    if (langSwitcher) {
        langSwitcher.addEventListener('change', (e) => {
            updateContent(e.target.value);
        });
    }
    if (langSwitcherMobile) {
        langSwitcherMobile.addEventListener('change', (e) => {
            updateContent(e.target.value);
        });
    }

    // Initialize Language
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    if (window.translations) {
        updateContent(savedLang);
    } else {
        window.addEventListener('load', () => updateContent(savedLang));
    }
});
