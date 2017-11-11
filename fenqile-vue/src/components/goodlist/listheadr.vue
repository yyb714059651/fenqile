<template>
    <div class="fzy_header_top">
        <a href="javascript:;" class="fzy_go_back"></a>
        <h2>分期乐Apple产品专营店</h2>
        <a href="javascript:;"></a>
    </div>
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
/*头部店铺标题*/
.fzy_header_top{
    width: 100%;
    height: 0.44rem;
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
}
.fzy_header_top .fzy_go_back{
    display: block;
    content: ' ';
    width: 0.18rem;
    height: 0.18rem;
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
