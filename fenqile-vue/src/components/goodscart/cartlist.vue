<template>
<div>
    <li v-for="(item,index) in list">
    <!-- <li v-for="(item,index) in list" v-if="item.del"> -->
        <!-- {{index}}-----{{item}} -->
         <div class="oneStore">
            <p><i @click="alibaba(index)" class="iconfont icon-yuanquan"></i><span>{{item.ownstore}}</span></p>
            <p class="lingjuan"><span>领劵</span><span class="bianji" @click="showOrHide(index)">{{goodslist[index].bianji | wancheng(goodslist[index].bianji)}}</span></p>
        </div>
        <dl class="clear">
            <dt>
                <i @click="xuanbuxuan(index)" class="iconfont oneProduct icon-yuanquan"></i>
                <span :style="'background:url('+(item.img[0])+') no-repeat center center'"></span>
            </dt>
            <dd>
                <div class="title"><p>{{item.goodsname}}</p><span>x2</span></div>
                <p class="guige"><span>{{item.guige[0]}}</span></p>
                <p class="price">{{item.nowprice}}</p>
                <div class="shuru" v-show="goodslist[index].showorhide">
                    
                    <div class="input_caozuo">
                        <p class="jiajian"><span @click="jianjian(index)">-</span><input type="text" :value="goodslist[index].goodscount"><span @click="jiajia(index)">+</span></p>
                        <p class="guige2">规格：BY9409/尚<i>></i></p>
                    </div>
                    <div class="delete"><p @click="delet(index)">删除</p></div>
                </div>
                <!-- {{goodslist}} -->
            </dd>
        </dl> 
    </li>
    <div class="footercart">
        <dl>
            <dt>
                <i @click="aliyeye" id="quanxuan" class="iconfont icon-yuanquan"></i>
                合计:<span>￥{{sum}}</span>
            </dt>
            <dd>
                <router-link :to='{name:"Im"}'><P><span>结算</span><i>({{count}})</i></p></router-link>
            </dd>    
        </dl>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      goodslist:"",
      list:[],
      fenlei:[],
      bianji:false,
      showHide:"编辑",
      jia:1,
      delete:true,
      sum:0,
      count:0
    }
  },
  mounted:function(){
    //   console.log("aaaaa")
      this.getGoodsList()
      self=this;
      setTimeout(function(){self.sumMoney()},1000)
     // this.getGoodsList();
     /* var that=this;
      setTimeout(function() {
          for(var i=0;i<that.goodslist.length;i++){
                that.goodslist[i].showorhide=false;
          }
      }, 150);*/
      
  },
  created:function(){
      
  },
  methods:{
         getCookie:function(key) {
            var str=decodeURIComponent(document.cookie);
            //1.转换成数组
            var arr=str.split("; ");
            //2.根据键找到对应的数组元素
            var index=-1;
            for(var i=0;i<arr.length;i++){
                if(arr[i].indexOf(key+"=")==0){
                    index=i;
                    break;
                }
            }
            //3.截取值
            if(index==-1){
                return "";
            }else{
                //substring截取字符串包括开始，不包括结束
                //return arr[index].substring(key+"=".length);
                return arr[index].split("=")[1];
            }
     },
      getGoodsList(){
          var that=this; 
          axios.get("http://10.35.166.23:82/fenqile/PHP/getVipGoods.php?vipName="+this.getCookie("userName"))
          .then((response)=>{
            console.log(response)
            let res = response.data; 
            that.goodslist =eval("("+res+")");

            // var that=this;
            for(var i=0;i<that.goodslist.length;i++){
                that.goodslist[i].showorhide=false;
                that.goodslist[i].showOrHide=false;
                 that.goodslist[i].bianji="true";
                 that.goodslist[i].del="true";
                 that.goodslist[i].xuanzhong="false";
            }
            console.log(that.goodslist)
            that.sumMoney();
            // console.log(that.goodslist[0].goodsid)
            that.list=[];
            for(var i=0;i<that.goodslist.length;i++){
                console.log(that.goodslist.length);
                axios.get("http://10.35.166.23:82/fenqile/PHP/getTheGood.php?id="+that.goodslist[i].goodsid)
                .then((response)=>{
                    let res = response.data;
                    that.list.push(res);
                    
                })
            }
            console.log(that.list);

            
          });
      },
      showOrHide:function(idx){
        console.log("sdfffffffsdfsd")
        //this.goodslist[idx].showorhide=true;
        this.goodslist[idx].showorhide=!this.goodslist[idx].showorhide;
        console.log( this.goodslist[idx].showorhide)
        this.goodslist[idx].bianji=!this.goodslist[idx].bianji;
        if(this.goodslist[idx].showorhide==false){
            this.showHide="编辑";

        }else{
             this.showHide="完成";
        } 
      },
      jiajia:function(idx){
        //   this.jia++;
          this.goodslist[idx].goodscount++;
          this.sumMoney();
      },
      jianjian:function(idx){
          if(this.goodslist[idx].goodscount<=0){
            this.goodslist[idx].goodscount=1; 
          }else{
            this.goodslist[idx].goodscount--;
          }
          this.sumMoney();
      },
      delet:function(idx){
          this.goodslist[idx].del=false;
          this.goodslist[idx].xuanzhong=false;
          this.sumMoney();
      },
      xuanbuxuan:function(idx){
          console.log(this.goodslist[idx].xuanzhong)
          //1.自我批评
          if(this.goodslist[idx].xuanzhong==true){
              $(event.currentTarget).removeClass("icon-duihao").addClass("icon-yuanquan");
              this.goodslist[idx].xuanzhong=false;
              
              $(event.currentTarget).parents("dl").siblings("div").find("i.iconfont").removeClass("icon-duihao").addClass("icon-yuanquan");
             
              $("#quanxuan").removeClass("icon-duihao").addClass("icon-yuanquan");

          }else{
              $(event.currentTarget).removeClass("icon-yuanquan").addClass("icon-duihao");
              this.goodslist[idx].xuanzhong=true;
              $(event.currentTarget).parents("dl").siblings("div").find("i.iconfont").eq(0).removeClass("icon-yuanquan").addClass("icon-duihao");
              var flag=true;
               for(var i=0;i<this.goodslist.length;i++){
                  if(this.goodslist[i].xuanzhong==false){
                      //console.log();
                      flag=false;
                      break;
                  }
              }
              if(flag==true){
                  $("#quanxuan").removeClass("icon-yuanquan").addClass("icon-duihao");
              }
              
          }
          this.sumMoney();
        },
          //2.批评老爸
        alibaba:function(idx){
            console.log($(event.currentTarget).hasClass("icon-duihao"));
            if($(event.currentTarget).hasClass("icon-duihao")==true){
                 $(event.currentTarget).removeClass("icon-duihao").addClass("icon-yuanquan");
              this.goodslist[idx].xuanzhong=false;
              
              $(event.currentTarget).parents(".oneStore").siblings("dl").find("i.iconfont").removeClass("icon-duihao").addClass("icon-yuanquan");
             
              $("#quanxuan").removeClass("icon-duihao").addClass("icon-yuanquan");
            }else{
                $(event.currentTarget).removeClass("icon-yuanquan").addClass("icon-duihao");
              this.goodslist[idx].xuanzhong=true;
              $(event.currentTarget).parents(".oneStore").siblings("dl").find("i.iconfont").removeClass("icon-yuanquan").addClass("icon-duihao");
             var flag=true;
               for(var i=0;i<this.goodslist.length;i++){
                  if(this.goodslist[i].xuanzhong==false){
                      flag=false;
                      break;
                  }
              }
              if(flag==true){
                  $("#quanxuan").removeClass("icon-yuanquan").addClass("icon-duihao");
              }
            }
            this.sumMoney();
        },
            //3.批评爷爷
    aliyeye:function(){
        if($(event.currentTarget).hasClass("icon-duihao")){
            $(event.currentTarget).removeClass("icon-duihao").addClass("icon-yuanquan");
            for(let i=0;i<this.goodslist.length;i++){
                 this.goodslist[i].xuanzhong=false;                                                                                              
            }
             $(".oneProduct").removeClass("icon-duihao").addClass("icon-yuanquan"); 
             $(".oneStore").find(".iconfont").removeClass("icon-duihao").addClass("icon-yuanquan"); 
        }else{
             $(event.currentTarget).removeClass("icon-yuanquan").addClass("icon-duihao");
            for(let i=0;i<this.goodslist.length;i++){
                 this.goodslist[i].xuanzhong=true;                                                                      
            }
             $(".oneProduct").removeClass("icon-yuanquan").addClass("icon-duihao"); 
             $(".oneStore").find(".iconfont").removeClass("icon-yuanquan").addClass("icon-duihao"); 
        }
        this.sumMoney();
    },
    sumMoney:function(){
        this.sum=0;
        this.count=0;
        for(var i=0;i<this.goodslist.length;i++){
            if(this.goodslist[i].xuanzhong==true){
                console.log(this.goodslist[i].goodscount+"dsffsdf"+this.list[i].nowprice);
                this.sum+=Number(this.goodslist[i].goodscount)*Number(this.list[i].nowprice)
                this.count++;
            }
        }
    }
  },
  
  filters:{
      wancheng:function(flag){
          if(flag){
              return "编辑";
          }else{
              return "完成";
          }
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
[v-show]{
    display:none;
}
.footercart{
    width:100%;
    position:fixed;
    left:0;
    bottom:0.5rem;
    background:#fff;
}
.footercart dl dt{
      line-height: 0.55rem;
}
.footercart dl{  
    width:100%;
    display:flex;
    justify-content:space-between;
    font-size:0.2rem;
}
.footercart dl dd p{
    background:#0487E3;
    color:#fff;
    padding:0.15rem 0.1rem;
 }
</style>
