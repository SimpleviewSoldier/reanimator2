$(document).ready(function(){
	alert("hey");
		var target = $("div.outer");
		
		function setPosition(element, position, value){
				$(element).css(position, value);
			}
		
		$(target).hover(function(){
				 var direction = $(this).entry({ e : event });
				let overlay = $(this).find("div.inner");
				
				switch(direction){
						case "up":
						setPosition(overlay, "top", "-100%");
						break;
					}
			});
	});
