<template>
    <div class="tab_nav">
        <ul>
            <li class="active">
                <a href="###">店铺首页</a>
            </li>
            <li>
                <a href="###">全部商品</a>
            </li>
            <li>
                <a href="###">店铺上新</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*导航*/
.tab_nav{
    width: 100%;
    height: 0.45rem;
    background: #fff;
}
.tab_nav ul{
    width: 100%;
    height: 0.45rem;
    display: flex;
}
.tab_nav ul li{
    width: 33.3%;
    height: 100%;
    text-align: center;
    line-height: 0.45rem;
    font-size: 0.14rem;
}
.tab_nav .active{
    border-bottom: 2px solid #46a0ff;
    
}
.tab_nav .active a{
    color: #46a0ff;
}
</style>
