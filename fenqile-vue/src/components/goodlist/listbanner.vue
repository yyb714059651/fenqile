<template>
    <div class="fzy_pop_banner">
        <div class="fzy_pop_banner_zzc"></div>
        <img src="../../assets/img/fzy/dianpubackground1.png" alt="背景图">
        <div class="pop_banner_tit">
            <div class="pop_banner_tit_left">
                <span class="dpbackground"></span>
                <h3>分期乐Apple产品专营店</h3>
                <strong>自营</strong>
            </div>
            <div class="pop_banner_tit_right">
                <div class="collect">
                    <p>20104</p>
                    <p>收藏数</p>
                </div>
                <div class="collect">
                    <i class="iconfont ">❤</i>
                    <span>收藏</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*店铺标题背景*/
.fzy_pop_banner{
    width: 100%;
    height: 1.2rem;
    background-size: cover;
    position: relative;
}
.fzy_pop_banner_zzc{
    width: 100%;
    height: 100%;
    background: url(../../assets/img/fzy/banner_mask--eb933544c5.png)no-repeat center;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
}
.fzy_pop_banner img{
    display: block;
    vertical-align: middle;
    width: 100%;
    height: 100%;
}

.pop_banner_tit{
    width: 100%;
    padding: 0 0.1rem;
    height: 0.34rem;
    display: flex;
    position: absolute;
    bottom: 0.2rem;
    left: 0;
    box-sizing: border-box;
}
.pop_banner_tit_left{
    display: flex;
    width: 56%;
    height: 100%;
    position: relative;
}
.pop_banner_tit_right{
    width: 40%;
    display: flex
}
.pop_banner_tit_left strong{
    width: 0.3rem;
    height: 0.18rem;
    position: absolute;
    left: 0.4rem;
    bottom: -0.15rem;
    background: #ed5f86;
    text-align: center;
    line-height: 0.18rem;
    font-size: 0.1rem;
    color: #fff;
    border-radius: 4px;
}
.pop_banner_tit_right .collect{
    font-size: 0.1rem;
    color: #fff;
    height: 100%;
}
.pop_banner_tit_right .collect:nth-child(1){
    width: 40%;
    border-left:1px solid #fff;
    text-align: center; 
    font-size: 0.1rem;
}
.pop_banner_tit_right .collect:nth-child(2){
    width: 0.75rem;
    text-align: center;
    height: 80%;
    line-height:0.3rem; 
    border-radius: 4px;
    background: #ffce35;
}
.dpbackground{
    width: 0.34rem;
    height: 0.34rem;
    display: block;
    background: url(../../assets/img/fzy/hBoGAFkQPfyATYkjAAANCtTdgMY556.jpg)no-repeat center;
    background-size: cover;
}
.pop_banner_tit h3{
    font-size: 0.15rem;
    height: 0.34rem;
    line-height: 0.34rem;
    color: #fff;
}
</style>
