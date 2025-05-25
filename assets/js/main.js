/**
 * Template Name: Kelly
 * Updated: Aug 07 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 */

document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    /** Apply .scrolled class to the body as the page is scrolled down */
    function toggleScrolled() {
        const body = document.querySelector('body');
        const header = document.querySelector('#header');
        if (!header) return;
        if (!header.classList.contains('scroll-up-sticky') &&
            !header.classList.contains('sticky-top') &&
            !header.classList.contains('fixed-top')) return;
        window.scrollY > 100 ? body.classList.add('scrolled') : body.classList.remove('scrolled');
    }

    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    /** Mobile nav toggle */
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    function mobileNavToggle() {
        document.body.classList.toggle('mobile-nav-active');
        mobileNavToggleBtn.classList.toggle('bi-list');
        mobileNavToggleBtn.classList.toggle('bi-x');
    }
    if (mobileNavToggleBtn) {
        mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
    }

    /** Hide mobile nav on same-page/hash links */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.addEventListener('click', () => {
            if (document.body.classList.contains('mobile-nav-active')) {
                mobileNavToggle();
            }
        });
    });

    /** Toggle mobile nav dropdowns */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(dropdownToggle => {
        dropdownToggle.addEventListener('click', function (e) {
            e.preventDefault();
            const parent = this.parentNode;
            const next = parent.nextElementSibling;
            if (parent) parent.classList.toggle('active');
            if (next) next.classList.toggle('dropdown-active');
            e.stopImmediatePropagation();
        });
    });

    /** Preloader */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => preloader.remove());
    }

    /** Scroll top button */
    const scrollTop = document.querySelector('.scroll-top');
    function toggleScrollTop() {
        if (scrollTop) {
            window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
    }
    if (scrollTop) {
        scrollTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    /** Animation on scroll init */
    function aosInit() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 600,
                easing: 'ease-in-out',
                once: true,
                mirror: false
            });
        }
    }
    window.addEventListener('load', aosInit);

    /** Animate skills items on scroll */
    const skillsAnimation = document.querySelectorAll('.skills-animation');
    skillsAnimation.forEach((item) => {
        new Waypoint({
            element: item,
            offset: '80%',
            handler: () => {
                item.querySelectorAll('.progress .progress-bar').forEach(el => {
                    el.style.width = el.getAttribute('aria-valuenow') + '%';
                });
            }
        });
    });

    /** Initiate Pure Counter */
    if (typeof PureCounter !== 'undefined') {
        new PureCounter();
    }

    /** Init Swiper sliders */
    function initSwiper() {
        document.querySelectorAll(".init-swiper").forEach(swiperElement => {
            const configElement = swiperElement.querySelector(".swiper-config");
            if (!configElement) return;
            let config;
            try {
                config = JSON.parse(configElement.innerHTML.trim());
            } catch (e) {
                console.error("Invalid swiper config JSON", e);
                return;
            }

            if (swiperElement.classList.contains("swiper-tab")) {
                initSwiperWithCustomPagination(swiperElement, config);
            } else {
                new Swiper(swiperElement, config);
            }
        });
    }
    window.addEventListener("load", initSwiper);

    /** Init GLightbox */
    if (typeof GLightbox !== 'undefined') {
        GLightbox({ selector: '.glightbox' });
    }

    /** Init Isotope layout and filters */
    document.querySelectorAll('.isotope-layout').forEach(isotopeItem => {
        const layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
        const filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
        const sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

        let initIsotope;
        const container = isotopeItem.querySelector('.isotope-container');
        if (!container) return;

        imagesLoaded(container, () => {
            initIsotope = new Isotope(container, {
                itemSelector: '.isotope-item',
                layoutMode: layout,
                filter: filter,
                sortBy: sort
            });
        });

        isotopeItem.querySelectorAll('.isotope-filters li').forEach(filterBtn => {
            filterBtn.addEventListener('click', function () {
                const active = isotopeItem.querySelector('.isotope-filters .filter-active');
                if (active) active.classList.remove('filter-active');
                this.classList.add('filter-active');
                initIsotope.arrange({ filter: this.getAttribute('data-filter') });
                if (typeof aosInit === 'function') aosInit();
            });
        });
    });

});
