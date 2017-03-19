$(document).ready(function(){
	
		var target = $("div.outer");
		
		
	
	$.fn.setPosition = function (element, position, value) {
    $(element).css(position, value);
		return this;
};
		
		$(target).hover(function(){
				var direction = $(this).entry({ e : event });
				let overlay = $(this).find("div.inner");
				
				switch(direction){
						case "up":
						$(overlay).setPosition("top", "-100%");
						$(overlay).addClass("animate opac");
						break;
					}
			}, function(){
				var direction = $(this).entry({ e : event });
				let overlay = $(this).find("div.inner");
				
				switch(direction){
						case "up":
						console.log("Exit "+direction);
						
					}
				
				});
	});
