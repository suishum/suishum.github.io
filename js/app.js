console.log('js running');

$(document).ready(function() {
  console.log('site jquery running');
  const baseUrl = '/suishum.github.io';
  const hero = $('.hero')[0];
  const heroImage = $(hero).children()[1];
  let scrollbarLocation = $(this).scrollTop();
  function modifyHero() {
    if (scrollbarLocation > 100) {
      $(hero).css('right', '400px');
      $(heroImage).css({
        'width': '50%',
        'transition': '1.5s'
      });
    } else {
      $(hero).css('right', '170px');
      $(heroImage).css({
        'width': '80%',
        'transition': '1.5s'
      });
    }
  }

  // HOMEPAGE JS
  if (top.location.pathname === `${baseUrl}/index.php` || top.location.pathname === `${baseUrl}/`) {
    console.log(top.location.pathname);
    console.log('index page hi');
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
  }

  // PORFOLIO PAGE JS
  if (top.location.pathname === `${baseUrl}/portfolio.php`) {
    console.log('portfolio page hi');
    const portfolioLink = $('.portfolio-link')[0];
    $(portfolioLink).addClass('active');
    $(portfolioLink).siblings().removeClass('active');
  }
});
