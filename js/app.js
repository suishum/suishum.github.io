console.log('js running');

$(document).ready(function() {
  const baseUrl = '/suishum.github.io';
  console.log('site jquery running');
  // console.log(top.location.pathname);
  // const url = top.location.href.split('#')[0];
  // const idLoc = top.location.href.split('#')[1];
  // console.log(url, idLoc);
  // // if (top.location.pathname === '/suishum.github.io/portfolio.php') {
  // //   // add active class to navbar links if the user lands on this page
  // // }
  //
  // if (idLoc !== null) {
  //   const activeLink = $(`.${idLoc}`)[0];
  //   console.log('inside first conditional', url, idLoc, activeLink);
  //   $(activeLink).addClass('active');
  // } else if (idLoc === null) {
  //   const homeLink = $('.home-link')[0];
  //   $(homeLink).addClass('active');
  // }

  // HOMEPAGE JS
  if (top.location.pathname === `${baseUrl}/index.php`) {
    console.log('index page hi');
    console.log('smoothScroll running');
    const scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body, html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );

      // TODO: #hero, top: 2, #about, top: 830 use these figures when working out when the hero image should shrink
      // console.log($(this.hash).offset().top);
    });

    // Active link switching
    $(window).scroll(function() {
      const scrollbarLocation = $(this).scrollTop();
      scrollLink.each(function() {
        const sectionOffset = $(this.hash).offset().top - 20;
        if ( sectionOffset <= scrollbarLocation ) {
          // console.log(this);
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
