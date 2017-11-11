<template>
    <div class="cart_shop">
        <ul class="cart">
            <cartlist></cartlist>    
        </ul>
    </div>
</template>

<script>
import cartlist from "./cartlist.vue"
export default {
    components:{
        cartlist
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.cart_shop{
    width: 100%;
    margin-top: 0.55rem;
}
.cart_shop .iconfont{
    font-size:0.18rem;
}
.cart_shop .cart{
    width: 100%;
}
.cart_shop .cart li {
    width: 100%;
    font-size: 0.16rem;
    padding: 0 0.1rem;
    margin-top: 0.2rem;
    box-sizing: border-box;
}
.cart_shop .cart li>div{
    display: flex;
    justify-content: space-between;
    padding: 0.1rem 0;
    background: #fff;
    border-bottom: 1px solid #ccc;
}
.cart_shop .cart li div p .icon-duihao{
    color: #2196f3;
}
.lingjuan span:nth-child(1){
    border-right: 1px solid #ccc;
    padding: 0 0.1rem;
}
.lingjuan span:nth-child(2){
    padding: 0 0.1rem;    
}
.cart_shop .cart li dl{
    width: 100%;
    font-size: 0.15rem;
    background: #fff;
    padding: 0.2rem 0;
}
.cart_shop .cart li dl dt{
    width: 30%;
    height: 1rem;
    float: left;
    display: flex
}
.cart_shop .cart li dl dt i{
    display: inline-block;
    height: 1rem;
    line-height: 1rem;
    margin-right: 0.1rem;
}
.cart_shop .cart li dl dt span{
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    background: #999;
    margin-top: 0.1rem;
}
.cart_shop .cart li dl dd{
    float: right;
    width: 70%;
    position: relative;
}

.cart_shop .cart li dl dd .title{
    display: flex;
    justify-content: space-between;
}
.cart_shop .cart li dl dd .title >p{
    width: 85%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #000;
}
.cart_shop .cart li dl dd div>span{
    margin-right: 0.2rem;
}
.cart_shop .cart li dl dd .guige{
    color: #ccc;
}
.cart_shop .cart li dl dd .price{
    margin-top: .25rem;
    font-size: .2rem;
    color: red;
}
.shuru{
    width: 100%;
    height: 100%;
    position: absolute;
    background: #fff;
    left: 0;
    top: 0;
    z-index: 10;
    display: flex;
    /* display: none; */
}
.shuru .input_caozuo{
    width: 75%;
}
.shuru .input_caozuo p:nth-child(1){
    margin-top: 0.1rem;    
    border:1px solid #ccc;
    display: flex
}
.shuru .input_caozuo p:nth-child(2){
    margin-top: 0.15rem;
    border:1px solid #ccc;
}
.shuru .input_caozuo input{
    border: none;
    outline: none;
    width: 1rem;
    text-align: center;
    font-size: 0.2rem;
}
.shuru .input_caozuo .jiajian span{
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    text-align: center;
    line-height: 0.3rem;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
.shuru p{
    width:1.6rem; 
    height: 0.3rem;
}
.delete{
    width: 25%;
    background: #0487e3;
    color: white;
    font-size: 0.2rem;
}
.delete p{
    height: 100%;
    width: 0.2rem;
    margin: 0 auto;
    line-height: 0.4rem;
    text-align: center;
}
</style>
