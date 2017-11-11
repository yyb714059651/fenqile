<template>
	<div>
		<tuijian-head></tuijian-head>
		<tuijian-content></tuijian-content>
	</div>
	
</template>

<script>
	import tuijianContent from "../components/tuijian/tuijianContent"
	import tuijianHead from "../components/tuijian/tuijianHead"
	// import "../assets/css/public.css"
	
	export default{
		components:{
			tuijianContent,
			tuijianHead
		}
	}
</script>

<style>
</style>