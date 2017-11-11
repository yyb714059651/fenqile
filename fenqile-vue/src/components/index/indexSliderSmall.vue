<template>
	<div class="swiper-container swiper-container3">
		<div class="swiper-wrapper">
			<div class="swiper-slide"><img src="../../assets/img/zds/wicJAFnIn76AHyx2AAAhcpkp7vs071_160x160.jpg" alt="" /></div>
			<div class="swiper-slide"><img src="../../assets/img/zds/wicJAFnohFyAKO_-AACPPxg-SR4746_160x160.png" /></div>
			<div class="swiper-slide"><img src="../../assets/img/zds/wScJAFmCommAPblcAABH94tm-cs340_160x160.jpg" alt="" /></div>
			<div class="swiper-slide"><img src="../../assets/img/zds/wycJAFl_3WWAUUFMAABMiR9-rR0021_160x160.jpg" alt="" /></div>
			<div class="swiper-slide"><img src="../../assets/img/zds/wicJAFmssKGACm8gAAA9ABpOFUs617_160x160.jpg" alt="" /></div>
			<div class="swiper-slide"><img src="../../assets/img/zds/wicJAFnpcgiAOaLHAAGszg4xcA4977_1500x800.jpg" alt="" /></div>
			<div class="swiper-slide"><img src="../../assets/img/zds/wicJAFntxGeAIMxMAAFevj3LF90507_1500x800.jpg" alt="" /></div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted:function(){
			var mySwiper3 = new Swiper('.swiper-container3', {
				slidesPerView: 'auto',
				freeMode: true,
				freeModeSticky: true
			});
		}
	}
</script>

<style scoped="scoped">
	.swiper-container3 {
		background: white;
		width: 100%;
		height: 1rem;
		margin-bottom: 0.1rem;
	}
	
	.swiper-container3 .swiper-wrapper {
		width: 100%;
		height: 100%;
		padding: 0 0.05rem;
	}
	
	.swiper-container3 .swiper-wrapper .swiper-slide {
		width: auto;
		height: 100%;
		height: auto;
	}
	
	.swiper-container3 .swiper-wrapper .swiper-slide img {
		display: block;
		width: 0.8rem;
		height: 0.8rem;
		vertical-align: auto;
		margin: 0.1rem 0.05rem;
	}
</style>