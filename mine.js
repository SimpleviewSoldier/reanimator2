$(document).ready(function(){
	var target = $("div.outer");

	$(target).hover(function(event){
		var direction = $(this).entry({e : event});
		var panel = $(this).find("div.inner");
		switch (direction) {
			case "up":
			$(panel).css({
				"transform" : "translateY(-100%)",
				"will-change" : "transform",
				"pointer-events" : "none"
			});
			console.log("GO");
			requestAnimationFrame(function(){
				$(panel).addClass("animate");
				$(panel).css({
					"transform" : "",
					"pointer-events" : "all"
				});
			});
		}
	}, function(event){
		var direction = $(this).entry({e : event});
	});
});
