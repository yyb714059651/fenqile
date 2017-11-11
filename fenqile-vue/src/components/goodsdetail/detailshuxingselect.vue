<template>
    <div>
        <div class="detail_price"><p><strong>$5599</strong><span>￥5899</span></p></div>
        <div class="detail_infoinfo">
            <p class="detail_goods_title"><i>{{oneproduct.huodong}}</i>{{oneproduct.goodsname}}</p>
            <p class="detail_goods-info">{{oneproduct.descript}}<span>大降价</span><i></i></p>
        </div>
        <div class="select_goods">
            <p><span>已选</span>&nbsp;&nbsp;金色{{oneproduct.guige[0]}}全网通可选增值保障</p>
            <i @click="mtaikuang"></i>
        </div>
        <!-- 属性选择开始 -->
        <div class="shuxingxuanze" v-show="showOrHide">
            <div class="shuxingxuanze_content">
                <dl class="zzc_content_tu">
                    <dt><img :src=oneproduct.goodsImg alt=""></dt>
                    <dd>
                        <p>{{oneproduct.nowprice}}</p>
                        <p>现货</p>
                        <p>仅剩<span>{{oneproduct.kucun}}</span>件</p>
                    </dd>
                </dl>
                <dl class="shuxin yanse">
                    <dt>颜色</dt>
                    <dd>
                        <span>{{oneproduct.color[0]}}</span>
                        <span>{{oneproduct.color[1]}}</span>
                        <span class="active">{{oneproduct.color[2]}}</span>                
                    </dd>
                </dl>
                <dl class="shuxin neicun">
                    <dt>内存</dt>
                    <dd>
                        <span>{{oneproduct.guige[0]}}</span>
                        <span class="active">{{oneproduct.guige[1]}}</span>              
                    </dd>
                </dl>
                <dl class="shuxin yunyinshang">
                    <dt>运营商</dt>
                    <dd>
                        <span>全网通</span>            
                    </dd>
                </dl>
                <div class="shuxin shunxing1">
                    <div><span>增值服务</span><p><i>服务说明</i><strong>></strong></p></div>
                    <p><i style="font-size:30px" class="iconfont icon-baoxian1"></i>碎屏险</p>
                    <p>碎屏保证1年<span>$99</span></p>
                </div>
                <div class="zhanwei"></div>
                <div class="cuohao" @click="zhaodesheng">&times;</div>
            </div>
            <footer>
                <p>月供：<span>{{oneproduct.nowprice | pointtwo}}</span>起</p>
                <p>确定</p>
            </footer>
        </div>
        <!-- 属性选择结束 -->
    </div>
</template>

