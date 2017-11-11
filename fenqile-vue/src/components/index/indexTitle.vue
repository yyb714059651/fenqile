<template>
	<p class="title">{{msg}}</p>
</template>

<script>
	export default {
		props: ["msg"],
		data() {
			/*return {
				msg:"精选活动"
			}*/
		}
	}
</script>

<style scoped="scoped">
	.title {
		line-height: 0.7rem;
		font-size: 0.17rem;
		text-align: center;
		background: white;
	}
</style>