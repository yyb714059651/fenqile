<template>
    <div class="fzy_header_top">
        <a href="javascript:;" class="fzy_go_back"></a>
        <h2>商品详情</h2>
        <a href="javascript:;" class="iconfont icon-gouwuche">
            <i class="cart_num"></i>
        </a>
    </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*头部店铺信息*/
.fzy_header_top{
    width: 100%;
    height: 0.44rem;
    background: #fff;
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 4;
    background: #fff;
}
.fzy_header_top h2{
    width: 72%;
    height: 100%;
    margin: 0 auto;
    line-height: 0.44rem;
    text-align: center;
    font-size: 0.18rem;
    color: #394050;
    text-indent: 0.3rem;
}
.fzy_header_top a{
    display: inline-block;
    width: 14%;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.44rem;
    color: #ccc;
    position: relative;
}
.cart_num{
    width: 0.07rem;
    height: 0.07rem;
    border-radius: 100%;
    background: red;
    display: block;
    position: absolute;
    right: .12rem;
    top: .1rem;
}
.fzy_header_top .fzy_go_back{
    display: block;
    content: ' ';
    width: 0.2rem;
    height: 0.2rem;
    border-style: solid;
    border-color: #a7afc2;
    border-width: 1px 1px 0 0;
    left: 0.15rem;
    top: 0.13rem;
    position: absolute;
    border-color: #a7afc2;
    border-width: 1px 1px 0 0;
    -ms-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
}


</style>
