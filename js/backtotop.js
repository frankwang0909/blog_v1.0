// 回到顶部按钮的出现和隐藏
function goTop(){
	$(window).scroll(function(e) {
//若滚动条离顶部大于100像素
		if($(window).scrollTop()>100)
			 $("#go-top").fadeIn(1000);//以1秒的间隔渐显id=gotop的元素
		else
			 $("#go-top").fadeOut(1000);//以1秒的间隔渐隐id=gotop的元素
	});
};
$(function(){
//点击回到顶部的元素
	$("#go-top").click(function(e) {
	//以1秒的间隔返回顶部
		$('body,html').animate({scrollTop:0},1000);
	});
	goTop();//实现回到顶部元素的渐显与渐隐
});
