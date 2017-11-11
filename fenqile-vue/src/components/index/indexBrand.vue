<template>
	<div class="brand">
		<p class="title">品牌特卖</p>

		<div class="oneBrand">
			<a href="###"><img v-lazy="'../../../static/assets/img/zds/wScJAFnuujeAYKojAAFozcrQpoU018_1500x800.jpg'" alt="" /></a>
		</div>
		<div class="oneBrand">
			<a href="###"><img v-lazy="'../../../static/assets/img/zds/wScJAFnvBw-ASp12AAGzQB7TJd8411_1500x800.jpg'" alt="" /></a>
		</div>
		<div class="oneBrand">
			<a href="###"><img v-lazy="'../../../static/assets/img/zds/wicJAFnuq92ALn7BAAGb_gon7_E809_1500x800.jpg'" alt="" /></a>
		</div>
		<div class="oneBrand">
			<a href="###"><img v-lazy="'../../../static/assets/img/zds/wScJAFntR_yAW-3FAAFE9iA_mTQ046_1500x800.jpg'" alt="" /></a>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped="scoped">
	.brand {
		background: #fff;
	}
	
	.brand .title {
		line-height: 0.7rem;
		font-size: 0.17rem;
		text-align: center;
		background: white;
	}
	
	.brand .oneBrand {
		width: 100%;
		height: 2rem;
		margin-bottom: 0.1rem;
	}
	
	.brand .oneBrand a img {
		width: 100%;
		height: 100%;
	}
</style>