<template>
	<div class="idxHead">
		<div class="search">
			<i class="iconfont icon-sousuo"></i>
			<input type="text" placeholder="" />
		</div>
		<i class="iconfont icon-huiyuanxiangqingye-duanxin"></i>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped="scoped">
	.idxHead {
		display: flex;
		line-height: 0.3rem;
		padding: 0.1rem 0.12rem;
		box-sizing: border-box;
		background: white;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 100;
	}
	
	.idxHead .search {
		flex: 1;
		display: flex;
		overflow: hidden;
		background: #ebeced;
		border-radius: 0.04rem;
		height: 0.3rem;
		line-height: 0.3rem;
	}
	
	.idxHead .search i {
		font-size: 0.16rem;
		margin: 0 0.12rem;
	}
	
	.idxHead .search input {
		outline: none;
		border: none;
		background: none;
		flex: 1;
	}
	
	.idxHead .icon-huiyuanxiangqingye-duanxin {
		margin-left: 0.2rem;
		font-size:0.16rem;
	}
</style>