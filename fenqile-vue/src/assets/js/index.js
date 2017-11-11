window.onload=function(){
/*var mySwiper1 = new Swiper('.swiper-container1', {
	freeMode: true,
	freeModeMomentumRatio: 0.5,
	slidesPerView: 'auto',
	resistanceRatio: 0,
});*/
//var mySwiper0 = new Swiper('.swiper-container0', {
//	onSlideChangeStart: function(swiper) {
//		//alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
//		mySwiper1.slideTo(swiper.activeIndex, 1000);
//		//mySwiper1.activeIndex=swiper.activeIndex;
//		$(".swiper-container1 .swiper-slide").removeClass("active");
//		$(".swiper-container1 .swiper-slide").eq(swiper.activeIndex).addClass("active");
//	}
//});
/*$("#showNav2").click(function() {
	$(".nav1").css("display", "none");
	$(".nav2").css("display", "block");
});
$("#hideNav2").click(function() {
	$(".nav1").css("display", "flex");
	$(".nav2").css("display", "none");
});*/

/*var mySwiper2 = new Swiper('.swiper-container2', {
	loop: true,
	autoplay: 1000,
	pagination: '.swiper-pagination2',
	autoplayDisableOnInteraction: true,
});*/

/*var mySwiper3 = new Swiper('.swiper-container3', {
	slidesPerView: 'auto',
	freeMode: true,
	freeModeSticky: true
});*/

/*var mySwiper4 = new Swiper('.swiper-container4', {
	slidesPerView: 'auto',
	freeMode: true,
	freeModeSticky: true
});*/

/*var mySwiper5 = new Swiper('.swiper-container5', {
	slidesPerView: 'auto',
	freeMode: true,
	freeModeSticky: true
});*/

/*var mySwiper6 = new Swiper('.swiper-container6', {
	slidesPerView: 'auto',
	freeMode: true,
	freeModeSticky: true
});*/

//顶部nav2 li的点击
/*$(".clear li").each(function() {
	this.onclick = function() {
		$(".nav1").css("display", "flex");
		$(".nav2").css("display", "none");
		var index = $(".clear li").index(this);
		mySwiper1.slideTo(index, 1000);
//		mySwiper0.slideTo(index, 1000);
		$(".swiper-container1 .swiper-slide").removeClass("active");
		$(".swiper-container1 .swiper-slide").eq(index).addClass("active");
	}
});*/
/*//顶部nav1 div的点击
$(".swiper-container1 .swiper-slide").click(function() {
	var index = $(".swiper-container1 .swiper-slide").index($(this));
	$(".swiper-container1 .swiper-slide").removeClass("active");
	$(this).addClass("active");
	//mySwiper1.slideTo(index,1000);
	//alert(mySwiper1.clickedIndex);
//	mySwiper0.slideTo(mySwiper1.clickedIndex, 1000);
});*/

//mySwiper0控制mySwiper1

//底部的点击
/*var arr = ["consume", "class", "cart", "lecard", "mine"];
$(".footer dl").each(function(i) {
	this.onclick = function() {
		var index = $(".footer dl").index(this);
		var acIdx = $(".footer dl").index($(".footer dl.active"))
		$(".footer dl.active").find("dt img").attr("src", "img/zds/" + arr[acIdx] + ".png");
		$(".footer dl").removeClass("active");
		$(this).addClass("active");
		$(this).find("dt img").attr("src", "img/zds/" + arr[index] + "_on.png");
	}
});*/

//倒计时
/*function daojishi() {
	var endTime;
	var time = new Date();
	var year = time.getFullYear();
	var month = time.getMonth();
	var day = time.getDate();
	var hour = time.getHours();
	var minute = time.getMinutes();
	var second = time.getSeconds();
	//假设每天的12:00:00为抢购结束时间
	if((hour < 12) && (hour >= 0)) {
		endTime = new Date(year, month, day, 12, 0, 0)
		//console.log(endTime);

	} else {
		//$(".hour").text("00");
		//$(".minute").text("00");
		//$(".seconds").text("00");
		//return;
		
		endTime = new Date(year, month, day + 1, 12, 0, 0)
		//console.log(endTime);
	}
	var chazhi = endTime - time;
	//console.log(chazhi);
	var h, min, sec;
	chazhi = parseInt(chazhi / 1000);
	sec = chazhi % 60;
	min = parseInt(chazhi / 60) % 60;
	h = parseInt(chazhi / 3600);
	//console.log(h + ":" + min + ":" + sec);

	function doubleNum(num) {
		if(num >= 10) {
			return "" + num;
		} else {
			return "0" + num;
		}
	}
	$(".hour").text(doubleNum(h));
	$(".minute").text(doubleNum(min));
	$(".seconds").text(doubleNum(sec));
}
daojishi();
setInterval(function() {
	daojishi();
}, 1000);*/
}