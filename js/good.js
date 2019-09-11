$(function(){
	$(".n2").click(function(){
		$("#rod1").animate({opacity:"0"});
		$('#rod2').animate({opacity:"1",top:"52.5%"},500);

		$(".n2").css("background-color","#fff");
		$(".n1").css("background-color","transparent");
		$(".n3").css("background-color","transparent");
		$(".n4").css("background-color","transparent");
	});

	$(".n3").click(function(){
		$("#rod2").animate({opacity:"0"});
		$('#rod3').animate({opacity:"1",top:"52.5%"},500);

		$(".n3").css("background-color","#fff");
		$(".n2").css("background-color","transparent");
		$(".n1").css("background-color","transparent");
		$(".n4").css("background-color","transparent");
	});

	$(".n4").click(function(){
		$("#rod3").animate({opacity:"0"});
		$('#rod4').animate({opacity:"1",top:"52.5%"},500);

		$(".n4").css("background-color","#fff");
		$(".n3").css("background-color","transparent");
		$(".n2").css("background-color","transparent");
		$(".n1").css("background-color","transparent");
	});

});