<template>
    <div>
      <ul class="fw">
        <li>
          <a href="#">
            <img src="../../assets/img/d22.png" alt="">
            <p class="p1">取现</p>
            <p class="p2">100起借，到账快</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/img/d1.png" alt="">
            <p class="p1">乐还款</p>
            <p class="p2">优惠分期还信用卡</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/img/d25.png" alt="">
            <p class="p1">乐花借钱</p>
            <p class="p2">按日计息，随借随还</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/img/d25.png" alt="">
            <p class="p1">借得到</p>
            <p class="p2">最高可借100，000</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/img/d48.png" alt="">
            <p class="p1">购物特权</p>
            <p class="p2">欧莱雅洗面奶仅需9.9元</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/img/d49.png" alt="">
            <p class="p1">出行特权</p>
            <p class="p2">高铁贵宾休息室9.9一次</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/img/d50.png" alt="">
            <p class="p1">酒店特权</p>
            <p class="p2">铂涛会籍免费领</p>
          </a>
        </li>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">


    export default {
        components: {}
    }
</script>

<style scoped>
  .fw li{
    background: #fff;
    border-left:1px solid #ddd;
    border-bottom:1px solid #ddd;
    text-align: center;
    float: left;
    width:49.87%;
  }

  /***选择奇数行*******/
  .fw li:nth-of-type(odd){
    border-left:0px solid #ddd;
  }


  .fw li img{
    width:.5rem;
    height:.5rem;
    margin-top:.04rem;
    margin-bottom:.04rem;
  }
  .fw li .p1{
    padding-top:0.04rem;
    padding-bottom:.04rem;
    font-size:.12rem;
    color: #000;
  }
  .fw li .p2{

    padding-bottom:.04rem;
    font-size:.12rem;
    color: #ccc;
  }

</style>
