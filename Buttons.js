$(document).ready(function(){
	$("#catLeft").click(function(){
		$("#cat").animate({left: '-=105px'});
	});
	$("#catRight").click(function(){
		$("#cat").animate({left: '+=105px'});
	});
	$("#catUp").click(function(){
		$("#cat").animate({top: '-=105px'});
	});
	$("#catDown").click(function(){
		$("#cat").animate({top: '+=105px'});
	});
	$("#dogLeft").click(function(){
		$("#dog").animate({left: '-=105px'});
	});
	$("#dogRight").click(function(){
		$("#dog").animate({left: '+=105px'});
	});
	$("#dogUp").click(function(){
		$("#dog").animate({top: '-=105px'});
	});
	$("#dogDown").click(function(){
		$("#dog").animate({top: '+=105px'});
	});
});