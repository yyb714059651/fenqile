<template>
    <div>

      <div class="banner">
        <a href="#">
          <router-link :to='{name:"tuijian"}'><img src="../../assets/img/d1.jpg" style="width: 100%"></router-link>
        </a>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">


    export default {
        components: {}
    }
</script>

<style scoped>
  .banner{
    display: block;
    width:100%;
    margin-top:.08rem;
    background-size:cover;
    max-width: 7.5rem;
  }
</style>
