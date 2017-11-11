<template>
    <div>
        <router-link :to='{name:"Zc"}'><footer class="dlfooter">
     			 <a href="###">没有账号？极速注册</a>
     	 </footer></router-link>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {

    }
</script>

<style scoped>

.dlfooter{
	background: #FFF;
	margin:0.7rem 0 0;
	border-top: 1px solid #ccc;
	position: fixed;
	height: 0.7rem;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 10000;
}
.dlfooter a{
	color: #3B9BFF;
	display: block;
	padding: 0.1rem 0;
	text-align: center;
	font-size: 0.15rem;
}
</style>
