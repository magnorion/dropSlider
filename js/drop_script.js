// Drop Slider: A little slider with jQuery!
// Created by: Lucas Dias Lopes.
// Email: lucas_front@yahoo.com.br
// Take a look in some others projects: http://lucasfront.wordpress.com/

(function($){
	'use strict';
	$(document).ready(function(){
		$.fn.dropSlide = function(width,height){
			//The image container
			var container = this;

			// Option from user
			var options = {
				w:width,
				h:height,
			};

			// Default options
			var default_options = {
				w:450,
				h:200,
			};

			if(typeof options.w == 'undefined'){
				options.w = default_options.w;
			}
			if(typeof options.h == 'undefined'){
				options.h = default_options.h;
			}
			
			//set height and width to a element that contain all the images!
			this.css({
				width: options.w+'px',
				height: options.h+'px'
			}).prop('class','drop-slide-container');

			// Add the class for each image inside the div container and count all the images
			var img_count = 0;
			this.find('img').each(function(){
				$(this).addClass('img-slide select-image-'+img_count+' image-unselected');
				++img_count;
			});
			this.find('img').first().removeClass('image-selected').addClass('image-selected');;

			// Create a div for pagination
			var pag_element = $('<div>');
			pag_element.prop('id','pagination');
			this.append(pag_element);

			// Create the elements for pagination ( the 'ticks' :D )
			$('#pagination').append('<ul>');
			var index = 0;
			for(index = 0; index < img_count; ++index){
				var pag_child = $('<li>');
				pag_child.addClass('select-image-'+index+' drop-unselected pag-child');
				$('#pagination ul').append(pag_child);
				$('#pagination ul li').first().addClass('drop-selected');
			}

			//Create the function for animation!
			$('.pag-child').on('click',function(){
				// Get the element/tick
				var self = $(this);
				var get_element = self.attr('class').split(' ');
				var element_selected = get_element[0];
				$(container).find('img').each(function(){
					$(this).stop().animate({
						opacity:0,
						marginTop:700
					},1000,function(){
						$(this).removeClass('image-selected').addClass('image-unselected').css({marginTop:0});
					});
				});
				$(container).find('img.'+element_selected).stop().animate({
					opacity:1,
					marginTop:0
				},1000,function(){
					$(this).removeClass('image-unselected').addClass('image-selected');
				});
				$('.pag-child').each(function(){
					$(this).removeClass('drop-selected').addClass('drop-unselected');
				})
				self.removeClass('drop-unselected').addClass('drop-selected');
			});

			// The 'Hover' animation :)
			container.on({
				mouseenter:function(){
					$('#pagination').stop().animate({bottom:'0%'},600);
				},
				mouseleave:function(){
					$('#pagination').stop().animate({bottom:'-15%'},600);
				}
			});

			return this;
		}
	});
})(jQuery);