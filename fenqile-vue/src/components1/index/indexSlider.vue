<template>
	<div class="swiper-container2">
		<div class="swiper-wrapper">
			<div class="swiper-slide"><img v-lazy="'../../../static/assets/img/zds/wicJAFncNS2AdN8uAAEB89n3THA941_1500x800.jpg'" alt="" /></div>
			<div class="swiper-slide"><img v-lazy="'../../../static/assets/img/zds/wicJAFnolLCAA8eqAAEc-b1yzDQ147_1500x800.jpg'" /></div>
			<div class="swiper-slide"><img v-lazy="'../../../static/assets/img/zds/wicJAFnoXDyAH0U9AAC0Aly9FS0796_1500x800.jpg'" alt="" /></div>
			<div class="swiper-slide"><img v-lazy="'../../../static/assets/img/zds/wicJAFnnAouALeevAAF6Aj43GZs944_1500x800.jpg'" alt="" /></div>
			<div class="swiper-slide"><img v-lazy="'../../../static/assets/img/zds/wicJAFntYf6AYJGGAAFUS5iWKJc078_1500x800.jpg'" alt="" /></div>
			<div class="swiper-slide"><img v-lazy="'../../../static/assets/img/zds/wicJAFnpcgiAOaLHAAGszg4xcA4977_1500x800.jpg'" alt="" /></div>
			<div class="swiper-slide"><img v-lazy="'../../../static/assets/img/zds/wicJAFntxGeAIMxMAAFevj3LF90507_1500x800.jpg'" alt="" /></div>
		</div>
		<div class="swiper-pagination2"></div>
	</div>
</template>

<script>
	export default {
		mounted:function(){
			var mySwiper2 = new Swiper('.swiper-container2', {
				loop: true,
				autoplay: 1000,
				pagination: '.swiper-pagination2',
				autoplayDisableOnInteraction: true,
			});
		}
	}
</script>

<style scoped="scoped">
	.swiper-container2 {
		position: relative;
		width: 100%;
		height: 2rem;
		overflow: hidden;
		/*margin-top: 0.9rem;*/
	}
	
	.swiper-container2 .swiper-wrapper {
		width: 100%;
		height: 100%;
	}
	
	.swiper-container2 .swiper-wrapper img {
		width: 100%;
		height: 100%;
	}
	
	.swiper-container2 .swiper-pagination2 {
		position: absolute;
		bottom: 0;
		left: 0;
		text-align: center;
		z-index: 10;
		padding: 0;
		margin: 0 !important;
	}
	
	.swiper-container2 .swiper-pagination2 span.swiper-pagination-bullet-active {
		background: rgba(255, 255, 255, 0.8);
	}
</style>