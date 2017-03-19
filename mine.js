$(document).ready(function(){
	
		var target = $("div.outer");
		
		function setPosition(element, position, value){
				$(element).css(position, value);
			}
		
		$(target).hover(function(){
				var direction = $(this).entry({ e : event });
				let overlay = $(this).find("div.inner");
				
				switch(direction){
						case "up":
						console.log("Enter "+direction);
						setPosition(overlay, "top", "-100%");
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
