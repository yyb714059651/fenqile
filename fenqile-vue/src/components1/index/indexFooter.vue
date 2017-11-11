<template>
	<div class="footer">
		<dl class="active">
			<dt><img v-lazy="'../../../static/assets/img/zds/consume_on.png'" alt="" /> </dt>
			<dd>首页</dd>
		</dl>
		<dl>
			<dt><img v-lazy="'../../../static/assets/img/zds/class.png'" alt="" /> </dt>
			<dd>分类</dd>
		</dl>
		<dl>
			<dt><img v-lazy="'../../../static/assets/img/zds/cart.png'" alt="" /> </dt>
			<dd>购物车</dd>
		</dl>
		<dl>
			<dt><img v-lazy="'../../../static/assets/img/zds/lecard.png'" alt="" /> </dt>
			<dd>乐卡</dd>
		</dl>
		<dl>
			<dt><img v-lazy="'../../../static/assets/img/zds/mine.png'" alt="" /> </dt>
			<dd>我的</dd>
		</dl>
	</div>
</template>

<script>
	
	export default {
		data(){
			return {
				
			}
		},
		mounted:function(){
			var arr = ["consume", "class", "cart", "lecard", "mine"];
			$(".footer dl").each(function(i) {
				this.onclick = function() {
					var index = $(".footer dl").index(this);
					var acIdx = $(".footer dl").index($(".footer dl.active"))
					$(".footer dl.active").find("dt img").attr("src", "https://cres.fenqile.cn/mobile/img/nav/list/" + arr[acIdx] + ".png");
					$(".footer dl").removeClass("active");
					$(this).addClass("active");
					$(this).find("dt img").attr("src", "https://cres.fenqile.cn/mobile/img/nav/list/" + arr[index] + "_on.png");
				}
			});
		}
	}
</script>

<style scoped="scoped">
	.footer {
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		font-size: 0.16rem;
		background: #fafafa;
		border-top: 1px solid #d9d9d9;
		z-index: 999;
		padding: 0.05rem 0;
	}
	
	.footer dl {
		flex: 1;
		color: #666666;
	}
	
	.footer dl dt {
		text-align: center;
	}
	
	.footer dl dt img {
		width: 0.24rem;
		height: 0.24rem;
		display: block;
		margin: 0 auto;
	}
	
	.footer dl dd {
		text-align: center;
	}
	
	.footer dl.active {
		color: #3B9BFF;
	}

</style>