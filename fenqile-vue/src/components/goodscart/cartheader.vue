<template>
        <header>
        购物车
        <span>编辑</span>
    </header>
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
header{
    width: 100%;
    height: 0.44rem;
    position: fixed;
    left: 0;
    top: 0;
    background: #fff;
    text-align: center;
    font-size: 0.2rem;
    line-height: 0.44rem;
}
header span{
    position: fixed;
    right: 0.2rem;
    top: 0;
}

</style>
