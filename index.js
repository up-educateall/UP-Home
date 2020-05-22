
      $(document).ready(function() {
           $(".menu-icon").on("click", function() {
                 $("nav ul").toggleClass("showing");
                 $('nav img').toggleClass('logo-img');
           });
     });

     // Scrolling Effect

     $(window).on("scroll", function() {
           if($(window).scrollTop()) {
                 $('nav').addClass('black');
                  $('nav img').addClass('logo-img');
           }

           else {
                 $('nav').removeClass('black');
                 $('nav img').removeClass('logo-img');
           }
     });
