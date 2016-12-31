$(function(){
	//	初始化
	$(".page2 .pic").eq(0).addClass("curr");
	$(".page2 .pic").eq(1).addClass("next");
	//	第一屏事件
	$(".page1")[0].addEventListener('touchstart',function(e){
		e.preventDefault();
		var touch = e.touches[0];
		startPosition = {
			y: touch.pageY
		}
		console.log("start");
	})
	$(".page1")[0].addEventListener('touchmove',function(e){
		e.preventDefault();
		var touch = e.touches[0];
		endPosition = {
			y: touch.pageY
		}
		deltaY = endPosition.y - startPosition.y;
	})
	$(".page1")[0].addEventListener('touchend',function(e){
		e.preventDefault();
		MdeltaY = Math.abs(deltaY);
		if((deltaY<0)&&(MdeltaY>50)){
			$("html,body").animate({scrollTop:$(".page2").offset().top},1000);
			setTimeout(function(){
				$(".rightBtn").fadeIn(1000);
				$(".blessing").fadeIn(1000);
			},1000)
			
		}
	})
	//	第二屏事件
	var nextTop = $(".page2 .curr").height()-10;
	$('.page2 .pic').each(function(){
		var currIndex = $(".page2 .curr").index();
		var thisIndex = $(this).index();
		var thisTop = nextTop + (thisIndex-currIndex-1)*100;
		$(this).css('top',thisTop);
	})
	$(".page2 .curr").css("top","0");
	$(".page2 .next").css('top',nextTop);
	
	var pics = document.querySelectorAll(".page2 .pic");
	console.log(pics);
	for(var i=0;i<pics.length;i++){
		pics[i].addEventListener('touchstart', function (e) {
			e.preventDefault();
	        var touch = e.touches[0];
	        startPosition = {
	            y: touch.pageY
	        }
	        console.log("start");
	    },true);
	    pics[i].addEventListener('touchmove',function(e){
	    	e.preventDefault();
	    	var touch = e.touches[0];
	    	endPosition = {
	    		y: touch.pageY
	    	}
	    	deltaY = endPosition.y - startPosition.y;
	    	 console.log("move");
	    },true)
	    pics[i].addEventListener('touchend',function(e){
	    	e.preventDefault();
	    	 console.log("end");
	    	MdeltaY = Math.abs(deltaY);
	    	if((deltaY<0)&&(MdeltaY>50)){
				if($(this).hasClass("curr")){
					$(this).next().next().addClass("next").siblings().removeClass("next");
					$(this).next().addClass("curr").removeClass("next").siblings().removeClass("curr");
				}else{
					$(this).next().addClass("next").siblings().removeClass("next");
					$(this).addClass("curr").removeClass("next").siblings().removeClass("curr");
				}
				
				var nextTop = $(".page2 .curr").height()-10;

				$('.page2 .pic').each(function(){
					var currIndex = $(".page2 .curr").index();
					var thisIndex = $(this).index();
					var thisTops = (thisIndex-currIndex)*100;
					var thisTopx = nextTop + (thisIndex-currIndex-1)*100;
					
					if(thisIndex>currIndex){
						$(this).animate({
							top:thisTopx
						},"slow")
					}else if(thisIndex<currIndex){
						$(this).animate({
							top: thisTops
						},"slow")
					}
						
				})
				$(".page2 .curr").animate({
					top: 0
				},"slow");
				$(".page2 .next").animate({
					top: nextTop
				},"slow")
				
			}
	    	if((deltaY>0)&&(MdeltaY>50)){
	    		$('.page2 .pic').eq(0).addClass("curr").siblings().removeClass("curr");
				$('.page2 .pic').eq(0).next().addClass("next").siblings().removeClass("next");
				
				var nextTop = $(".page2 .curr").height()-10;
				$('.page2 .pic').each(function(){
					var currIndex = $(".page2 .curr").index();
					var thisIndex = $(this).index();
					var thisTop = nextTop + (thisIndex-currIndex-1)*100;
					$(this).stop().animate({
						top:thisTop
					},"slow");
					
					
				})
				$(".page2 .curr").stop().animate({
					top: 0
				},"slow");
				$(".page2 .next").stop().animate({
					top: nextTop
				},"slow");
			}
	    	
	    },true)
	    
	}
	//	右侧按钮点击
	$(".rightBtn .switch").click(function(){
		$(this).fadeOut(1000);
		setTimeout(function(){
			$(".translucence").fadeIn(500);
			$(".rightBtn nav .a1").removeClass("Animation2");
			$(".rightBtn nav .a2").removeClass("Animation2");
			$(".rightBtn nav .a3").removeClass("Animation2");
			$(".rightBtn nav .a1").addClass("Animation");
			$(".rightBtn nav .a2").addClass("Animation");
			$(".rightBtn nav .a3").addClass("Animation");
			$(".rightBtn").css("width","5.25rem");
			$(".rightBtn .btns .close_btn").css("top","6.75rem");
			$(".rightBtn .btns .close_btn").fadeIn(3000);
		},1001)
		
	})
	//	右侧按钮点击关闭
	$(".rightBtn .btns .close_btn").click(function(){
		$(".translucence").fadeOut(3000);
		$(".rightBtn nav .a1").removeClass("Animation");
		$(".rightBtn nav .a2").removeClass("Animation");
		$(".rightBtn nav .a3").removeClass("Animation");
		$(".rightBtn nav .a1").addClass("Animation2");
		$(".rightBtn nav .a2").addClass("Animation2");
		$(".rightBtn nav .a3").addClass("Animation2");
		$(".rightBtn").css("width","auto");
		$(".rightBtn .btns .close_btn").fadeOut(500);
		setTimeout(function(){
			$(".rightBtn .switch").fadeIn(1000);
		},1800)
	})
	//	点击祝福按钮
	$(".blessing").click(function(){
		$(this).addClass("Animation");
		setTimeout(function(){
			$(".blessing2").fadeIn(800);
		},500)
	})
	//	点赞
//	$(".praise")[0].addEventListener('onclick',function(event){
//		event.stopPropagation();
//		console.log("praise");
//		$(this).find("img").attr("src","images/icon_03_07.png");
//		var num = $(this).find("span").html();
//		num++;
//		$(this).find("span").html(num);
//	})

	
	
	
})
