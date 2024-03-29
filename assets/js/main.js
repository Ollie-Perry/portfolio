/**
* Template Name: MyPortfolio
* Updated: Mar 10 2023 with Bootstrap v5.2.3
* Template URL: https://bootstrapmade.com/myportfolio-bootstrap-portfolio-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

let lastScrollTop = 0;
  const threshold = 50; // Set the threshold value (in pixels)
  let accumulatedScroll = 0; // Accumulator for tracked scroll distance

  window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    let scrollDelta = Math.abs(currentScroll - lastScrollTop); // Calculate the absolute scroll distance

    // Accumulate the scroll distance regardless of direction
    accumulatedScroll += scrollDelta;

    if (accumulatedScroll > threshold) {
      if (currentScroll > lastScrollTop && currentScroll > threshold) {
        // Scrolling down and past the threshold
        document.querySelector('.navbar').classList.add('hidden');
      } else {
        // Scrolling up
        document.querySelector('.navbar').classList.remove('hidden');
      }
      // Reset the accumulated scroll after acting on a significant scroll event
      accumulatedScroll = 0;
    }

    lastScrollTop = currentScroll; // Update the last scroll position to the current position
  }, false);



  document.getElementById('logo').addEventListener('mouseenter', function() {
    this.setAttribute('src', 'assets/img/about/Logo Hover-01.svg');
  });
  
  document.getElementById('logo').addEventListener('mouseleave', function() {
    this.setAttribute('src', 'assets/img/about/Logo-01.svg');
  });


  document.getElementById('to-top').addEventListener('mouseenter', function() {
    document.getElementById('logo-footer').src = 'assets/img/about/Logo Hover-01.svg'; // Change to hover state SVG
  });
  
  document.getElementById('to-top').addEventListener('mouseleave', function() {
    document.getElementById('logo-footer').src = 'assets/img/about/Logo-01.svg'; // Revert to original SVG
  });




(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * burgerMenu
   */
  const burgerMenu = select('.burger')
  on('click', '.burger', function(e) {
    burgerMenu.classList.toggle('active');
  })

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('#portfolio-grid');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.item',
      });

      let portfolioFilters = select('#filters a', true);

      on('click', '#filters a', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('active');
        });
        this.classList.add('active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()