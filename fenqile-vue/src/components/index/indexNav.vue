<template>
	<div class="nav">
		<!--初始显示状态-->
		<div class="nav1" v-show="nav1">
			<div class="swiper-container1" id="topNav1">
				<div class="swiper-wrapper">
					<div class="swiper-slide active">推荐</div>
					<div class="swiper-slide">手机</div>
					<div class="swiper-slide">电脑</div>
					<div class="swiper-slide">数码</div>
					<div class="swiper-slide">充值</div>
					<div class="swiper-slide">鞋服</div>
					<div class="swiper-slide">美妆</div>
					<div class="swiper-slide">家电</div>
					<div class="swiper-slide">运动户外</div>
					<div class="swiper-slide">首饰</div>
					<div class="swiper-slide">名表</div>
					<div class="swiper-slide">箱包潮品</div>
					<div class="swiper-slide">食品</div>
					<div class="swiper-slide">母婴</div>
				</div>
			</div>
			<i class="iconfont icon-jiantou-down" id="showNav2" @click="hide"></i>
		</div>

		<!--展开状态-->
		<div class="nav2" v-show="nav2">
			<div>
				<p>请选择分类</p>
				<i class="iconfont icon-arrow-up" id="hideNav2" @click="show"></i>
			</div>
			<ul class="clear">
				<li>推荐</li>
				<li>手机</li>
				<li>电脑</li>
				<li>数码</li>
				<li>充值</li>
				<li>鞋服</li>
				<li>美妆</li>
				<li>家电</li>
				<li>运动户外</li>
				<li>首饰</li>
				<li>名表</li>
				<li>箱包潮品</li>
				<li>食品</li>
				<li>母婴</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				nav1:true,
				nav2:false
			}
		},
		methods: {
			show:function(){
				this.nav1 = !this.nav1;
				this.nav2 = !this.nav2;
			},
			hide:function(){
				this.nav1 = !this.nav1;
				this.nav2 = !this.nav2;
			}
		},
		mounted:function(){
			/*var mySwiper1 = new Swiper ('.swiper-container1', {
			    freeMode: true,
			    freeModeMomentumRatio: 0.5,
			    slidesPerView: 'auto',
			    resistanceRatio : 0,
			});*/
			/*$("#showNav2").click(function(){
				$(".nav1").css("display","none");
				$(".nav2").css("display","block");
			});
			$("#hideNav2").click(function(){
				$(".nav1").css("display","flex");
				$(".nav2").css("display","none");
			});*/
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
			//顶部nav1 div的点击
			/*$(".swiper-container1 .swiper-slide").click(function() {
				var index = $(".swiper-container1 .swiper-slide").index($(this));
				$(".swiper-container1 .swiper-slide").removeClass("active");
				$(this).addClass("active");
				//mySwiper1.slideTo(index,1000);
				//alert(mySwiper1.clickedIndex);
			//	mySwiper0.slideTo(mySwiper1.clickedIndex, 1000);
			});*/
		}
	}
</script>

<style scoped="scoped">
	.nav {
		font-size: 0.12rem;
		background: white;
		position: fixed;
		top: 0.5rem;
		left: 0;
		width: 100%;
		z-index: 100;
		box-sizing: border-box;
		color: #9598a0;
	}
	.nav i.iconfont{
		font-size:0.12rem;
	}
	
	.nav .nav1 {
		display: flex;
		line-height: 0.18rem;
		padding: 0.05rem;
		border-bottom: none;
	}
	
	.nav .nav1 .swiper-container1 {
		flex: 1;
	}
	
	.nav .nav1 .swiper-container1 .swiper-wrapper {
		border-bottom: none;
	}
	
	.nav .nav1 .swiper-container1 .swiper-slide {
		padding: 0 0.1rem;
		width: 100px;
		position: relative;
	}
	
	.nav .nav1 .swiper-container1 .active {
		color: #6ea0e2;
	}
	
	.nav .nav1 .swiper-container1 .active:after {
		content: "";
		display: block;
		width: calc(100% - 0.12rem);
		height: 0.03rem;
		background: #6ea0e2;
		position: absolute;
		bottom: 0rem;
		left: 0.04rem;
	}
	
	.nav .nav1 .icon-jiantou-down {
		margin-left: 0.12rem;
		padding: 0.1rem 0;
	}
	
	.nav .nav2 {
		/*display: none;*/
	}
	
	.nav .nav2 div {
		display: flex;
		line-height: 0.18rem;
		padding: 0.1rem;
	}
	
	.nav .nav2 div p {
		flex: 1;
	}
	
	.nav .nav2 ul li {
		float: left;
		width: 25%;
		text-align: center;
		line-height: 0.24rem;
	}
	
	#topNav1 .swiper-slide {
		padding: 0 0.1rem;
		letter-spacing: 2px;
		width: auto;
	}
	
	#topNav1 {
		width: 100%;
		height: 100%;
		overflow: hidden;
		font: hiragino sans gb, microsoft yahei, simsun;
	}
</style>