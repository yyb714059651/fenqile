<template>
    <div>
       <header class="Zchead">
          <router-link :to='{name:"Dl"}'><a href="###" class="iconfont icon-mjiantou-copy"></a></router-link>
          <span>注册分期乐账号</span>
       </header>
       <div class="register-head">
           <div class="head-img">
               <img src="../../assets/img/yybimg/login_logo--2479b32e49.png">
           </div>
       </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {

    }
</script>

<style scoped>
.Zchead{
	top:0;
	left:0;
	background: #3B9BFF;
	height:0.4rem;
	display: flex;
	position: relative;
}
.Zchead a{
	position: absolute;
	color: white;
	display: block;
	width:0.4rem;
	font-size: 0.3rem;
	line-height:0.4rem;
}
.Zchead span{
	color: white;
	display: block;
	flex: 1;
	line-height:0.4rem;
	text-align: center;
	font-size: 0.15rem;
}
.register-head{
	background:#3b9bff;
	height:1.98rem;
}
.head-img{
	margin: 0 auto;
	height:0.7rem;
	width: 1.3rem;
	vertical-align: middle;
	padding-top:0.19rem;
}
.head-img img{
	width:100%;
	height:auto;
}
</style>
