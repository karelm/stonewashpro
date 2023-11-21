/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    let items = document.querySelectorAll('.carousel .carousel-item');

    // let secondItem = items[1];

    // const images = [
    //     "assets/gallery/gal-1-min.jpg",
    //     "assets/gallery/gal-2-min.jpg",
    //     "assets/gallery/gal-4-min.jpg",
    //     "assets/gallery/gal-6-min.jpg",
    //     "assets/gallery/gal-7-min.jpg",
    //     "assets/gallery/gal-8-min.jpg",
    //     "assets/gallery/gal-9-min.jpg",
    //     "assets/gallery/gal-10-min.jpg",
    //     "assets/gallery/gal-11-min.jpg",
    //     "assets/gallery/gal-12-min.jpg",
    //     "assets/gallery/gal-13-min.jpg",
    //     "assets/gallery/gal-14-min.jpg",
    //     "assets/gallery/gal-15-min.jpg",
    //     "assets/gallery/gal-16-min.jpg",
    //     "assets/gallery/gal-17-min.jpg",
    //     "assets/gallery/gal-18-min.jpg",
    //     "assets/gallery/gal-19-min.jpg",
    //     "assets/gallery/gal-20-min.jpg",
    //     "assets/gallery/gal-21-min.jpg",
    //     "assets/gallery/gal-22-min.jpg",
    //     "assets/gallery/gal-23-min.jpg",
    //     "assets/gallery/gal-24-min.jpg",
    //     "assets/gallery/gal-25-min.jpg",
    //     "assets/gallery/gal-26-min.jpg",
    //     "assets/gallery/gal-27-min.jpg",
    //     "assets/gallery/gal-28-min.jpg",
    //     "assets/gallery/gal-29-min.jpg",
    //     "assets/gallery/gal-30-min.jpg",
    //     "assets/gallery/gal-31-min.jpg",
    //     "assets/gallery/gal-32-min.jpg",
    //     "assets/gallery/gal-33-min.jpg",
    //     "assets/gallery/gal-34-min.jpg",
    //     "assets/gallery/gal-35-min.jpg",
    //     "assets/gallery/gal-36-min.jpg",
    //     "assets/gallery/gal-37-min.jpg",
    //     "assets/gallery/gal-38-min.jpg",
    //     "assets/gallery/gal-39-min.jpg",
    //     "assets/gallery/gal-40-min.jpg",
    //     "assets/gallery/gal-41-min.jpg",
    //     "assets/gallery/gal-42-min.jpg",
    //     "assets/gallery/gal-43-min.jpg",
    //     "assets/gallery/gal-44-min.jpg"
    // ].reverse();

    // images.forEach(image => {
    //     const clone = secondItem.cloneNode(true);
    //     clone.querySelector('img').src = image;
    //     secondItem.parentElement.appendChild(clone);
    // });


    items.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (var i=1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })


});
