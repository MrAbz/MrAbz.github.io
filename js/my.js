$(window).scroll(function() {

    if ($(this).scrollTop()>1500)
     {
        $('.timeline-wrap').fadeOut();
        $('.timeline').fadeOut();
        $('.timeline-badge').fadeOut();
        $('.timeline-panel').fadeOut();
        $('.timeline-heading').fadeOut();
     }
    else
     {
       $('.timeline-wrap').fadeIn();
       $('.timeline').fadeIn();
       $('.timeline-badge').fadeIn();
       $('.timeline-panel').fadeIn();
       $('.timeline-heading').fadeIn();
     }
 });
