<template>
    <div>
      <div class="banner">
        <div class="bg">
          <img src="../../assets/img/d0.png">
        </div>
        <div class="z">
          <p class="t">仅差一步</p>
          <p class="ct">最高获得￥50,000额度</p>
          <p class="b">继续开通</p>
        </div>
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
    width:100%;
    height:100%;
    position: relative;
    top:0;
    left:0;
  }
  .bg{
    background-size: 100% 100%;
    width:3.75rem;
    height:2.5rem;
    display: block;

    padding:0;
  }
  .bg img{
    width:100%;
    height:100%;
  }
  .banner .z{
    position:absolute;
    top:.48rem;
    height:2rem;
    margin-left:.28rem;
  }
  .banner .z .t{
    font-size:.24rem;
    color: rgb(23, 81, 152);
    margin-bottom:.08rem;
  }
  .ct{
    font-size:.13rem;
    color: rgb(23, 81, 152);
    margin-bottom:.32rem;
  }
  .banner .z .b{
    width:.76rem;
    height:.28rem;
    border-radius:3px;
    line-height:.28rem;
    background-color: rgb(68, 160, 255);
    border-color:rgb(4, 135, 227);
    border-style:solid;
    border-width:.5px;
    font-size:.12rem;
    text-align: center;
    align-items: center;
    color:rgb(255, 255, 255);
  }
</style>
