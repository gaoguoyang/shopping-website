$(function(){
	//QQ交谈显示/隐藏
	var con_flag = 0;
	$(".contact .btn").click(function(){
		if(con_flag == 0){
			con_flag = 1;
			$(".contact .con_inner").hide();
		}else{
			con_flag = 0;
			$(".contact .con_inner").show();
		}
	})
	
	
})
