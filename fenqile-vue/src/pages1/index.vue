<template>
	<div>
		<index-head></index-head>
		<index-nav></index-nav>
		<!--<index-slider></index-slider>
		<index-slider-small></index-slider-small>
		<index-new-person></index-new-person>
		<index-le-feng-qiang></index-le-feng-qiang>
		<index-huodong></index-huodong>
		<index-brand></index-brand>
		<index-haodian></index-haodian>
		<index-re-mai></index-re-mai>-->
		<index-big-slider></index-big-slider>
		<index-footer></index-footer>
	</div>
</template>


<script>
	import indexHead from "../components/index/indexHead.vue"
	import indexNav from "../components/index/indexNav.vue"
//	import indexSlider from "../components/index/indexSlider.vue"
//	import indexSliderSmall from "../components/index/indexSliderSmall.vue"
//	import indexNewPerson from "../components/index/indexNewPerson.vue"
//	import indexLeFengQiang from "../components/index/indexLeFengQiang.vue"
//	import indexHuodong from "../components/index/indexHuodong.vue"
//	import indexBrand from "../components/index/indexBrand.vue"
//	import indexHaodian from "../components/index/indexHaodian.vue"
//	import indexReMai from "../components/index/indexReMai.vue"
	import indexFooter from "../components/index/indexFooter.vue"
	import indexBigSlider from "../components/index/indexBigSlider.vue"
	
	import "../assets/css/public.css"
	import "../assets/js/jquery-2.1.4.min.js"
	import "../assets/js/swiper.min.js"
	import "../assets/css/swiper.min.css"
	import "../assets/js/index.js"
	import "../assets/iconfont/iconfont.css"
	
	export default{
		components:{
			indexHead,
			indexNav,
//			indexSlider,
//			indexSliderSmall,
//			indexNewPerson,
//			indexLeFengQiang,
//			indexHuodong,
//			indexBrand,
//			indexHaodian,
//			indexReMai,
			indexBigSlider,
			indexFooter
		},
		mounted:function(){
			var mySwiper1 = new Swiper ('.swiper-container1', {
			    freeMode: true,
			    freeModeMomentumRatio: 0.5,
			    slidesPerView: 'auto',
			    resistanceRatio : 0,
			});
			
			var mySwiper0 = new Swiper('.swiper-container0', {
				autoHeight: true,
				//			resistanceRatio : 0,
				onSlideChangeStart: function(swiper) {
					//alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
					mySwiper1.slideTo(swiper.activeIndex, 1000);
					//mySwiper1.activeIndex = swiper.activeIndex;
					$(".swiper-container1 .swiper-slide").removeClass("active");
					$(".swiper-container1 .swiper-slide").eq(swiper.activeIndex).addClass("active");

					$(".swiper-container0>.swiper-wrapper").css('height', '100%');
					$(".swiper-container0>.swiper-slide").css('height', '100%');
					var H = $(".swiper-container0 .swiper-wrapper").children().eq(swiper.activeIndex)["0"].clientHeight;
					$(".swiper-container0>.swiper-slide").css('height', H + 'px');
					$(".swiper-container0>.swiper-wrapper").css('height', H + 'px');
				}
			});
			
			$(".clear li").each(function() {
				this.onclick = function() {
					$(".nav1").css("display", "flex");
					$(".nav2").css("display", "none");
					var index = $(".clear li").index(this);
					mySwiper1.slideTo(index, 1000);
					mySwiper0.slideTo(index, 1000);
					$(".swiper-container1 .swiper-slide").removeClass("active");
					$(".swiper-container1 .swiper-slide").eq(index).addClass("active");
				}
			});
			//顶部nav1 div的点击
			$(".swiper-container1 .swiper-slide").click(function() {
				var index = $(".swiper-container1 .swiper-slide").index($(this));
				$(".swiper-container1 .swiper-slide").removeClass("active");
				$(this).addClass("active");
				mySwiper1.slideTo(index,1000);
				//alert(mySwiper1.clickedIndex);
				mySwiper0.slideTo(mySwiper1.clickedIndex, 1000);
			});
		}
	}
</script>


<style scoped="scoped">
	
</style>