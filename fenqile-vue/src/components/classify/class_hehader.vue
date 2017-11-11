<template>
    <div>
      <div class="header">
        <div class="search-warp">
          <i class="search-icon">
            <img src="../../assets/img/d61.png" alt="">
          </i>
          <div class="search-inner">
            <input type="text" class="search-text" placeholder="iPhone X来了，苹果领券减100">
          </div>
          <div class="delete-txt-icon"></div>

        </div>
        <a href="#" class="message">
          <img src="../../assets/img/d62.png" alt="">
          <i class="new-message"></i>
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
  .header{
    display: flex;
    -webkit-box-align:center;
    padding: 0 0 0 .12rem;
    height: .43rem;
  }
  .header .search-warp{
    margin-top:0.065rem;
    display:-webkit-box;
    width:100%;
    flex: 1;
    background-color: rgba(57,64,80,.1);
    height:.3rem;
    display: flex;
    box-align:center;
    border-radius: .04rem;

  }
  .search-icon{
    margin-top:3%;
    display: block;
    width:.14rem;
    height: .14rem;
    margin-left:.12rem;
    margin-right:.08rem;
    background-size: contain;
    vertical-align:middle;

  }
  .search-icon img{
    margin-top:2%;
  }
  .header .search-wrap .search-inner{
    flex: 1;
    position: relative;
    top:0;
    left:0;
  }
  .header .search-warp .search-text{
    width:100%;
    margin:0;
    padding:0;
    border: 0;
    outline: 0;
    height:.3rem;
    line-height:.3rem;
    font-size:.14rem;
    background: rgba(57,64,80,0);
    color:#394050;
    border-radius: .04rem;
    position: absolute;
    top:.08rem;
    left: 0.5rem;
  }
  .message{
    margin-top:3.5%;
    position: relative;
    display: block;
    margin-left:.16rem;
    margin-right:.12rem;
    width:.2rem;
    height:.2rem;
  }
  .message .new-message{
    display: block;
    width:0.06rem;
    height: .06rem;
    border-radius: 50%;
    background: #f11656;
    position: absolute;
    top:0;
    left:30px;
    right:0;
  }
</style>
