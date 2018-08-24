// active menu items
jQuery(window).scroll(function(){
         let $sections = $('section');
	$sections.each(function(i,el){
        let top  = $(el).offset().top-100;
        let bottom = top +$(el).height();
        let scroll = $(window).scrollTop();
        let id = $(el).attr('id');
    	if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
			$('a[href="#'+id+'"]').addClass('active');

        }
    })
 });

$("nav").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 600);
    });

// brger menu action

$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn-active');
    $('.main-menu').toggleClass('main-menu-active');
});

$('.smooth').on('click', function(e) {
    e.preventDefault();
    $('.menu-btn').toggleClass('menu-btn-active');
    $('.main-menu').toggleClass('main-menu-active');
});