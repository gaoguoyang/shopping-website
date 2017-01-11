//banner轮播
var mySwiper = new Swiper('.banner.swiper-container',{
		pagination : '.swiper-pagination',
		loop:true,
		autoplay: 2000
	})


//第三个轮播
var mySwiper2 = new Swiper('.tlimit.swiper-container',{
		
		slidesPerView : 3,
		spaceBetween : 12,
		loop:true,

		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next'

	})



//第二个轮播

var mySwiper3 = new Swiper('.new.swiper-container',{
		
		slidesPerView : 3,
		spaceBetween : 12,
		loop:true,

		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next'

	})






$(function(){
	//限时批发tab切换
	$(".tlimit_title .left").click(function(){
		$(".tlimit_title .left img").attr("src","../images/home/a_53.png");
		$(".tlimit_title .left span").css("color","#119200");
		$(".tlimit_title .left .times").css("color","#3d3d3d");
		$(".tlimit_title .left .times .time").css("border","1px solid #3d3d3d");
		
		$(".tlimit_title .right img").attr("src","../images/home/a_56.png");
		$(".tlimit_title .right span").css("color"," #C2C2C2");
		$(".tlimit_title .right .times").css("color","#C2C2C2");
		$(".tlimit_title .right .times .time").css("border","1px solid #C2C2C2");
		$(".time_limit .tlimit_content").show();
		$(".time_limit .tlimit_content2").hide();
		var mySwiper3 = new Swiper('.new.swiper-container',{
		
			slidesPerView : 3,
			spaceBetween : 12,
			loop:true,
	
			prevButton:'.swiper-button-prev',
			nextButton:'.swiper-button-next'
	
		})
	});
	$(".tlimit_title .right").click(function(){
		$(".tlimit_title .left img").attr("src","../images/home/a_56.png");
		$(".tlimit_title .left span").css("color"," #C2C2C2");
		$(".tlimit_title .left .times").css("color","#C2C2C2");
		$(".tlimit_title .left .times .time").css("border","1px solid #C2C2C2");
		
		$(".tlimit_title .right img").attr("src","../images/home/a_53.png");
		$(".tlimit_title .right span").css("color","#119200");
		$(".tlimit_title .right .times").css("color","#3d3d3d");
		$(".tlimit_title .right .times .time").css("border","1px solid #3d3d3d");
		$(".time_limit .tlimit_content2").show();
		$(".time_limit .tlimit_content").hide();
		var mySwiper4 = new Swiper('.tlimit2.swiper-container',{
		
			slidesPerView : 3,
			spaceBetween : 12,
			loop:true,
	
			prevButton:'.swiper-button-prev',
			nextButton:'.swiper-button-next'
	
		})
		
	})
	//限时批发tab 切换结束
	
//	var oDays=document.getElementById("days");
	var oHours=document.getElementById("hours");
	var oMin=document.getElementById("min");
	var oSecs = document.getElementById("secs");
	var oHours2=document.getElementById("hours2");
	var oMin2=document.getElementById("min2");
	var oSecs2 = document.getElementById("secs2");
	
	function time(){
		var curr=new Date();
		var end= new Date(2017,1,1,3,10,00);
		var times = end - curr;
//		var days = parseInt( times / 1000 / 60 / 60 / 24 );
		var hours = parseInt( times / 1000 / 60 / 60 % 24 );
		var min = parseInt( times / 1000 / 60 % 60 );
		var secs = parseInt( times / 1000 % 60 );
//		oDays.innerHTML = days;
		oHours.innerHTML = hours;
		oMin.innerHTML = min;
		oSecs.innerHTML = secs;
		
	}
	function time2(){
		var curr=new Date();
		var end= new Date(2017,1,1,12,02,00);
		var times = end - curr;
//		var days = parseInt( times / 1000 / 60 / 60 / 24 );
		var hours2 = parseInt( times / 1000 / 60 / 60 % 24 );
		var min2 = parseInt( times / 1000 / 60 % 60 );
		var secs2 = parseInt( times / 1000 % 60 );
//		oDays.innerHTML = days;
		oHours2.innerHTML = hours2;
		oMin2.innerHTML = min2;
		oSecs2.innerHTML = secs2;
		
	}
	
	time();
	time2();
	
	setInterval(function(){
		time();
		time2();
	},1000)

	
})
	