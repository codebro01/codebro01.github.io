let bars = document.querySelector('.bars'),
    navMenu = document.querySelector('.nav-menu'),
    homeContainer = document.querySelector('.home-container'),
    skills = document.querySelector('.skills'),
    navLink = document.querySelectorAll('.nav-link');

bars.addEventListener('click', function () {
    navMenu.classList.toggle('nav-menu-is-active');
    bars.classList.toggle('bars-is-active');
});

navLink.forEach(nav_link => {
    nav_link.addEventListener('click', () => {
        navMenu.classList.remove('nav-menu-is-active');
        bars.classList.remove('bars-is-active');

    })
})



const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}

// back to top

let backtotop = select('.back-to-top')
if (backtotop) {
    const toggleBacktotop = () => {
        if (window.scrollY > 100) {
            backtotop.classList.add('active')
        } else {
            backtotop.classList.remove('active')
        }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
}


// Data aos for fade effects

window.addEventListener('load', () => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    })
});

const typed = select('.typed')
if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}