<script>
export default {
    props:["oneproduct"],
    data(){
        return {
            showOrHide:false,
            transitionName: 'expand'
        }
    },
    methods:{
        mtaikuang:function(){
            this.showOrHide = !this.showOrHide;
        },
        zhaodesheng:function(){
            this.showOrHide = false;
        },
        /*getGoodsList(){
          axios.get("http://10.35.166.23:82/fenqile/PHP/getTheGood.php?"+this.id)
          .then((response)=>{
            //console.log(response)
            let res = response.data; 
            this.goodslist = res;
            // console.log(this.goodslist.length);
          });
      },*/
    },
    filters:{
        pointtwo(num){
            return (num/12).toFixed(2);
        }
    }
  /*  mounted:function () {
    //   console.log( this.$route.params.id);
    //    console.log( this.$route.params.item);
    this.id=this.$route.params.id;
    // this.list=this.$route.params.item;
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*detail价格划线*/
.detail_price{
    width: 95%;
    margin: 0 auto;
    height: 0.3rem;
    background: #fff;
    padding: 0.2rem 0.1rem; 
    
}
.detail_price p{
    display: flex;
    border-bottom: 1px solid #ccc;
    padding-bottom:0.2rem; 
}
.detail_price strong{
    color: #ed5f86;
    font-size: 0.2rem;
}
.detail_price span{
    text-decoration:line-through;
    font-size: 0.1rem;
    vertical-align: -webkit-baseline-middle;
}


.detail_infoinfo{
    background: #fff;
}
.detail_goods_title{
    padding: 0 0.1rem;
    font-size: 0.18rem;
    font-weight: 600;
}
.detail_goods_title i{
    background:#ed5f86;
    font-size: 0.1rem;
    color: #fff;
}
.detail_goods-info{
    padding: 0 0.1rem;
    font-size: 0.12rem;
    margin-top: 0.1rem;
	height: 0.3rem;
}
.detail_goods-info i{
    display: inline-block;
    width: 0.07rem;
    height: 0.07rem;
    border-bottom: 1px solid #3b9bff;
    border-right: 1px solid #3b9bff;
    transform: rotate(-45deg);

}
.detail_goods-info span{
    color: #3b9bff;
}
.select_goods{
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.1rem;
    background: #fff;
    margin-top: 0.1rem;
}
.select_goods p{
    font-size: 0.14rem;
}
.select_goods p span{
    font-size: 0.1rem;
    color: #ccc;
}
.select_goods i{
    display: inline-block;
    width: 0.07rem;
    height: 0.07rem;
    border-bottom: 1px solid #3b9bff;
    border-right: 1px solid #3b9bff;
    transform: rotate(-45deg);
}

/*属性选择*/
.shuxingxuanze{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    position:fixed;
    left: 0;
    top: 0;
    z-index: 2;
    transition: all 1s;
    /* display: none; */
}
.shuxingxuanze .shuxingxuanze_content{
    position: absolute;
    left: 0;
    top: 1.8rem;
    background: #fff;
    z-index: 3;
    width: 100%;
    height: calc(100% - 1.8rem);
    overflow: auto;
}
.shuxingxuanze .shuxingxuanze_content .cuohao{
    position: absolute;
    right: 0.2rem;
    top: 0.1rem;
    font-size: 0.3rem;
    color: #666;
}
.shuxingxuanze_content dl{
    font-size: 0.2rem;
}
.shuxingxuanze_content div{
    font-size: 0.2rem;
}
.shuxingxuanze footer{
    width: 100%;
    height: 0.55rem;
    position: fixed;
    left: 0;
    bottom: 0;
    font-size: 0.2rem;
    z-index: 4;
    display: flex;
    justify-content: space-between;
    background: #fff;
    z-index: 1000;
}
.shuxingxuanze footer p:nth-child(1){
    margin-left: 0.1rem;
    line-height: 0.55rem;
}
.shuxingxuanze footer p:nth-child(1) span{
    color: #3b9bff;
}
.shuxingxuanze footer p:nth-child(2){
    width: 1.3rem;
    height: 0.55rem;
    background: #3b9bff;
    text-align: center;
    line-height: 0.55rem;
    color: #fff;
}
.zhanwei{
    width: 100%;
    height: 0.7rem;
}
.zzc_content_tu{
    display: flex;
    padding: 0.2rem 0.3rem;
}
.zzc_content_tu dd{
    margin-left: 0.3rem;
}
.zzc_content_tu dd p span{
    color: #3b9bff;
}
.zzc_content_tu dt img{
    width: 0.8rem;
    height: 0.8rem;
}
.shuxin{
    width: 90%;
    margin: 0 auto;
    margin-top: 0.2rem;
}
.shuxin dd{
    margin-top: 0.2rem;
}
.yanse dd span{
    padding: 0.04rem 0.2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.yanse dd .active{
    background: #3b9bff;
}
.neicun dd span{
    padding: 0.04rem 0.2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.neicun dd .active{
    background: #3b9bff;
}
.yunyinshang dd span{
    padding: 0.04rem 0.2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.yunyinshang dd .active{
    background: #3b9bff;
}
.shunxing1 div{
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: 0.1rem 0;
}
.shunxing1 p:nth-child(1) .iconfont{
    font-size: 0.2rem;
}
.shunxing1 p:nth-child(2){
    padding: 0.1rem 0.2rem;
    border: 1px soild #ccc;
}

</style>
