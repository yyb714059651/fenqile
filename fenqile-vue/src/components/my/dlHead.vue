<template>
	<header>
        <div>
           <p><span>设置</span><i class="iconfont icon-3"></i></p> 
        </div>
    </header>
</template>

<script>
</script>

<style scoped>
	header{
    width: 100%;
    height: 0.6rem;
    background:url("../../assets/img/hpd/top_hd.png") no-repeat center;
    background-size: 100% 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
}
header p{
    width: 1rem;
    height: 100%;
    line-height: 0.6rem;
    font-size: 0.18rem;
    position: absolute;
    right: 0.1rem;
    top: 0;
    text-align:right;
    color: #fff;
}
header div p .iconfont{
    font-size: 0.18rem;
    margin-left: 0.15rem;
}
</style>