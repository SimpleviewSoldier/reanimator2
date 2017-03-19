$(document).ready(function(){
	
		var target = $("div.outer");
		
		$(target).hover(function(){
				var direction = $(this).entry({ e : event });
				var overlay = $(this).find("div.inner");
				
				switch(direction){
						case "up":
						$(overlay).css("top", "-100%");
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
