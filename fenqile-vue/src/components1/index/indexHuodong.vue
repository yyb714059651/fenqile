<template>
	<div class="activity">
		<p class="title">精选活动</p>

		<div class="section">
			<div class="banner">
				<img v-lazy="'../../../static/assets/img/zds/wScJAFnvI4qAQNuUAABsfizzCcc902_1500x800.jpg'" alt="" />
			</div>

			<!--小轮播3-->
			<div class="swiper-container5">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<img v-lazy="'../../../static/assets/img/zds/omgGAFeIjzOAayONAABSttFCO_0655_336x336.jpg'" alt="" />
						<div class="box">
							<p>Kindle 6英寸护眼非反光电子墨水触控显示屏 内置wifi 4G 电子书阅读器 标清入门版/voyage超高清版</p>
							<b>￥958</b>
							<div>
								<span>免息</span>
								<a href="###">月供￥20.18起</a>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<img v-lazy="'../../../static/assets/img/zds/20151010_685642643e25ccf68e8165_336x336.jpg'" alt="" />
						<div class="box">
							<p>Kindle 6英寸护眼非反光电子墨水触控显示屏 内置wifi 4G 电子书阅读器 标清入门版/voyage超高清版</p>
							<b>￥958</b>
							<div>
								<span>免息</span>
								<a href="###">月供￥20.18起</a>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<img v-lazy="'../../../static/assets/img/zds/hRoGAFj0f2KAHXuHAAA77FJiQDQ324_336x336.jpg'" alt="" />
						<div class="box">
							<p>Kindle 6英寸护眼非反光电子墨水触控显示屏 内置wifi 4G 电子书阅读器 标清入门版/voyage超高清版</p>
							<b>￥958</b>
							<div>
								<span>免息</span>
								<a href="###">月供￥20.18起</a>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<img v-lazy="'../../../static/assets/img/zds/hBoGAFiBukCAKSsXAAA-zUJc_hE497_336x336.jpg'" alt="" />
						<div class="box">
							<p>Kindle 6英寸护眼非反光电子墨水触控显示屏 内置wifi 4G 电子书阅读器 标清入门版/voyage超高清版</p>
							<b>￥958</b>
							<div>
								<span>免息</span>
								<a href="###">月供￥20.18起</a>
							</div>
						</div>
					</div>

					<div class="swiper-slide last">
						<i><a href="###">MORE</a></i>
						<u><a href="###">查看更多</a></u>
					</div>
				</div>
			</div>
		</div>

		<div class="section">
			<div class="banner">
				<img v-lazy="'../../../static/assets/img/zds/wScJAFnvB0SAEhVPAAHSZ-VRqvg606_1500x800.jpg'" alt="" />
			</div>

			<!--小轮播3-->
			<div class="swiper-container5">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<img v-lazy="'../../../static/assets/img/zds/hBoGAFkWfqqARLbsAAJSnMUjoBg978_336x336.jpg'" alt="" />
						<div class="box">
							<p>【领券立减200元】CK卡文克莱手表永恒系列白盘钢带石英女表K3M22126</p>
							<b>￥958</b>
							<div>
								<a href="###">月供￥20.18起</a>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<img v-lazy="'../../../static/assets/img/zds/hhoGAFnpk6KALliRAAIEuXySytk695_336x336.jpg'" alt="" />
						<div class="box">
							<p>【领券立减200】CK手表 MINIMAL系列男表白盘米兰编织钢表带石英表K3M2112Y</p>
							<b>￥958</b>
							<div>
								<a href="###">月供￥20.18起</a>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<img v-lazy="'../../../static/assets/img/zds/hBoGAFkmxwyAfeTFAAKwExLy0Y4123_336x336.jpg'" alt="" />
						<div class="box">
							<p>Kindle 6英寸护眼非反光电子墨水触控显示屏 内置wifi 4G 电子书阅读器 标清入门版/voyage超高清版</p>
							<b>￥958</b>
							<div>
								<a href="###">月供￥20.18起</a>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<img v-lazy="'../../../static/assets/img/zds/hhoGAFnpjYiAd2lVAAJrUiE8diY153_336x336.jpg'" alt="" />
						<div class="box">
							<p>Kindle 6英寸护眼非反光电子墨水触控显示屏 内置wifi 4G 电子书阅读器 标清入门版/voyage超高清版</p>
							<b>￥958</b>
							<div>
								<a href="###">月供￥20.18起</a>
							</div>
						</div>
					</div>

					<div class="swiper-slide last">
						<i><a href="###">MORE</a></i>
						<u><a href="###">查看更多</a></u>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		mounted:function(){
			var mySwiper4 = new Swiper('.swiper-container4', {
				slidesPerView: 'auto',
				freeMode: true,
				freeModeSticky: true
			});
			var mySwiper5 = new Swiper('.swiper-container5', {
				slidesPerView: 'auto',
				freeMode: true,
				freeModeSticky: true
			});
		}
	}
</script>

<style scoped="scoped">
	.activity {
		font-size: 0.12rem;
	}
	
	.activity .title {
		line-height: 0.7rem;
		font-size: 0.17rem;
		text-align: center;
		background: white;
	}
	
	.activity .section .banner {
		width: 100%;
		height: 2rem;
	}
	
	.activity .section .banner img {
		width: 100%;
		height: 100%;
	}
	
	.activity .swiper-container5 {
		background: white;
		width: 100%;
		height: 2.6rem;
		margin-bottom: 0.1rem;
		overflow: hidden;
	}
	
	.activity .swiper-container5 .swiper-wrapper {
		width: 100%;
		height: 100%;
		padding: 0 0.05rem;
	}
	
	.activity .swiper-container5 .swiper-wrapper .swiper-slide {
		width: auto;
		height: 100%;
		width: 1.46rem;
		line-height: 0.22rem;
	}
	
	.activity .swiper-container5 .swiper-wrapper .swiper-slide img {
		display: block;
		height: 1rem;
		vertical-align: auto;
		margin: 0.26rem 0.2rem;
	}
	
	.activity .swiper-container5 .swiper-wrapper .swiper-slide div.box {
		width: 100%;
		text-align: center;
	}
	
	.activity .swiper-container5 .swiper-wrapper .swiper-slide div.box p {
		color: black;
		font-weight: 300;
		line-height: 0.16rem;
		overflow: hidden;
		height: 0.32rem;
		margin: 0.1rem;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.activity .swiper-container5 .swiper-wrapper .swiper-slide div.box b {
		color: #aaafb3;
	}
	
	.activity .swiper-container5 .swiper-wrapper .swiper-slide div.box div {
		line-height: 0.22rem;
	}
	
	.activity .swiper-container5 .swiper-wrapper .swiper-slide div.box div span {
		display: inline-block;
		padding: 0 0.02rem;
		border-radius: 0.02rem;
		background: #ed5f86;
		color: white;
		font-size: 0.10rem;
		line-height: 0.12rem;
	}
	
	.activity .swiper-container5 .swiper-wrapper .swiper-slide div.box div a {
		color: #89a5f8;
	}
	
	.activity .swiper-container5 .swiper-wrapper .last {
		text-align: center;
		padding-top: 1rem;
	}
	
	.activity .swiper-container5 .swiper-wrapper .last i {
		display: block;
		color: black;
		font-size: 0.2rem;
	}
</style>