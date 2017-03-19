$(document).ready(function(){
	
		var target = $("div.outer");
		
		$(target).hover(function(){
				var direction = $(this).entry({ e : event });
				var overlay = $(this).find("div.inner");
				
				switch(direction){
						case "up":
						$(overlay).css("top", "-100%");
						setTimeout(function(){
							$(overlay).addClass("animate opac");
						}, 10);
						setTimeout(function(){
							$(overlay).css("top", "0");
						}, 10);
						break;
					}
			}, function(){
				var direction = $(this).entry({ e : event });
				let overlay = $(this).find("div.inner");
				
				switch(direction){
						case "up":
						$(overlay).css("top", "-100%");
						setTimeout(function(){
							$(overlay).removeClass("animate opac");
						}, 205);
					}
				
				});
	});
