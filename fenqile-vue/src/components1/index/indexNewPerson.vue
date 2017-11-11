<template>
	<div class="newClient">
		<!--div里面放图片需要把图片display：block；否则会有默认的padding-->
		<img v-lazy="'../../../static/assets/img/zds/xinrenli.png'" alt="" />
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped="scoped">
	.newClient {
		width: 100%;
		height: 1.3rem;
		margin-bottom: 0.1rem;
	}
	
	.newClient img {
		display: block;
		width: 100%;
		height: 100%;
	}
</style>