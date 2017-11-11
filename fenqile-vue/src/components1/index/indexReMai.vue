<template>
	<div class="hotSell">
		<p class="title">今日热卖</p>

		<ul>
			<li>
				<dl>
					<dt><img v-lazy="'../../../static/assets/img/zds/hBoGAFl3G5qAWA_iAACX0F3iAbU142_360x360.jpg'" alt="" /></dt>
					<dd>
						<p>佳能（Canon） EOS 6D Mark II 单反相机</p>
						<div>
							<span>￥12099</span>
							<i></i>
						</div>
						<b>月供 ¥437.41起</b>
					</dd>
				</dl>
			</li>
			<li>
				<dl>
					<dt><img v-lazy="'../../../static/assets/img/zds/hBoGAFl3G5qAWA_iAACX0F3iAbU142_360x360.jpg'" alt="" /></dt>
					<dd>
						<p>FIIL Diva 头戴式无线降噪耳机 智能调噪 智能启停 智能语音搜歌 滑动触控 佩戴舒适</p>
						<div>
							<span>￥12099</span>
							<i></i>
						</div>
						<b>月供 ¥437.41起</b>
					</dd>
				</dl>
			</li>
			<li>
				<dl>
					<dt><img v-lazy="'../../../static/assets/img/zds/hBoGAFl3G5qAWA_iAACX0F3iAbU142_360x360.jpg'" alt="" /></dt>
					<dd>
						<p>佳能（Canon） EOS 6D Mark II 单反相机</p>
						<div>
							<span>￥12099</span>
							<i></i>
						</div>
						<b>月供 ¥437.41起</b>
					</dd>
				</dl>
			</li>
			<li>
				<dl>
					<dt><img v-lazy="'../../../static/assets/img/zds/hBoGAFl3G5qAWA_iAACX0F3iAbU142_360x360.jpg'" alt="" /></dt>
					<dd>
						<p>佳能（Canon） EOS 6D Mark II 单反相机</p>
						<div>
							<span>￥12099</span>
							<i></i>
						</div>
						<b>月供 ¥437.41起</b>
					</dd>
				</dl>
			</li>
			<li>
				<dl>
					<dt><img v-lazy="'../../../static/assets/img/zds/hBoGAFl3G5qAWA_iAACX0F3iAbU142_360x360.jpg'" alt="" /></dt>
					<dd>
						<p>佳能（Canon） EOS 6D Mark II 单反相机</p>
						<div>
							<span>￥12099</span>
							<i></i>
						</div>
						<b>月供 ¥437.41起</b>
					</dd>
				</dl>
			</li>
			<li>
				<dl>
					<dt><img v-lazy="'../../../static/assets/img/zds/hBoGAFl3G5qAWA_iAACX0F3iAbU142_360x360.jpg'" alt="" /></dt>
					<dd>
						<p>佳能（Canon） EOS 6D Mark II 单反相机</p>
						<div>
							<span>￥12099</span>
							<i></i>
						</div>
						<b>月供 ¥437.41起</b>
					</dd>
				</dl>
			</li>
			<li>
				<dl>
					<dt><img v-lazy="'../../../static/assets/img/zds/hBoGAFl3G5qAWA_iAACX0F3iAbU142_360x360.jpg'" alt="" /></dt>
					<dd>
						<p>佳能（Canon） EOS 6D Mark II 单反相机</p>
						<div>
							<span>￥12099</span>
							<i></i>
						</div>
						<b>月供 ¥437.41起</b>
					</dd>
				</dl>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped="scoped">
	.hotSell {
		font-size: 0.12rem;
		background: #fff;
		padding: 0 0.1rem;
	}
	
	.hotSell .title {
		line-height: 0.7rem;
		font-size: 0.17rem;
		text-align: center;
		background: white;
	}
	
	.hotSell ul {
		margin-bottom: 0.56rem;
	}
	
	.hotSell ul li {
		height: 1.56rem;
		border-bottom: 1px solid #e8eaea;
	}
	
	.hotSell ul li dl {
		display: flex;
	}
	
	.hotSell ul li dl dt {
		width: 1.56rem;
		height: 1.56rem;
	}
	
	.hotSell ul li dl dt img {
		width: 1.08rem;
		height: 1.08rem;
		margin: 0.24rem;
	}
	
	.hotSell ul li dl dd {
		flex: 1;
		padding: 0.24rem 0.1rem;
		line-height: 0.2rem;
	}
	
	.hotSell ul li dl dd p {
		height: 0.36rem;
		line-height: 0.18rem;
		text-overflow: ellipsis;
		color: black;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.hotSell ul li dl dd div {
		display: flex;
		margin-top: 0.2rem;
	}
	
	.hotSell ul li dl dd div span {
		color: #b7babf;
		flex: 1;
	}
	
	.hotSell ul li dl dd div i {
		color: black;
	}
	
	.hotSell ul li dl dd b {
		color: #579de7;
	}
</style>