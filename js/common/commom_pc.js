$(document).ready(function(){
	//////城市二级联动
	var Arr = ["北京","上海","天津","重庆","河北","山西","内蒙古","辽宁","吉林","黑龙江","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","广西","海南","四川","贵州","云南","西藏","陕西","甘肃","宁夏","青海","新疆","香港","澳门","台湾"];

	var html = "";
	for (var i = 0; i < Arr.length; i++) {
		html += '<option value= '+i+' >'+Arr[i]+'</option> ';
	};
	$("#province").html(html);


	var arr = new  Array();
	arr[0 ]="东城,西城,崇文,宣武,朝阳,丰台,石景山,海淀,门头沟,房山,通州,顺义,昌平,大兴,平谷,怀柔,密云,延庆" 
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
	arr[21 ]="海口,三亚" 
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

	///////购物车里全部商品和降价商品点击切换
	$(".twoGoods").click(function(event){
		$(".twoGoods").removeClass("active");
		$(this).addClass("active");
		var e = event||window.event;
		var offSetLeft = $(this)[0].offsetLeft;
		var offsetWidth = $(this)[0].offsetWidth;
		var FatherLeft = $("#body")[0].offsetLeft;
		var ePos = e.pageX;
		if(ePos >= FatherLeft&&ePos <= FatherLeft+offsetWidth){
			$("#classBorder").stop().animate({
				left:0
			},400)
		}
		if(ePos >= FatherLeft+offsetWidth&&ePos <= FatherLeft+offsetWidth*2){
			$("#classBorder").stop().animate({
				left:offsetWidth
			},400)
		}
	})
	$(".twoGoods").hover(function(event){
		var e = event||window.event;
		var offSetLeft = $(this)[0].offsetLeft;
		var offsetWidth = $(this)[0].offsetWidth;
		var FatherLeft = $("#body")[0].offsetLeft;
		var ePos = e.pageX;
		if(ePos >= FatherLeft&&ePos <= FatherLeft+offsetWidth){
			$("#classBorder").stop().animate({
				left:0
			},400)
		}
		if(ePos >= FatherLeft+offsetWidth&&ePos <= FatherLeft+offsetWidth*2){
			$("#classBorder").stop().animate({
				left:offsetWidth
			},400)
		}
	},function(){
		var index = $(".twoGoods").index($(".twoGoods.active"));
		var offsetWidth = $(".twoGoods.active")[0].offsetWidth;
		$("#classBorder").stop().animate({
			left:offsetWidth*index
		},400) 
	})


	var price = 47;
	$(".rightPlus").click(function(event){
		event.preventDefault();
		var sumPrices = [];
		var goodNumbers = [];
		var determine = $(this).parent().parent().siblings(".goodName").find(".checkBox").find("input").prop("checked");
		if(determine){
			var value = $(this).siblings(".middleInput").find("input").val();
			value++;
			$(this).siblings(".middleInput").find("input").val(value);	
			$(this).siblings(".middleInput").find("input").attr("data-number",value);	
			$(this).parent().siblings('.infoThree').html(price*value+".00");
			$(this).parent().parent().siblings(".goodName").find(".checkBox").find("input").attr("data-price",price*value);
			var sumPrice = $(".checkBox input:checked");
			var goodNumber = $(".checkBox input:checked").parent().parent().siblings(".threeInfos").find(".infoTwo").find(".middleInput").find("input");
			sumPrices.push(sumPrice);
			goodNumbers.push(goodNumber);
			var allPrices = [];
			var good_Numbers = [];
			for (var i = 0; i < sumPrices[0].length; i++) {
				var all_price = sumPrices[0][i].attributes["data-price"].value;
				var good_number = goodNumbers[0][i].attributes["data-number"].value;
				allPrices.push(parseFloat(all_price));
				good_Numbers.push(parseFloat(good_number));
			};	
			var sumNumber = 0;
			var sumNumber1 = 0;
			for (var i = 0; i < allPrices.length; i++) {
				sumNumber += allPrices[i];
				sumNumber1 += good_Numbers[i];
			};
			$("#goodNumber").html(sumNumber1);	
			$("#jiesuan").html("￥"+sumNumber+".00");
		}	
	});
	$(".leftMinus").click(function(event){
		event.preventDefault();
		var sumPrices = [];
		var goodNumbers = [];
		var determine = $(this).parent().parent().siblings(".goodName").find(".checkBox").find("input").prop("checked");
		if(determine){
			var value = $(this).siblings(".middleInput").find("input").val();
			value--;
			if(value <= 1){
				value = 1;
			}
			$(this).siblings(".middleInput").find("input").val(value);
			$(this).siblings(".middleInput").find("input").attr("data-number",value);	
			$(this).parent().siblings('.infoThree').html(price*value+".00");
			$(this).parent().parent().siblings(".goodName").find(".checkBox").find("input").attr("data-price",price*value);
			var sumPrice = $(".checkBox input:checked");
			var goodNumber = $(".checkBox input:checked").parent().parent().siblings(".threeInfos").find(".infoTwo").find(".middleInput").find("input");
			sumPrices.push(sumPrice);
			goodNumbers.push(goodNumber);
			var allPrices = [];
			var good_Numbers = [];
			for (var i = 0; i < sumPrices[0].length; i++) {
				var all_price = sumPrices[0][i].attributes["data-price"].value;
				var good_number = goodNumbers[0][i].attributes["data-number"].value;
				allPrices.push(parseFloat(all_price));
				good_Numbers.push(parseFloat(good_number));
			};	
			var sumNumber = 0;
			var sumNumber1 = 0;
			for (var i = 0; i < allPrices.length; i++) {
				sumNumber += allPrices[i];
				sumNumber1 += good_Numbers[i];
			};
			
			$("#goodNumber").html(sumNumber1);	
			$("#jiesuan").html("￥"+sumNumber+".00");
		}	
	});
	
	$(".checkBox").change(function(){
		var sumPrices = [];
		var goodNumbers = [];
		var determine = $(this).find("input").prop("checked");
		if(determine){			
			var Value = $(this).parent().siblings(".threeInfos").find(".infoTwo").find(".middleInput").find("input").val();
			$(this).parent().siblings(".threeInfos").find(".infoTwo").find(".middleInput").find("input").attr("data-number",Value);
			$(this).find("input").attr("data-price",price*Value);	
		}else{
			$(this).find("input").removeAttr("data-price");	
			$(this).parent().siblings(".threeInfos").find(".infoTwo").find(".middleInput").find("input").removeAttr("data-number");
			$(".checkBoxQuan input").prop("checked",false);
		}
		var sumPrice = $(".checkBox input:checked");
		var ulLength = $(".buyGoodes");
		if(sumPrice.length == ulLength.length){
			$(".checkBoxQuan input").prop("checked",true);
		}
		var goodNumber = $(".checkBox input:checked").parent().parent().siblings(".threeInfos").find(".infoTwo").find(".middleInput").find("input");
		sumPrices.push(sumPrice);
		goodNumbers.push(goodNumber);
		var allPrices = [];
		var good_Numbers = [];
		for (var i = 0; i < sumPrices[0].length; i++) {
			var all_price = sumPrices[0][i].attributes["data-price"].value;
			var good_number = goodNumbers[0][i].attributes["data-number"].value;
			allPrices.push(parseFloat(all_price));
			good_Numbers.push(parseFloat(good_number));
		};	
		var sumNumber = 0;
		var sumNumber1 = 0;
		for (var i = 0; i < allPrices.length; i++) {
			sumNumber += allPrices[i];
			sumNumber1 += good_Numbers[i];
		};

		$("#goodNumber").html(sumNumber1);	
		$("#jiesuan").html("￥"+sumNumber+".00");
	});

	$(".Delete").click(function(){
		var determine = $(this).parent().siblings(".goodName").find(".checkBox").find("input").prop("checked");
		if(determine){
			var sumPrices = [];
			var goodNumbers = [];
			$(this).parent().parent().remove();
			var sumPrice = $(".checkBox input:checked");
			var ulLength = $(".buyGoodes");
			if(sumPrice.length == ulLength.length){
				$(".checkBoxQuan input").prop("checked",true);
			}
			var goodNumber = $(".checkBox input:checked").parent().parent().siblings(".threeInfos").find(".infoTwo").find(".middleInput").find("input");
			sumPrices.push(sumPrice);
			goodNumbers.push(goodNumber);
			var allPrices = [];
			var good_Numbers = [];
			for (var i = 0; i < sumPrices[0].length; i++) {
				var all_price = sumPrices[0][i].attributes["data-price"].value;
				var good_number = goodNumbers[0][i].attributes["data-number"].value;
				allPrices.push(parseFloat(all_price));
				good_Numbers.push(parseFloat(good_number));
			};	
			var sumNumber = 0;
			var sumNumber1 = 0;
			for (var i = 0; i < allPrices.length; i++) {
				sumNumber += allPrices[i];
				sumNumber1 += good_Numbers[i];
			};

			$("#goodNumber").html(sumNumber1);	
			$("#jiesuan").html("￥"+sumNumber+".00");
		};
	})

	$("#deleteAll").click(function(){
		var determine = $(".checkBoxQuan input").prop("checked");
		console.log(determine); 
		if (determine) {
			$(".buyGoodes").remove();
			$(".checkBoxQuan input").prop("checked",false);
			$("#goodNumber").html(0);	
			$("#jiesuan").html("￥"+0+".00");
		};
	})

	$(".checkBoxQuan").change(function(){
		var determine = $(this).find("input").prop("checked");
		var good_price = [];
		var product_nums = [];
		var sum_Price = 0;
		var productNumber = 0;
		if (determine) {
			$(".buyGoodes .goodName .checkBox").find("input").prop("checked",true); 
			$(".checkBoxQuan input").prop("checked",true);
			for (var i = 0; i < $(".buyGoodes .goodName .checkBox").find("input").length; i++) {
				var forNumber = $(".productNum").eq(i).val();
				$(".productNum").eq(i).attr("data-number",forNumber);
				var forPrice = parseFloat($(".infoThree").eq(i).html());
				$(".checkBox input").eq(i).attr("data-price",forPrice);
			};
			var goodPrice = $(".infoThree");
			var product_num = $(".productNum");
			
			for (var i = 0; i < goodPrice.length; i++) {
				good_price.push(parseFloat(goodPrice[i].innerHTML));				
				product_nums.push(parseFloat(product_num[i].value));		
			};
			for (var i = 0; i < good_price.length; i++) {
				sum_Price += good_price[i];					
				productNumber += product_nums[i];
			};
			$("#goodNumber").html(productNumber);	
			$("#jiesuan").html("￥"+sum_Price+".00");
		}else{
			$(".buyGoodes .goodName .checkBox").find("input").prop("checked",false);
			$("#goodNumber").html(0);	
			$("#jiesuan").html("￥"+0+".00");
			$(".productNum").eq(i).removeAttr("data-number");
			$(".checkBox input").eq(i).removeAttr("data-price");
		};
	});
	
})
