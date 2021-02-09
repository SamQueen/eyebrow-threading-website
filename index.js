//Minimize navbar on scroll

$(window).on('scroll', function() {
   if($(window).scrollTop()) {
       $('nav').addClass("nav-change-height");
       $('nav h1').addClass("h1-change-margin");
       $('nav ul').addClass("ul-change-margin");
       $('nav ul li a').addClass("a-change-color");
   }else {
       $('nav').removeClass("nav-change-height");
       $('nav h1').removeClass("h1-change-margin");
       $('nav ul').removeClass("ul-change-margin");
       $('nav ul li a').removeClass("a-change-color");
   } 
});
