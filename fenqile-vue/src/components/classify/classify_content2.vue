<template>
    <div>
      <section class="category-b">
        <div class="floor-title">
          便民生活
          <span></span>
        </div>
        <ul class="floor-nav-four">
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d18.png" alt="" >
            </a>
            <p>话费/流量</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d19.png" alt="" >
            </a>
            <p>游戏充值</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d20.png" alt="" >
            </a>
            <p>娱乐充值</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d3.png" alt="" >
            </a>
            <p>话费/流量</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d2.jpg" alt="" >
            </a>
            <p>火车票</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d21.png" alt="" >
            </a>
            <p>特价机票</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d22.png" alt="" >
            </a>
            <p>取现</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d25.png">
            </a>
            <p>乐花借钱</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d26.png" alt="" >
            </a>
            <p>驾校</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d27.png" alt="" >
            </a>
            <p>保险</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d28.png" alt="" >
            </a>
            <p>电子礼品卡</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d29.png" alt="" >
            </a>
            <p>教育</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d30.png" alt="" >
            </a>
            <p>桔子理财</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d31.png" alt="" >
            </a>
            <p>演唱会</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d32.png" alt="" >
            </a>
            <p>加油卡充值</p>
          </li>
        </ul>
      </section>
    </div>
</template>

<script type="text/ecmascript-6">


    export default {
        components: {}
    }
</script>

<style scoped>
  .category-b{
    background: #fff;
    margin-top:.08rem;
    padding-bottom:.25rem;
    overflow: hidden;
    height:100%;
  }
  .category-b .floor-title{
    position: relative;
    height: .48rem;
    line-height:.48rem;
    text-align: center;
    color: rgba(48,64,80,.6);
    font-size:.14rem;
  }
  .category-b .floor-title span{
    position: absolute;
    left:0;
    bottom:-1px;
    z-index:1;
    display: block;
    width:100%;
    box-sizing: border-box;
    transform: scaleY(0.5);
    transform-origin: 0 0;
    border-top:1px solid #000;
  }
  .category-b .floor-nav-four ul{
    width:100%;
    height:100%;
  }
  .category-b .floor-nav-four li{
    width:25%;
    float: left;
    margin-top:.25rem;
    text-align: center;
  }
  .category-b .floor-nav-four li a{
    display: block;
    color: #000;
  }
  .category-b .floor-nav-four li img{
    margin-bottom:.09rem;
  }
  .category-b .floor-nav-four li p{
    margin-top:0.04rem;
    width:100%;
    font-size:.12rem;
    height:.16rem;
    line-height:.16rem;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: normal;
  }
  .floor-nav-four img{
    width:.3rem;
    height:.3rem;
  }

</style>
