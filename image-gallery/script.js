 // portfolio
 $('.gallery ul li a').click(function () {
     $('.gallery ul li').removeClass('animate__animated animate__fadeIn');
     var itemID = $(this).attr('href');
     $('.gallery ul').addClass('item_open');
     $('.gallery ul li').addClass('animate__animated animate__fadeOut');
     $(itemID).addClass('item_open');
     return false;
 });
 $('.close').click(function () {
     $('.port, .gallery ul').removeClass('item_open');
     $('.gallery ul li').removeClass('animate__animated animate__fadeOut');
     $('.gallery ul li').addClass('animate__animated animate__fadeIn');
     return false;
 });

 $(".gallery ul li a").click(function () {
     $('html, body').animate({
         scrollTop: parseInt($("#top").offset().top)
     }, 400);
 });