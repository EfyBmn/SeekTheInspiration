/*SHOW AND HIDE NAVBAR*/

$(document).ready(function () {
    
    'use strict';
    $(window).scroll(function (){
        'use strict';
        if ($(window).scrollTop() <100)
            {
                $('.navbar').css({
                    'margin-top': '-100px',
                    'opacity': '0'
                });
                
                $('.navbar-default').css({
                    'background-color':'rgbargba(0,0,0,0)'
                });
            } else {
                $('.navbar').css({
                    'margin-top':'0px',
                    'opacity':'1'
                });
                
                
                $('.navbar-default').css({
                    'background-color': 'rgba(0,0,0,0.7)',
                    'border-color':' #444'
           
                });
                
                $('.navbar-nav > li > a').css({
                    'padding-top':'15px'
                });
            };
    });
});


//ADD SMOOTH SCROLLING

//ADD SMOOTH SCROLLING

$(document).ready(function (){
    'use strict';
    $(document).ready(function () {
    
    $('.nav-item, #scroll-top, .btn-join, .btn-download').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
    
    
});

});

//ACTIVE MENU ITEM

$(document).ready(function(){
    'use strict';
    $('.navbar-nav  li  a ').click(function(){
        'use strict';
         $('.navbar-nav  li  a').parent().removeClass("active");
        $(this).parent().addClass("active");
        
    });
});

//HIGHLIGHT MENU ITEM ON SCROLL

$(document).ready(function() {
    
    'use strict';
    
    $(window).scroll( function() {
        
        'use strict';
        
        $("section").each(function()  {
            
            'use strict';
            
            var bb = $(this).attr("id");  // ABOUT, CONTACT, DOWNLOAD
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 90;
            
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
             
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
           
            } else {
                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
                
            }
            
            
        });
    
    
    });
    
    
});

//AUTO PADDING

$(document).ready(function(){
    'use strict';
    
    setInterval(function(){
    
    var windowHeight=$(window).height();
    var containerHeight=$(".header-container").height();
    
    var padTop=windowHeight-containerHeight;
    
    $(".header-container").css({
        'padding-top':Math.round(padTop/2)+'px',
        'padding-bottom':Math.round(padTop/2)+'px'
    });
    },10)
});


//ADD ANIMATION/ INITIALIZE WOO//

$(document).ready(function(){
    'use strict';
     new WOW().init();
    
});



