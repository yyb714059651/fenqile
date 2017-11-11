<template>
    <footer>
        <ul class="footer_box">
            <li><a href="###">商品分类</a></li>
            <li><a href="###">店铺详情</a></li>
            <li><a href="###">店铺活动</a></li>
        </ul>
    </footer>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*底部*/
footer{
    width: 100%;
    height: 0.54rem;
    position: fixed;
    left: 0;
    bottom: 0;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: #fff;
}
.footer{
    width: 100%;
    height: 100%;
}
ul.footer_box li{
    width: 33.333333%;
    float: left;
    text-align: center;
    line-height: 0.54rem;
    font-size: 0.18rem;
    border-right: 1px solid rgba(0,0,0,.2);
    box-sizing: border-box;
}
ul.footer_box li:nth-child(3){
    border: none;
}

</style>
