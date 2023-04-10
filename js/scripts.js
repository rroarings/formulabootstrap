/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
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

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
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
});

window.addEventListener('DOMContentLoaded', function() {
    // select the button element
  const exploreBtn = document.querySelector('a[href="#section-engineer"]');
  
  // add event listener to the button
  exploreBtn.addEventListener('click', function(event) {
    event.preventDefault(); // prevent the default scroll behavior
    
    const section = document.querySelector('#section-engineer'); // select the target section
    const offset = 200; // adjust the offset value as needed
    
    const sectionPosition = section.getBoundingClientRect().top; // get the section's top position
    const bodyPosition = document.body.getBoundingClientRect().top; // get the body's top position
    const scrollPosition = sectionPosition - bodyPosition - offset; // calculate the scroll position
    
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth' // add smooth scrolling effect
    });
  });
});
