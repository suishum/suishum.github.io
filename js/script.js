/* global Validator */
$(document).ready(function() {
  console.log('jquery running');
  const burger = $('.nav-burger')[0];
  const navbar = $('.navbar')[0];
  const portfolioContainer = $('.portfolio-container')[0];
  const hero = $('.hero')[0];
  const heroImage = $(hero).children()[1];
  const heroTitle = $(hero).children()[0];
  let scrollbarLocation = $(this).scrollTop();

  function modifyHero() {
    if (scrollbarLocation > 100 && window.innerWidth > 600) {
      $(hero).css('right', '400px');
      $(heroImage).css({
        'width': '50%',
        'right': '100px',
        'bottom': '55px'
      });
      $(heroTitle).css({
        'left': '0',
        'top': '0'
      });
    } else {
      $(hero).css('right', '180px');
      $(heroImage).css({
        'width': '80%',
        'right': '160px',
        'bottom': '65px'
      });
      $(heroTitle).css({
        'left': '160px',
        'top': '65px'
      });
    }

    if (window.innerWidth <= 600) {
      $(heroImage).css({
        'width': '100%',
        'right': '175px'
      });
      $(heroTitle).css({
        'left': '-50px',
        'top': '-10px'
      });
    }
  }

  function toggleBurger() {
    $(burger).toggleClass('change');
    console.log($(burger).hasClass('change'));
    console.log($(navbar).children()[0]);
    if ($(burger).hasClass('change')) {
      $(burger).css({
        'left': '120px',
        'transition': '1.5s'
      });
      $(navbar).css({
        'left': '0',
        'transition': '1.5s'
      });
    } else {
      $(burger).css({
        'left': '0',
        'transition': '1.5s'
      });
      $(navbar).css({
        'left': '-120px',
        'transition': '1.5s'
      });
    }
  }

  $(burger).click(() => toggleBurger());

  if (!portfolioContainer) {
    // HOMEPAGE JS
    console.log('i am the index page');
    // Variables
    const scrollLink = $('.scroll');
    // Resize hero image on first load
    // console.log('inner width',window.innerWidth);
    modifyHero();
    console.log('hero image resized');
    console.log('smoothScroll running');
    // Smooth scrolling for navbar link clicks
    scrollLink.click(function(e) {
      e.preventDefault();
      if (window.innerWidth <= 600) {
        toggleBurger();
      }
      $('body, html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });

    // TODO: ADD ANIMATION FOR SECTION SWITCHING HERE? DING
    // Active link switching
    $(window).scroll(function() {
      scrollbarLocation = $(this).scrollTop();
      // Resize hero image on first load
      modifyHero();
      // Change highlighted link
      scrollLink.each(function() {
        const sectionOffset = $(this.hash).offset().top - 20;
        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      });
    });
  } else {
    console.log('i am not index page');
    // PORFOLIO PAGE JS
    const portfolioLink = $('.portfolio-link')[0];
    $(portfolioLink).addClass('active');
    $(portfolioLink).siblings().removeClass('active');
  }

  // CONTACT FORM JS
  const frmvalidator  = new Validator('contact-form');
  frmvalidator.addValidation('name', 'req', 'Please provide your name');
  frmvalidator.addValidation('email', 'req', 'Please provide your email');
  frmvalidator.addValidation('email', 'email', 'Please enter a valid email address');
});
