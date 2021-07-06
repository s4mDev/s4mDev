$('.slick-rev').slick({
    infinite: false,
    slidesToShow: 2,
    prevArrow: '<button class="prev"></button>',
    nextArrow: '<button class="next"></button>',
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

$(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() >= 200) {
            $('header.scrollbar').addClass('stickytop');
        }
        else{
            $('header.scrollbar').removeClass('stickytop');
        }
    });
});

$('.burger').click(function() {
  $(this).toggleClass('open');
  $('.mob-menu').toggleClass('open');
});

$('.mob-link').click(function() {
  $('.burger').toggleClass('open');
  $('.mob-menu').toggleClass('open');
});