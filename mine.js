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
			$(panel).addClass("animate");
			setTimeout(function(){
				requestAnimationFrame(function(){
				$(panel).css({
					"transform" : "",
					"pointer-events" : "all"
				});
			});
			}, 10);
			break;
		}
	}, function(event){
		var direction = $(this).entry({e : event});
	});
});
