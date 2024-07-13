$(function () {
    $('.slider-blog__inner').slick({
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.png" alt="arrow-left"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.png" alt="arrow-right"></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });

    $('.menu__btn').on('click', function () {
      $('.menu__list').toggleClass('menu__list--active');
    });

    $('.important-announcement__slider').slick({
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.png" alt="arrow-left"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.png" alt="arrow-right"></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });



    document.addEventListener('DOMContentLoaded', function () {
        const links = document.querySelectorAll('.advice__list-link');
      
        links.forEach(link => {
          link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
      
            if (targetElement) {
              window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
              });
            }
          });
        });
      });
      
  });