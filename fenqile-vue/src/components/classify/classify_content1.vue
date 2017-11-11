<template>
    <div>
      <section class="category-floor">
        <div class="floor-title">
          分期消费
          <span></span>
        </div>
        <ul class="floor-nav-four" id="">
          <li>
            <a href="#">
              <img src="../../assets/img/d2.png" alt="" id="r">
            </a>
            <p>手机</p>
          </li>
          <li>
            <a href="#" class="js-item" id="right">
              <img src="../../assets/img/d7.png" alt="" >
            </a>
            <p>电脑</p>
          </li>
          <li>
            <a href="#" class="js-item" id="showRight">
              <img src="../../assets/img/d8.png" alt="" >
            </a>
            <p>平板电脑</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d9.png" alt="" >
            </a>
            <p>美装洗护</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d10.png" alt="" >
            </a>
            <p>运动鞋服</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d11.png" alt="" >
            </a>
            <p>家电</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d17.png" alt="" >
            </a>
            <p>名表</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d12.png" alt="" >
            </a>
            <p>珠宝首饰</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d13.png" alt="" >
            </a>
            <p>服饰鞋帽</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d14.png" alt="" >
            </a>
            <p>箱包礼品</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d15.png" alt="" >
            </a>
            <p>户外体育</p>
          </li>
          <li>
            <a href="#" class="js-item">
              <img src="../../assets/img/d16.png" alt="" >
            </a>
            <p>乐器</p>
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
  .gory-floor{
    background: #fff;
    margin-top:.08rem;
    padding-bottom:.25rem;
    overflow: hidden;
    height:8.21rem;
  }
  .category-floor{
    background: #fff;
    width:100%;
    height:3.5rem;
  }
  .category-floor .floor-title{
    position: relative;
    height: .48rem;
    line-height:.48rem;
    text-align: center;
    color: rgba(48,64,80,.6);
    font-size:.14rem;

  }
  .category-floor .floor-title span{
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
  .category-floor .floor-nav-four li{
    width:25%;
    float: left;
    margin-top:.25rem;
    text-align: center;
  }
  .category-floor .floor-nav-four li a{
    display: block;
    color: #000;
  }
  .category-floor .floor-nav-four li img{
    margin-bottom:.09rem;
  }
  .category-floor .floor-nav-four li p{
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

</style>
