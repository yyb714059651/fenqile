<template>
    <!-- 评价开始 -->
    <div class="happingrange">
        <p><span>好评率94%</span><span class="chakanpingjia">查看574条评价</span><i class="sanjiao sanjiao2"></i></p>
        <ul>
            <li>
                <p>
                    <i class="iconfont icon-xing"></i>
                    <i class="iconfont icon-xing"></i>
                    <i class="iconfont icon-xing"></i>
                    <i class="iconfont icon-xing"></i>
                    <i class="iconfont icon-xing"></i>
                    <span class="sanjiao2">赵德升</span>
                </p>
                <div>
                    <p>{{oneproduct.pingjia}}</p>
                    <div>
                        <span :style="'background:url('+oneproduct.img[0]+') no-repeat center center'"></span>
                        <span :style="'background:url('+oneproduct.img[1]+') no-repeat center center'"></span>
                        <span :style="'background:url('+oneproduct.img[2]+') no-repeat center center'"></span>
                        <span :style="'background:url('+oneproduct.img[1]+') no-repeat center center'"></span>
                    </div>
                </div>
            </li>
        </ul>
        <p><span>购买咨询</span><span class="chakanpingjia">查看所有商品咨询</span><i class="sanjiao sanjiao2"></i></p>
    </div>
</template>

<script>
export default {
  props:["oneproduct"]
  /*data () {
    return {
     id:"",
     list:""
    }
  }*/
  /*mounted:function () {
    //   console.log( this.$route.params.id);
    //    console.log( this.$route.params.item);
    this.id=this.$route.params.id;
    this.list=this.$route.params.item;
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 评价开始 */
.happingrange{
    margin-top: 0.2rem;
}
.happingrange>p{
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 0.1rem;
    position: relative;
    padding: 0 0.1rem;
}
.happingrange p .chakanpingjia{
    margin-right: 0.5rem;
}
.sanjiao2{
    position: absolute;
    right: 0.1rem;
    top: 0.0rem;
}
.happingrange ul{
    margin-top: 0.3rem;
}
.happingrange ul li p{
    padding: 0 0.1rem;
    position: relative;
    font-size: 0.06rem;
}
.happingrange ul li p .iconfont{
    color: red;
}
.happingrange ul li div div{
    display: flex;
    padding: 0.2rem 0.1rem;
}
.happingrange ul li div div span{
    display: inline-block;
    width: 25%;
    height: 1rem;
    background: #ccc;
    font-size: 0.2rem;
}
.happingrange ul li div div span:nth-child(1){
    /* background:red; */
    background-size:100% 100%;
}
.happingrange ul li div div span:nth-child(2){
    /* background:greenyellow; */
}
.happingrange ul li div div span:nth-child(3){
    background:green;
}
.happingrange ul li div div span:nth-child(4){
    background:blue;
}
</style>
