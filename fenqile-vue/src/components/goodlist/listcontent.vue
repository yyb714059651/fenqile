<template>
    <div  class="goods_list_content" >
        <p>Iphone</p>
        <ul class="goods_list clear">
            <li v-for="(item,index) in goodslist">
                <router-link :to ="{name:'goodsdetail', params:{id:item.id,item:item}}"><dl>
                    <dt><img v-lazy="item.img[0]" alt=""/><b v-show="false"></b></dt>
                    <dd>
                        <p>{{item.goodsname}}</p>
                        <p class="price_danjia">￥{{item.nowprice}}</p>
                        <p><strong>新品</strong>月供￥<span class="price_fenqi">{{item.nowprice | duoblePoint}}</span>起</p>
                    </dd>
                </dl></router-link>
            </li>
        </ul>
        <div class="get_more">查看更多<span></span></div>
    </div>
</template>

<script>
import axios from 'axios'//会自动在nodemodules里面查找
export default {
  name: 'HelloWorld',
  data () {
    return {
      goodslist: [],
      fenlei:[],
      id:0
    }
  },
  mounted:function(){
      this.getGoodsList();
  },
  /*methods:{
      getGoodsList(){
          axios.get("http://10.35.166.6:3003/tasks/api/fenqileapi")
          .then((response)=>{
            console.log(response)
            let res = response.data; 
            this.goodslist = res.datas;
            console.log(this.goodslist.length);
          });
      }
  }*/
  methods:{
      getGoodsList(){
          axios.get("http://10.35.166.23:82/fenqile/PHP/getGoods.php")
          .then((response)=>{
            console.log(response)
            let res = response.data; 
            this.goodslist = res;
            console.log(this.goodslist.length);
          });
      }
  },
  filters:{
      duoblePoint:function(num){
          return (num/12).toFixed(2);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*goodslist_content*/
.goods_list_content{
    width: 100%;
    background: #fff;
    margin-top: 0.2rem;
}
.goods_list_content>p{
    width: 90%;
    margin: 0 auto;
    height: 0.7rem;
    text-align: center;
    line-height: 0.7rem;
    font-size: 0.2rem;
    font-weight: 700;
    border-bottom: 1px solid rgb(168, 167, 167);
}
.goods_list{
    width: 100%;
    border-bottom: 1px solid #ccc;
}
.goods_list li{
    width: 50%;
    float: left;
}
.goods_list li dl{
    width: 100%;
}
.goods_list li dl dt img{
    width:1.44rem;
    height: 1.44rem;
    display: block;
    margin: 0 auto;
}
.goods_list li dl dd p{
    width: 1.44rem;
    font-size: 0.16rem;
    margin: 0 auto;
    color: #394050;
    margin-bottom: 0.1rem;
	height:0.4rem;
	overflow:hidden;
	text-overflow:ellipsis;
    /* white-space:nowrap */
}
.goods_list li dl dd .price_danjia{
    font-size: 0.1rem;
    color: #b7babf;
}
.goods_list li dl dd p:nth-child(3){
    color: #579de7;
}
.goods_list li dl dd p:nth-child(3) strong{
    background: #fe4979;
    color: #fff;
    font-size: 0.15rem;
    padding: 0.03rem;
    border-radius: 4px;
}
.goods_list li dl dd .fenqi_info{
    font-size: 0.1rem;
}
.goods_list li dl dd .price_fenqi{
    font-size: 0.1rem;
}
.get_more{
    width: 100%;
    height: 0.7rem;
    text-align: center;
    line-height: 0.7rem;
    color:#579de7; 
    font-size: 0.1rem;
    border-bottom: none;
}
.get_more span{
    width: 0.07rem;
    height: 0.07rem;
    display: inline-block;
    border-bottom: 1px solid #579de7;
    border-right: 1px solid #579de7;
    transform: rotate(45deg) translateY(-0.07rem);
}
</style>
