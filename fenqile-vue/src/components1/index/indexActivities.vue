<template>
	<div class="activity">
		<index-title></index-title>
		<one-activity></one-activity>
		<one-activity></one-activity>
	</div>
</template>

<script>
	import indexTitle from "./indexTitle.vue"
	import oneActivity from "./indexOneActivity.vue"

	export default {
		components: {
			oneActivity,
			indexTitle
		}
	}
</script>

<style scoped="scoped">
	.activity {
		font-size: 0.12rem;
	}
</style>