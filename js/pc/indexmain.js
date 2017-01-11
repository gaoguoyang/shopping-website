jQuery(document).ready(function(){

	//////城市二级联动
	var Arr = ["海南","上海","天津","重庆","河北","山西","内蒙古","辽宁","吉林","黑龙江","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","广西","北京","四川","贵州","云南","西藏","陕西","甘肃","宁夏","青海","新疆","香港","澳门","台湾"];

	var html = "";
	for (var i = 0; i < Arr.length; i++) {
		html += '<option value= '+i+' >'+Arr[i]+'</option> ';
	};
	$("#province").html(html);


	var arr = new  Array();
	arr[0 ]="三亚,海口" 
	arr[1 ]="黄浦,卢湾,徐家汇,长宁,静安,普陀,闸北,虹口,杨浦,闵行,宝山,嘉定,浦东,金山,松江,青浦,南汇,奉贤,崇明" 
	arr[2 ]="和平,东丽,河东,西青,河西,津南,南开,北辰,河北,武清,红挢,塘沽,汉沽,大港,宁河,静海,宝坻,蓟县" 
	arr[3 ]="万州,涪陵,渝中,大渡口,江北,沙坪坝,九龙坡,南岸,北碚,万盛,双挢,渝北,巴南,黔江,长寿,綦江,潼南,铜梁,大足,荣昌,壁山,梁平,城口,丰都,垫江,武隆,忠县,开县,云阳,奉节,巫山,巫溪,石柱,秀山,酉阳,彭水,江津,合川,永川,南川" 
	arr[4 ]="石家庄,邯郸,邢台,保定,张家口,承德,廊坊,唐山,秦皇岛,沧州,衡水" 
	arr[5 ]="太原,大同,阳泉,长治,晋城,朔州,吕梁,忻州,晋中,临汾,运城" 
	arr[6 ]="呼和浩特,包头,乌海,赤峰,呼伦贝尔盟,阿拉善盟,哲里木盟,兴安盟,乌兰察布盟,锡林郭勒盟,巴彦淖尔盟,伊克昭盟" 
	arr[7 ]="沈阳,大连,鞍山,抚顺,本溪,丹东,锦州,营口,阜新,辽阳,盘锦,铁岭,朝阳,葫芦岛" 
	arr[8 ]="长春,吉林,四平,辽源,通化,白山,松原,白城,延边" 
	arr[9 ]="哈尔滨,齐齐哈尔,牡丹江,佳木斯,大庆,绥化,鹤岗,鸡西,黑河,双鸭山,伊春,七台河,大兴安岭" 
	arr[10 ]="南京,镇江,苏州,南通,扬州,盐城,徐州,连云港,常州,无锡,宿迁,泰州,淮安" 
	arr[11 ]="杭州,宁波,温州,嘉兴,湖州,绍兴,金华,衢州,舟山,台州,丽水" 
	arr[12 ]="合肥,芜湖,蚌埠,马鞍山,淮北,铜陵,安庆,黄山,滁州,宿州,池州,淮南,巢湖,阜阳,六安,宣城,亳州" 
	arr[13 ]="福州,厦门,莆田,三明,泉州,漳州,南平,龙岩,宁德" 
	arr[14 ]="南昌市,景德镇,九江,鹰潭,萍乡,新馀,赣州,吉安,宜春,抚州,上饶" 
	arr[15 ]="济南,青岛,淄博,枣庄,东营,烟台,潍坊,济宁,泰安,威海,日照,莱芜,临沂,德州,聊城,滨州,菏泽" 
	arr[16 ]="郑州,开封,洛阳,平顶山,安阳,鹤壁,新乡,焦作,濮阳,许昌,漯河,三门峡,南阳,商丘,信阳,周口,驻马店,济源" 
	arr[17 ]="武汉,宜昌,荆州,襄樊,黄石,荆门,黄冈,十堰,恩施,潜江,天门,仙桃,随州,咸宁,孝感,鄂州" 
	arr[18 ]="长沙,常德,株洲,湘潭,衡阳,岳阳,邵阳,益阳,娄底,怀化,郴州,永州,湘西,张家界" 
	arr[19 ]="广州,深圳,珠海,汕头,东莞,中山,佛山,韶关,江门,湛江,茂名,肇庆,惠州,梅州,汕尾,河源,阳江,清远,潮州,揭阳,云浮" 
	arr[20 ]="南宁,柳州,桂林,梧州,北海,防城港,钦州,贵港,玉林,南宁地区,柳州地区,贺州,百色,河池" 
	arr[21 ]="东城,西城,崇文,宣武,朝阳,丰台,石景山,海淀,门头沟,房山,通州,顺义,昌平,大兴,平谷,怀柔,密云,延庆" 
	arr[22 ]="成都,绵阳,德阳,自贡,攀枝花,广元,内江,乐山,南充,宜宾,广安,达川,雅安,眉山,甘孜,凉山,泸州" 
	arr[23 ]="贵阳,六盘水,遵义,安顺,铜仁,黔西南,毕节,黔东南,黔南" 
	arr[24 ]="昆明,大理,曲靖,玉溪,昭通,楚雄,红河,文山,思茅,西双版纳,保山,德宏,丽江,怒江,迪庆,临沧" 
	arr[25 ]="拉萨,日喀则,山南,林芝,昌都,阿里,那曲" 
	arr[26 ]="西安,宝鸡,咸阳,铜川,渭南,延安,榆林,汉中,安康,商洛" 
	arr[27 ]="兰州,嘉峪关,金昌,白银,天水,酒泉,张掖,武威,定西,陇南,平凉,庆阳,临夏,甘南" 
	arr[28 ]="银川,石嘴山,吴忠,固原" 
	arr[29 ]="西宁,海东,海南,海北,黄南,玉树,果洛,海西" 
	arr[30 ]="乌鲁木齐,石河子,克拉玛依,伊犁,巴音郭勒,昌吉,克孜勒苏柯尔克孜,博 尔塔拉,吐鲁番,哈密,喀什,和田,阿克苏" 
	arr[31 ]="香港" 
	arr[32 ]="澳门" 
	arr[33 ]="台北,高雄,台中,台南,屏东,南投,云林,新竹,彰化,苗栗,嘉义,花莲,桃园,宜兰,基隆,台东,金门,马祖,澎湖" 

	$(window).load(function(){
	    var cityArr = arr[0].split(",");
	    for(var i=0;i<cityArr.length;i++){
	        $("#city")[0][i] = new Option(cityArr[i],cityArr[i]);
	    }
	})
    
    $("#province").change(function(){    	
	    var index = $("#province")[0].selectedIndex;
	    var cityArr = arr[index].split(",");   
	    
	    $("#city")[0].length = 0;
	    //将城市数组中的值填充到城市下拉框中
	    for(var i=0;i<cityArr.length;i++){
	        $("#city")[0][i]=new Option(cityArr[i],cityArr[i]);
	    }
    })


    //	我的购物车显示隐藏效果
	$(".hid_shop").css("display","none");	
	$(".shop_cart").hover(function(e){
		e.preventDefault();
		$(".hid_shop").css("display","block");
	},function(e){
		e.preventDefault();
		$(".hid_shop").css("display","none");
	});
	$(".hid_shop").hover(function(e){
		e.preventDefault();
		$(".hid_shop").css("display","block");
	},function(e){
		e.preventDefault();
		$(".hid_shop").css("display","none");
	});
	
	////////bootstrap大图滚动
	$('#myCarousel').carousel({
		//自动2秒播放
		interval : 2000,
	});
	
	/////////全部商品分类里的tab切换
	$('.goodsFa li').hover(function () {
		var thisId = $(this).attr("id");
		$(".tab_div").not($("#confirm" + thisId)).css({ "z-index": "0" ,"display":"none"});
		$(this).addClass("change_nav");
		$("#confirm" + thisId).css({ "z-index": "10","display":"block" });
		$(this).find(".small_mark").hide();
		$(this).find(".small_mark_").show();
	}, function () {
		var thisId = $(this).attr("id");
		$(this).removeClass("change_nav");
		$(".tab_div").css("display","none");
		$(this).find(".small_mark_").hide();
		$(this).find(".small_mark").show();
	});	
	$(".tab_div").hover(function(){
		var thisId = $(this).attr("id");
		var this_li_id = thisId.replace("confirm","");
		$('#'+this_li_id).addClass("change_nav");
		$(this).css({"display":"block"});		
	},function(){
		var thisId = $(this).attr("id");
		var this_li_id = thisId.replace("confirm","");
		$('#'+this_li_id).removeClass("change_nav");
		$(this).css({"display":"none"});	
	});
	
	$(".rightArrow").click(function(){
		$("#goodList2").css("display","block");
		$("#goodList1").css("display","none");
	})
	$(".leftArrow").click(function(){
		$("#goodList1").css("display","block");
		$("#goodList2").css("display","none");
	})
	
	///////限时批发里的倒计时	
	var set=null;
	function aclock(){
		var day,hour,minute,time,star,end,w,x,y,z;
		var currentTime = new Date(); //获取当前的时间
		var futureTime = new Date(2016,11,12,0,00,00); //设置需要倒计时的未来时间
		star = currentTime.getTime();//当前时间到1970年1月1日的毫秒数
		end = futureTime.getTime();//未来时间到1970年1月1日的毫秒数
		time = end - star;//相减为当前时间到未来时间的毫秒数
		day = Math.floor(time/86400000);
		w = time/86400000;
		hour = Math.floor((w-day)*24);
		x = (w-day)*24;
		minute = Math.floor((x-hour)*60);
		//把得到的毫秒数换算成天数。然后再用余数得到小时数、分数和秒数
		if(day < 10){
			day = "0" + day;
		}
		if(hour < 10){
			hour = "0" + hour;
		}
		if(minute < 10){
			minute = "0" + minute;
		}
		$("#day").html(day);
		$("#hour").html(hour);
		$("#minute").html(minute);//把得到的值赋给相应的span,在页面中显示出来
		if(time<=0){
			clearInterval(set);
			day = 0;hour = 0;minute = 0;  //当倒计时时间到了，清除计时器，让所有的值都变成0
			if(day < 10){
				day = "0" + day;
			}
			if(hour < 10){
				hour = "0" + hour;
			}
			if(minute < 10){
				minute = "0" + minute;
			}
			$("#day").html(day);
			$("#hour").html(hour);
			$("#minute").html(minute);
			alert("时间到");
		}
	}
	set = setInterval(aclock,1);
	
	/////////楼层效果的left值随屏幕尺寸变化
	var floorNavWidth = $("#floornav").width();	
	$(window).load(function(){
		var floorNavLeft = $("#body")[0].offsetLeft-floorNavWidth;
		if(floorNavLeft <= 20){
			floorNavLeft = 20;
		};
		$("#floornav").css({
			"left":floorNavLeft
		});
	});
	$(window).resize(function(){
		var floorNavLeft = $("#body")[0].offsetLeft-floorNavWidth;
		if(floorNavLeft <= 20){
			floorNavLeft = 20;
		}
		$("#floornav").css({
			"left":floorNavLeft
		})
	});
	
	//////////	↓↓↓scroll事件	//////////
	$(window).scroll(function(){			
		// ↓↓↓显示隐藏电梯
		var winT = $(window).scrollTop();
		var winH = $(window).height()/2;
		var F1 = $('.floorContent').eq(0).offset().top - winH;
		if (winT>=F1) {
			$('#floornav').show();
		} else{
			$('#floornav').hide();
		}
		
		// ↓↓↓电梯按钮跟随楼层点亮
		$('#floornav > .floorMark').each(function(i){
			var FF = $('.floorContent').eq(i).offset().top - winH;				
			if (winT>FF) {
				$('#floornav > .floorMark1').css({
					'background':'#fff url(../images/web/index/11.png) no-repeat 9px 7px'
				});
				$('#floornav > .floorMark2').css({
					'background':'#fff url(../images/web/index/sprit5.png) no-repeat 1px -56px'
				});
				$('#floornav > .floorMark3').css({
					'background':'#fff url(../images/web/index/sprit5.png) no-repeat 2px -116px'
				});
				$('#floornav > .floorMark4').css({
					'background':'#fff url(../images/web/index/sprit5.png) no-repeat 3px -176px'
				});
				$('#floornav > .floorMark5').css({
					'background':'#fff url(../images/web/index/sprit5.png) no-repeat 2px -236px'
				});
				$('#floornav > .floorMark6').css({
					'background':'#fff url(../images/web/index/sprit5.png) no-repeat 2px -296px'
				});
				$('#floornav > .floorMark7').css({
					'background':'#fff url(../images/web/index/sprit5.png) no-repeat 1px -357px'
				});
				var idName = $(this).attr("id");
				console.log(idName)
				if(idName == "0"){
					$(this).css({
						"background":"#119200 url(../images/web/index/10.png) no-repeat 8px 7px"
					});
				}
				if(idName == "1"){
					$(this).css({
						"background":"#119200 url(../images/web/index/7.png) no-repeat 4px 7px"
					});
				}
				if(idName == "2"){
					$(this).css({
						"background":"#119200 url(../images/web/index/9.png) no-repeat 4px 7px"
					});
				}
				if(idName == "3"){
					$(this).css({
						"background":"#119200 url(../images/web/index/8.png) no-repeat 6px 5px"
					});
				}
				if(idName == "4"){
					$(this).css({
						"background":"#119200 url(../images/web/index/4.png) no-repeat 8px 7px"
					});
				}
				if(idName == "5"){
					$(this).css({
						"background":"#119200 url(../images/web/index/5.png) no-repeat 7px 5px"
					});
				}
				if(idName == "6"){
					$(this).css({
						"background":"#119200 url(../images/web/index/1.png) no-repeat 10px 7px"
					});
				}
				

				$('.green_border > .thisGreen').css({
					"color":""
				})
				$('.green_border > .thisGreen').eq($(this).index()).css({
					"color":"#119200"
				})

			}
		})
	})
	
	//////////	点击楼层内容移动	//////////
	var clk = $('#floornav > .floorMark');
	// $(".floorMark2").click(function(){
	// 	$(this).css({
	// 		"backgroundImage":"url(../images/web/index/7.png)"
	// 	});
	// 	console.log("ddf")
	// })
	$(clk).click(function(){			
		var F = $(clk).index(this);	
		
		if(idName == "1"){
			$(this).css({
		// 		'backgroundColor':'red',
		// 		"background-image":"url(../images/web/index/7.png)"
			});
		}	
		var F_ = $('.floorContent').eq(F).offset().top -80 ;
		$('html, body').animate({
			scrollTop: F_
		},'slow');		
		// ↓↓↓电梯按钮点击后/前颜色转换
		// $(clk).css({
		// 	'backgroundColor':''
		// });
		
		// $('.green_border > .thisGreen').css({
		// 	"color":""
		// })
		// $('.green_border > .thisGreen').eq($(this).index()).css({
		// 	"color":"#119200"
		// })
	})
			
})
