$(window).scroll(function() {

    if ($(this).scrollTop()=1469)
     {
        $('.timeline-inverted').fadeIn();
     }
else
     {
       $('.timeline-inverted').fadeOut();
     }
 });
 document.onmousemove = function(e){
 var x = e.pageX;
 var y = e.pageY;
 e.target.title = "X is "+x+" and Y is "+y;
 };
