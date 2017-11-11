<template>
  <div>
    <detailheader v-bind:oneproduct="oneProduct"></detailheader>
    <detaillunbo v-bind:oneproduct="oneProduct"></detaillunbo>   
    <detailshuxingselect v-bind:oneproduct="oneProduct"></detailshuxingselect>
    <detaileInfo v-bind:oneproduct="oneProduct"></detaileInfo> 
    <detailepingjia v-bind:oneproduct="oneProduct"></detailepingjia>
    <div class="footer">
      <ul>
        <li class="yuegong">月供<span>{{oneProduct.nowprice | doublepoint}}</span></li>
        <li>商家</li>
        <li class="jiarugouwuche" @click="jointocart">加入购物车</li>
        <li class="lijigoumai">立即购买</li>
      </ul>
	  </div>
  </div>
</template>

<script>
import detailheader from "../components/goodsdetail/detailheader";
import detaillunbo from "../components/goodsdetail/detaillunbo";
import detailshuxingselect from "../components/goodsdetail/detailshuxingselect";
import detaileInfo from "../components/goodsdetail/detaileInfo";
import detailepingjia from "../components/goodsdetail/detailepingjia";
// import detailfooter from "../components/common/detailfooter"
// import '../assets/js/my_tools.js'
export default {
  components:{
    detailheader,
    detaillunbo,
    detailshuxingselect,
    detaileInfo,
    detailepingjia
    // detailfooter
  },
  data(){
      return{
        id:"",
        oneProduct:""
      }
  },
  methods:{ 
      getGoodsList(){
          /*axios.get("http://10.35.166.23:82/fenqile/PHP/getTheGood.php?id="+this.id)
          .then((response,error)=>{
              console.log(error);
              console.log(response)
                console.log(response)
                  console.log(response)
            console.log("特定"+response)
            let res = response.data; 
            this.list = res;
            console.log(this.list);
          });*/
          /*my_ajax({
            reqDatas:{
              id:"00011"
            },
            url:"http://10.35.166.23:82/fenqile/PHP/getTheGood.php",
            cb:function(str){
              console.log(str);
              // let res = str.data; 
              // this.list = res;
              // console.log(this.list);
            }
          })*/
          var that=this;
          var xhr = new XMLHttpRequest();
          xhr.open("get","http://10.35.166.23:82/fenqile/PHP/getTheGood.php?id="+this.id,true);
          xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
              cb(xhr.responseText);
            }
          }
          xhr.send();
          function cb(str){
          //  console.log(str);
           console.log(JSON.parse(str));
            that.oneProduct = JSON.parse(str);
          }
      },
      jointocart:function(){
        var that=this;
        
        var username = that.$store.state.vipname;
        if(username==""){
          location.href="#/Dl"
        }else{
        console.log(username);
        var xhr = new XMLHttpRequest();
          xhr.open("get","http://10.35.166.23:82/fenqile/PHP/addToShopCar.php?vipName="+username+"&id="+that.id+"&count=1",true);
          xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
              cb(xhr.responseText);
            }
          }
          xhr.send();
          function cb(str){
          //  console.log(str);
           console.log(str);
           // that.oneProduct = JSON.parse(str);
          }
      }
    }
  },
  mounted:function(){
    // console.log(oneProduct)
    /* var mySwiper = new Swiper ('.swiper-container', {
    //   direction: 'vertical',
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination'
    });*/
    this.id=this.$route.params.id;
    // this.list=this.$route.params.item;
    //console.log(this.id);
    this.getGoodsList()
  },
  filters:{
    doublepoint(num){
      return (num/12).toFixed(2);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
	width: 100%;
	height: 0.6rem;
	position: fixed;
	left: 0;
	bottom: 0;
	z-index: 1000;
	background: #fff;
	font-size: 0.2rem;
}
.footer ul{
	display: flex;
}
.footer ul li{
	text-align: center;
	line-height: 0.6rem;
	width: 25%;
}
.footer ul .lijigoumai{
	background: #3b9bff;
}
.footer ul .yuegong{
  display: flex;
}
.footer ul .yuegong span{
  color: red;
  font-weight: 800;
}
.footer ul .jiarugouwuche{
  background: yellow;
}
</style>
