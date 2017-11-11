<template>
	<div>
		<!-- 状态共享内容 -->
		<!-- {{this.$store.state.vipname}} -->
		<!-- <div  @click="mota">改变</div> -->
		<dl-head></dl-head>
		<zhuantai></zhuantai>	
		<dl-htt></dl-htt>
		<!-- <index-footer></index-footer> -->
	</div>
</template>

<script>
	import dlHead from "../components/my/dlHead.vue"
	import zhuantai from "../components/my/myzhuantai.vue"
	import dlHtt from "../components/my/dlNavs.vue"
	// import indexFooter from "../components/common/indexFooter"
	// import "../assets/css/public.css"
	import "../assets/iconfont/iconfont.css"
	export default{
		components:{
			dlHead,
			zhuantai,
			dlHtt
		},
//   methods:{
//     mota:function(){
//         this.$store.dispatch("user",{username:"123"});
//     }
//   }
	}
</script>

<style>
</style>