$(document).ready(function() {
  console.log('jquery running');
  const portfolioContainer = $('.portfolio-container')[0];
  const hero = $('.hero')[0];
  const heroImage = $(hero).children()[1];
  const heroTitle = $(hero).children()[0];
  let scrollbarLocation = $(this).scrollTop();

  function modifyHero() {
    if (scrollbarLocation > 100) {
      $(hero).css('right', '400px');
      $(heroImage).css({
        'width': '50%',
        'transition': '1.5s',
        'position': 'relative',
        'right': '100px',
        'bottom': '55px'
      });
      $(heroTitle).css({
        'z-index': 10,
        'position': 'relative',
        'left': '0',
        'top': '0',
        'transition': '1.5s'
      });
    } else {
      $(hero).css('right', '180px');
      $(heroImage).css({
        'width': '80%',
        'transition': '1.5s',
        'position': 'relative',
        'right': '160px',
        'bottom': '65px'
      });
      $(heroTitle).css({
        'z-index': 10,
        'position': 'relative',
        'left': '160px',
        'top': '65px',
        'transition': '1.5s'
      });
    }
  }

  if (!portfolioContainer) {
    // HOMEPAGE JS
    console.log('i am the index page');
    // Variables
    const scrollLink = $('.scroll');
    // Resize hero image on first load
    modifyHero();
    console.log('hero image resized');
    console.log('smoothScroll running');
    // Smooth scrolling for navbar link clicks
    scrollLink.click(function(e) {
      e.preventDefault();
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

  // TODO: GET CONTACT FORM TO WORK
});
