<template>
	<div class="footer">
		<ul>
			<li>月供<span>100</span></li>
			<li>商家</li>
			<li>加入购物车</li>
			<li class="lijigoumai">立即购买</li>
		</ul>
	</div>
</template>

<script>
	
	export default {
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped="scoped">
.footer{
	width: 100%;
	height: 0.6rem;
	position: fixed;
	left: 0;
	bottom: 0;
	z-index: 1000;
	background: #fff;
	font-size: 0.2rem;
}
.footer ul{
	display: flex;
}
.footer ul li{
	text-align: center;
	line-height: 0.6rem;
	width: 25%;
}
.footer ul .lijigoumai{
	background: red;
}

</style>