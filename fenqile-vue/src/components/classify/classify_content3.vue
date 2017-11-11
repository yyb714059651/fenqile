<template>
    <div>
      <div id="r22" class="js-g-fragment-content  fui-f-ov">
        <div class="shop-show-wrap show-left ">
          <section class="category-floor">
            <div class="floor-title">
              电脑整机
              <span></span>
            </div>
            <ul class="floor-nav-three">
              <router-link :to='{name:"list"}'><li><a href="#"><img src="../../assets/img/d4.png" alt=""><p>游戏本</p></a></li></router-link>
              <router-link :to='{name:"list"}'><li><a href="#"><img src="../../assets/img/d33.png" alt=""><p>笔记本</p></a></li></router-link>
              <router-link :to='{name:"list"}'><li><a href="#"><img src="../../assets/img/d34.png" alt=""><p>台式机</p></a></li></router-link>
              <router-link :to='{name:"list"}'><li><a href="#"><img src="../../assets/img/d35.png" alt=""><p>一体机</p></a></li></router-link>
            </ul>
          </section>
          <section class="category-floor">
            <div class="floor-title">
              电脑配件
              <span></span>
            </div>
            <ul class="floor-nav-three">
              <router-link :to='{name:"list"}'><li><a href="#"><img src="../../assets/img/d36.png" alt=""><p>组装电脑</p></a></li></router-link>
              <router-link :to='{name:"list"}'><li><a href="#"><img src="../../assets/img/d37.png" alt=""><p>显示器</p></a></li></router-link>
              <router-link :to='{name:"list"}'><li><a href="#"><img src="../../assets/img/d38.png" alt=""><p>SSD固态硬盘</p></a></li></router-link>
              <router-link :to='{name:"list"}'><li><a href="#"><img src="../../assets/img/d39.png" alt=""><p>内存</p></a></li></router-link>
              <router-link :to='{name:"list"}'><li><a href="#"><img src="../../assets/img/d40.png" alt=""><p>显卡</p></a></li></router-link>
              <router-link :to='{name:"list"}'><li><a href="#"><img src="../../assets/img/d41.png" alt=""><p>主板</p></a></li></router-link>
              <router-link :to='{name:"list"}'><li><a href="#"><img src="../../assets/img/d47.png" alt=""><p>CPU</p></a></li></router-link>
              <router-link :to='{name:"list"}'><li><a href="#"><img src="../../assets/img/d43.png" alt=""><p>硬盘</p></a></li></router-link>
              <router-link :to='{name:"list"}'><li><a href="#"><img src="../../assets/img/d45.png" alt=""><p>机箱</p></a></li></router-link>
              <router-link :to='{name:"list"}'><li><a href="#"><img src="../../assets/img/d46.png" alt=""><p>散热器</p></a></li></router-link>
            </ul>
          </section>
          <section class="category-floor">
            <div class="floor-title">
              热卖大牌
              <span></span>
            </div>
            <ul class="floor-nav-three">
              <li><a href="#"><img src="../../assets/img/d6.png" alt=""><p>游戏本</p></a></li>
              <li><a href="#"><img src="../../assets/img/d53.png" alt=""><p>游戏本</p></a></li>
              <li><a href="#"><img src="../../assets/img/d54.png" alt=""><p>游戏本</p></a></li>
              <li><a href="#"><img src="../../assets/img/d55.png" alt=""><p>游戏本</p></a></li>
              <li><a href="#"><img src="../../assets/img/d56.png" alt=""><p>游戏本</p></a></li>
              <li><a href="#"><img src="../../assets/img/d57.png" alt=""><p>游戏本</p></a></li>
              <li><a href="#"><img src="../../assets/img/d58.png" alt=""><p>游戏本</p></a></li>
              <li><a href="#"><img src="../../assets/img/d59.png" alt=""><p>游戏本</p></a></li>
              <li><a href="#"><img src="../../assets/img/d60.png" alt=""><p>游戏本</p></a></li>
            </ul>
          </section>
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
  .category-floor img{
    width:.52rem;
    height: .52rem;
  }
  .fui-mask-fadeinright{

    bottom: 0;
  }
  .fui-mask-fadein, .fui-mask-fadeinright{
    width:100%;
    position:absolute;
    top:0;
    left:0;
    right:0;
  }
  .fui-mask-fadeinright .fui-mask{
    animation: fuiFadeIn .5s .2s ease both;
  }
  .fui-mask{
    background-color: rgba(0,0,0,.5);
    top:0;
    left:0;
    width:100%;
    height:100%;
  }
  .fui-mask-fadeinright .fui-f-ov>div{
    z-index:1000;
    animation: fuiFadeInRight .5s .2s ease both;
  }
  .shop-show-wrap{
    width:80%;
    height:100%;
    position:fixed;
    background:#f5f7f6;
    right:-80%;
    top: 0;
    overflow-y: scroll;
    z-index: 1002;
  }
  .shop-show-wrap .category-floor:first-child{
    margin-top: 0;
  }
  .category-floor{
    background: #fff;
    padding-bottom:0.25rem;
    overflow: hidden;
  }
  .category-floor .floor-title{
    position: relative;
    height:.48rem;
    line-height:.48rem;
    text-align: center;
    color: rgba(48,64,80,.6);
    font-size:.14rem;
  }
  .category-floor .floor-nav-three{
    background: #fff;
    margin-top: 0.03rem;
    font-size:.12rem;
  }
  .category-floor .floor-nav-three li{
    width:33.3333%;
  }
  .category-floor .floor-nav-three li{
    float: left;
    margin-top:.25rem;
    text-align: center;
  }
  .floor-nav-three li p{
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
