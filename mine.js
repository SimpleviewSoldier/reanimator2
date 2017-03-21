$(document).ready(function(){
	var target = $("div.outer");

	$(target).hover(function(event){
		var direction = $(this).entry({e : event});
		var panel = $(this).find("div.inner");
		switch (direction) {
			case "up":
			$(panel).css("top", "-100%");
			$(panel).addClass("animate opac");
			$(panel).on("click", function(){
				requestAnimationFrame(function(){
					$(panel).css("top", "0");
					console.log("GOOOOOO");
				});
			});
			$(panel).click();
			break;
		}
	}, function(event){
		var direction = $(this).entry({e : event});
	});
});
