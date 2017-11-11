<template>
	<div>
		<div class="tou">
			懒加载组件头部
		</div>
		<div class="body">
			懒加载组件身体
		</div>
		<div class="foot">
			懒加载组件低部
		</div>
	</div>
</template>


<script>
	export default{
		
	}
</script>


<style scoped="scoped">
	*{font-size:0.3rem}
	.tou{
		width:100%;
		height:2.5rem;
		background: red;
	}
	.body{
		width:100%;
		height:2.5rem;
		background: green;
	}
	.foot{
		width:100%;
		height:2.5rem;
		background: blue;
	}
</style>