(function($) {
	"use strict"; // Start of use strict

	/* Logo Lettering */
	var logo_rotate = $("header .wed_logo_animation").attr('data-rotate');
	if (logo_rotate!='') {
		$("header .wed_logo_animation").addClass('wed_logo_rotate_'+logo_rotate);
	}

	$("header .wed_logo_animation").lettering();
	$("header .wed_logo_animation span").each(function(){
	 	var min = 0;
	 	var max = 50;
	 	var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
	 	$(this).css('transition-delay', '0.'+randomNumber+'s');
	 });


// Particles
	if ($('.wed_particles').length>0) {
		$('.wed_particles').particleground( {
			   dotColor: '#fff',
		    lineColor: '#fff',
		    particleRadius: '3',
		    lineWidth: '0.5'

			});
		};
	/*Firefly*/
	if ($('.jqueryFireFly').length>0) {
		$('.jqueryFireFly').each(function(){
			var total = $(this).attr('data-total');
			var minPixel = $(this).attr('data-minPixel');
			var maxPixel = $(this).attr('data-maxPixel');
			$.firefly({
			  minPixel: minPixel,
       	maxPixel: maxPixel,
				color: 'none',
				total : total,
				twinkle: 0.9,
				on:'.wed_firefly'
			});
		});

	};
	/*Youtube Player*/

	if ($('#bgndVideo').length>0) {
			$('#bgndVideo').YTPlayer();
		};


	/*CountTo*/
	$('.wed_timer').appear(function() {
        var e = $(this);
        e.countTo({
            from: 0,
            to: e.html(),
            speed: 1300,
            refreshInterval: 60
        })
    })
    $('.date_picker').datepicker();

    /*RSVP Form*/
    $(".wed_form").validate({
	  submitHandler: function(form) {
	  	var type = $(form).attr('id');
	    send_form(type);
		return false;
	  }
	 });

	function send_form(type){
	  var arr = [];
	  $("#"+type+" .form-control").each(function(){

	          var element = $(this).attr('name');
	          var value = $(this).val();
	          $(this).css({border:"1px solid #c4c4c4"});
	          if($(this).prop('required') && value =="") {
	                  $(this).css({border:"2px solid red"});
	                  $(this).focus();
	                  return false;
	          }
	          if (!value == '') {
	                  arr.push('&'+element+'='+value);
	          }
	  })


	  var dataString = (arr.join (' '));
	  $.ajax({
	          method: "POST",
	          url: "https://formspree.io/bublybexta@gmail.com",
	          data: dataString,
	          dataType: "json",
	          success: function() {
	                  $("#"+type).html("<h3 id='form_send_message'>Yay! We can't wait to see you!!!</h3>", 1500);
	          }
	  });


	}

    /*Gallery Lightbox*/
	$('.lightbox').magnificPopup({
	  type: 'image',
	  gallery:{
	    enabled:true
	  }
	});
	$('.video').magnificPopup({
	  type: 'iframe',
	  iframe: {
		  markup: '<div class="mfp-iframe-scaler">'+
		            '<div class="mfp-close"></div>'+
		            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
		          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

		  patterns: {
		    youtube: {
		      index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

		      id: 'v=', // String that splits URL in a two parts, second part should be %id%
		      // Or null - full URL will be returned
		      // Or a function that should return %id%, for example:
		      // id: function(url) { return 'parsed id'; }

		      src: 'http://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
		    },
		    vimeo: {
		      index: 'vimeo.com/',
		      id: '/',
		      src: 'http://player.vimeo.com/video/%id%?autoplay=1'
		    },
		    gmaps: {
		      index: '//maps.google.',
		      src: '%id%&output=embed'
		    }

		    // you may add here more sources

		  },

		  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
		}

	});

	/*OWL Intro Slider*/
	$(".wed_slider_carousel").owlCarousel({
 		navigation : true,
 		responsive: true,
 		responsiveRefreshRate : 200,
 		responsiveBaseElement:window,
 		slideSpeed : 200,
 		addClassActive:true,
		paginationSpeed : 200,
		rewindSpeed : 200,
		items:1,
		autoPlay : false,
		touchDrag:false,
		singleItem:true,
		transitionStyle: 'fade',
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});

    /*OWL Team*/
	$(".wed_team_slider").owlCarousel({
 		navigation : true,
 		responsive: true,
 		responsiveRefreshRate : 600,
 		responsiveBaseElement:window,
 		slideSpeed : 1500,
 		addClassActive:true,
		paginationSpeed : 700,
		rewindSpeed : 3000,
		items:3,
		itemsTablet:[1000,2],
		itemsMobile : [569,1],
		itemsDesktop:3,
		autoPlay : true,
		touchDrag:false,
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});
    /*OWL Team*/
	$(".wed_services_slider").owlCarousel({
 		navigation : true,
 		responsive: true,
 		responsiveRefreshRate : 400,
 		responsiveBaseElement:window,
 		slideSpeed : 400,
 		addClassActive:true,
		paginationSpeed : 900,
		rewindSpeed : 400,
		transitionStyle : "goDown",
		items:1,
		autoPlay : true,
		singleItem:true,
		autoHeight : true,
		touchDrag:false,
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});
	/* OWL Team Single*/
	$(".wed_team_slider_single").owlCarousel({
 		navigation : true,
 		responsive: true,
 		responsiveRefreshRate : 200,
 		responsiveBaseElement:window,
 		slideSpeed : 200,
 		addClassActive:true,
		paginationSpeed : 200,
		rewindSpeed : 200,
		items:1,
		autoPlay : true,
		singleItem:true,
		autoHeight : true,
		touchDrag:false,
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});

	/*OWL Carousel in Shop Item*/

		$(".wed_shop_item_slider").owlCarousel({
	 		navigation : true,
	 		responsive: true,
	 		responsiveRefreshRate : 200,
	 		responsiveBaseElement:window,
	 		slideSpeed : 200,
	 		addClassActive:true,
			paginationSpeed : 200,
			rewindSpeed : 200,
			singleItem:true,
			autoPlay : false,
			touchDrag:false,
			navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
		});

	/*OWL Slide Gallery*/

    /*OWL Slide Gallery*/
	$(".wed_slide_gallery").owlCarousel({
 		navigation : true,
 		responsive: true,
 		responsiveRefreshRate : 600,
 		responsiveBaseElement:window,
 		slideSpeed : 1500,
 		addClassActive:true,
		paginationSpeed : 700,
		rewindSpeed : 3000,
		items:3,
		itemsTablet:[1000,2],
		itemsMobile : [569,1],
		itemsDesktop:3,
		autoPlay : true,
		touchDrag:false,
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});


    // Twitter Feed
       $('.tweets-feed').each(function(index) {
           jQuery(this).attr('id', 'tweets-' + index);
       }).each(function(index) {

           var TweetConfig = {
               "id": jQuery('#tweets-' + index).attr('data-widget-id'),
               "domId": '',
               "maxTweets": 1,
               "enableLinks": true,
               "showUser": true,
               "showTime": true,
               "dateFunction": '',
               "showRetweet": false,
               "customCallback": handleTweets
           };
           function handleTweets(tweets) {
               var x = tweets.length;
               var n = 0;
               var element = document.getElementById('tweets-' + index);
               var html = '<ul class="slides">';
               while (n < x) {
                   html += '<li>' + tweets[n] + '</li>';
                   n++;
               }
               html += '</ul>';
               element.innerHTML = html;
               return html;
           }
           twitterFetcher.fetch(TweetConfig);
       });


	/* Section Background */
	$('.wed_image_bck').each(function(){
		var image = $(this).attr('data-image');
		var gradient = $(this).attr('data-gradient');
		var text = $(this).attr('data-txt-color');
		var color = $(this).attr('data-color');
		var border = $(this).attr('data-border');
		var blend = $(this).attr('data-blend');
		var opacity = $(this).attr('data-opacity');
		var position = $(this).attr('data-position');
		var height = $(this).attr('data-height');
		if (image){
			$(this).css('background-image', 'url('+image+')');
		}
		if (gradient){
			$(this).css('background-image', gradient);
		}
		if (text){
			$(this).css('color', text);
		}
		if (color){
			$(this).css('background-color', color);
		}
		if (border){
			$(this).css('border-color', border);
		}
		if (blend){
			$(this).css('background-blend-mode', blend);
		}
		if (position){
			$(this).css('background-position', position);
		}
		if (opacity){
			$(this).css('opacity', opacity);
		}
		if (height){
			$(this).css('height', height);
		}

	});


	/* Over */
	$('.wed_over, .wed_head_bck').each(function(){
		var color = $(this).attr('data-color');
		var image = $(this).attr('data-image');
		var opacity = $(this).attr('data-opacity');
		var blend = $(this).attr('data-blend');
		if (color){
			$(this).css('background-color', color);
		}
		if (image){
			$(this).css('background-image', 'url('+image+')');
		}
		if (opacity){
			$(this).css('opacity', opacity);
		}
		if (blend){
			$(this).css('mix-blend-mode', blend);
		}
	});

	/* Map */
	$('.wed_map_over').on("click", function(e){
		$(this).parents('.wed_section_outter, .wed_inside_map').toggleClass('active_map');
	});

	/* Mobile Menu */
	$('.wed_top_menu_mobile_link').on("click", function(e){
		$(this).next('.wed_top_menu_cont').fadeToggle();
		$(this).parents('.wed_light_nav').toggleClass('active');
	});
 	$('.wed_header_search').on({
		mouseenter:function(){
			$(this).find('.wed_header_search_cont, .wed_header_basket_cont').stop().fadeToggle();
		},mouseleave:function(){
			$(this).find('.wed_header_search_cont, .wed_header_basket_cont').stop().fadeToggle();
		}
	});
	// Open Close Music
    $('.wed_music_content').on('click',function(e){
        e.preventDefault();
        $(this).next('.wed_iframe').toggleClass('active');
    });


	/*Scroll Effect*/

	$('.wed_go, .wed_top_menu_cont a').on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 2300);
		e.preventDefault();
	});



	/*Animation Block Delay*/

	$('div[data-animation=animation_blocks]').each(function(){
	var i = 0;
		$(this).find('.wed_icon_box, .skill-bar-content, .wed_anim_box, .wed_bd, .wed_story_txt, .wed_portfolio_item_cont').each(function(){
			$(this).css('transition-delay','0.'+i+'s');
			i++;
		})
	})

	/*Increase-Decrease*/
    $('.increase-qty').on("click", function(e){
    	var qtya = $(this).parents('.add-to-cart').find('.qty').val();
    	var qtyb = qtya * 1 + 1;
    	$(this).parents('.add-to-cart').find('.qty').val(qtyb);
		e.preventDefault();
	});
	$('.decrease-qty').on("click", function(e){
    	var qtya = $(this).parents('.add-to-cart').find('.qty').val();
    	var qtyb = qtya * 1 - 1;
    	if (qtyb < 1) {
            qtyb = 1;
        }
    	$(this).parents('.add-to-cart').find('.qty').val(qtyb);
		e.preventDefault();
	});

	/* Shortcode Nav */
	var top_offset = $('header').height() - 1;

	$('#nav-sidebar, .wed_top_menu_cont').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 700,
		scrollOffset: top_offset,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
	});



	/* Bootstrap */
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();

	/* Anchor Scroll */
	$(window).scroll(function(){
		if ($(window).scrollTop() > 100) {
			$(".wed_logo").addClass('active');
			$('body').addClass('wed_first_step');

		}
		else {
			$('body').removeClass('wed_first_step');
			$(".wed_logo").removeClass('active');
		}
		if ($(window).scrollTop() > 500) {
			$('body').addClass('wed_second_step');
		}
		else {
			$('body').removeClass('wed_second_step');
		}
		if ($(window).scrollTop() > 800) {
			$('body').addClass('wed_third_step');
		}
		else {
			$('body').removeClass('wed_third_step');
		}
	});

	/* Fixed for Parallax */
	$(".wed_fixed").css("background-attachment","fixed");


	/* Submenu */
 	$('.wed_parent').on({
		mouseenter:function(){
			$(this).find('ul').stop().fadeIn(300);
		},mouseleave:function(){
			$(this).find('ul').stop().fadeOut(300);
		}
	});

 	/* Mobile Menu */

	$('.wed_mobile_menu_content .wed_parent').on("click", function(e){
		$(this).find('ul').slideToggle(300);
	});
	$('.wed_mobile_menu').on("click", function(e){
		$(this).toggleClass('active');
		$('.wed_mobile_menu_hor').toggleClass('active');
	});
	$('.wed_header_search span').on("click", function(e){
		$(this).next('.wed_header_search_cont').fadeToggle();
	});

	/* Block Autheight */
	if( !device.tablet() && !device.mobile() ) {
		$('.wed_auto_height').each(function(){
			setEqualHeight($(this).find('div[class^="col"]'));
		});
	}
	if( device.tablet() && device.landscape() ) {
		$('.wed_auto_height').each(function(){
			setEqualHeight($(this).find('div[class^="col"]'));
		});
	}

	$(window).resize(function() {
		if( !device.tablet() && !device.mobile() ) {
			$('.wed_auto_height').each(function(){
				setEqualHeight($(this).find('div[class^="col"]'));
			});
		}
		if( device.tablet() && device.landscape() ) {
			$('.wed_auto_height').each(function(){
				setEqualHeight($(this).find('div[class^="col"]'));
			});
		}
	});

	/*Boxes AutoHeight*/
	function setEqualHeight(columns)
	{
		var tallestcolumn = 0;
		columns.each(
			function()
			{
				$(this).css('height','auto');
				var currentHeight = $(this).height();
				if(currentHeight > tallestcolumn)
					{
					tallestcolumn = currentHeight;
					}
			}
		);
	columns.height(tallestcolumn);
	}

	$(window).load(function(){

	// Page loader

    $("body").imagesLoaded(function(){
        $(".wed_page_loader div").fadeOut();
    	$(".wed_page_loader").delay(200).fadeOut("slow");
    });


	/*SkroolR*/
	if( !device.tablet() && !device.mobile() ) {
		var s = skrollr.init({
			forceHeight: false,
		});
		$(window).stellar({
		 	horizontalScrolling: false,
			responsive: true,
	 	});
	}

	/*Countdown*/
	$('.wed_countdown').each(function(){
		var year = $(this).attr('data-year');
		var month = $(this).attr('data-month');
		var day = $(this).attr('data-day');
		$(this).countdown({until: new Date(year,month-1,day)});

	});
 	/*Masonry*/

	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
	    columnWidth: '.grid-item'
	  }
	});
	$grid.imagesLoaded().progress( function() {
	  $grid.isotope('layout');
	});
	$(window).resize(function(){
	  $grid.isotope('layout');
	});



	$('.masonry').masonry({
		itemSelector: '.masonry-item',
	});

	$('.filter-button-group').on( 'click', 'a', function() {
	  $(this).parents('.filter-button-group').find('a').removeClass('active');
	  $(this).addClass('active');
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});


});


})(jQuery);
