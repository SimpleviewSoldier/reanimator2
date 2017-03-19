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
			}, 5);
			setTimeout(function(){
				$(overlay).css("top", "0");
			}, 5);
			break;
			case "down":
			$(overlay).css("top", "100%");
			setTimeout(function(){
				$(overlay).addClass("animate opac");
			}, 5);
			setTimeout(function(){
				$(overlay).css("top", "0");
			}, 5);
			break;
			case "left":
			$(overlay).css("left", "-100%");
			setTimeout(function(){
				$(overlay).addClass("animate opac");
			}, 5);
			setTimeout(function(){
				$(overlay).css("left", "0");
			}, 5);
			break;
			case "right":
			$(overlay).css("left", "100%");
			setTimeout(function(){
				$(overlay).addClass("animate opac");
			}, 5);
			setTimeout(function(){
				$(overlay).css("left", "0");
			}, 5);
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
				$(overlay).css("top", "0");
			}, 205)
			break;
			case "down":
			$(overlay).css("top", "100%");
			setTimeout(function(){
				$(overlay).removeClass("animate opac");
				$(overlay).css("top", "0");
			}, 205);
			break;
			case "left":
			$(overlay).css("left", "-100%");
			setTimeout(function(){
				$(overlay).removeClass("animate opac");
				$(overlay).css("left", "0");
			}, 205);
			break;
			case "right":
			$(overlay).css("left", "100%");
			setTimeout(function(){
				$(overlay).removeClass("animate opac");
				$(overlay).css("left", "0");
			}, 205);
			break;
		}

	});
});
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
			}, 5);
			setTimeout(function(){
				$(overlay).css("top", "0");
			}, 5);
			break;
			case "down":
			$(overlay).css("top", "100%");
			setTimeout(function(){
				$(overlay).addClass("animate opac");
			}, 5);
			setTimeout(function(){
				$(overlay).css("top", "0");
			}, 5);
			break;
			case "left":
			$(overlay).css("left", "-100%");
			setTimeout(function(){
				$(overlay).addClass("animate opac");
			}, 5);
			setTimeout(function(){
				$(overlay).css("left", "0");
			}, 5);
			break;
			case "right":
			$(overlay).css("left", "100%");
			setTimeout(function(){
				$(overlay).addClass("animate opac");
			}, 5);
			setTimeout(function(){
				$(overlay).css("left", "0");
			}, 5);
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
				$(overlay).css("top", "0");
			}, 205)
			break;
			case "down":
			$(overlay).css("top", "100%");
			setTimeout(function(){
				$(overlay).removeClass("animate opac");
				$(overlay).css("top", "0");
			}, 205);
			break;
			case "left":
			$(overlay).css("left", "-100%");
			setTimeout(function(){
				$(overlay).removeClass("animate opac");
				$(overlay).css("left", "0");
			}, 205);
			break;
			case "right":
			$(overlay).css("left", "100%");
			setTimeout(function(){
				$(overlay).removeClass("animate opac");
				$(overlay).css("left", "0");
			}, 205);
			break;
		}

	});
});
