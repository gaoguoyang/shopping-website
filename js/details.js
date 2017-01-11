$(function(){
	var mySwiper2 = new Swiper('.banner.swiper-container',{
		pagination : '.swiper-pagination',
		paginationType : 'fraction',
		paginationFractionRender: function (swiper, currentClassName, totalClassName) {
		    return '<span class="' + currentClassName + '"></span>' +
		            '&nbsp&nbsp&nbsp&nbsp ' +
		            '<span class="' + totalClassName + '"></span>';
		}
	})
//	商户选择
	$(".select_btn").click(function(){
		$(".translucence").show();
	})
	$(".translucence .select_com").click(function(event){
		 event.stopPropagation();
	})
	$(".more").click(function(){
		$(".more_con").show();
		$(this).hide();
		
	})
	
	$(".translucence").click(function(){
		$(this).hide();
	})
	$(".submit").click(function(){
		var arr = [];
		$('input[name="select"]:checked').each(function(){
		      arr.push($(this).val()); 
		});
		if(arr.length==0){
		      alert('请选择商户！');
		      return false;
		}else{
			$(".translucence").hide();
			$("#form").submit();
		}

		
		
	})
		
//	数量加减
	$(".add").click(function(){
		var num = $(".num").html();
		
		num++;
		$(".num").html(num);
	})
	$(".subtract").click(function(){
		var num = $(".num").html();
		if(num>0){
			num--;
			$(".num").html(num);
		}
			
	})
	
//	点击"加入购物车"
	$(".message_two .right").click(function(){
//		$.ajax({
//           type: "GET",
//           url: "",
//           data: {num:$(".num").html()},
//           dataType: "json",
//           success: function(data){
//                      
//                    }
//       });

		alert("添加成功，在购物车等你哦~");
	})
	$(".collect").click(function(){
//		$.ajax({
//           type: "GET",
//           url: "",
//           data: {num:$(".num").html()},
//           dataType: "json",
//           success: function(data){
//                      
//                    }
//       });
	})

})

	