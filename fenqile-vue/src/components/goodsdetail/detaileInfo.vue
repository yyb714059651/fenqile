<template>
    <div class="pro-info">
        <p><span>货源</span>&nbsp;&nbsp;{{oneproduct.ownstore}}</p>
        <p><span>库存</span>&nbsp;&nbsp;仅剩<i>{{oneproduct.kucun}}</i>件</p>
        <p>
            <span>送至</span>&nbsp;&nbsp;<span class="color">湖北省实验室</span>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b class="xianhuo">现货，下单成功后预计3天之内发货</b>
            <i class="sanjiao"></i>
        </p>
        <mt-picker :slots="slots" @change="onValuesChange" class="daxioa"></mt-picker>        
        <p class="baozheng">
            <i class="iconfont icon-duihao">正品保证</i>
            <i class="iconfont icon-duihao">闪电发货</i>
            <i class="iconfont icon-duihao">提前还款免服务费</i>
            <i class="sanjiao"></i>
        </p>
    </div>
</template>

<script>
import { Picker } from 'mint-ui';
export default {
  props:["oneproduct"], 
  methods: {
    onValuesChange(picker, values) {
        if (values[0] > values[1]) {
            picker.setSlotValue(1, values[0]);
        }
    }
  },
  data() {
    return {
        id:0,
        list:[],
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    };
  },
  /*mounted:function () {
    // console.log( this.$route.params.id);
    // console.log( this.$route.params.item);
    this.id=this.$route.params.id;
    this.list=this.$route.params.item;
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.daxioa{
    font-size: 0.3rem;
}
.picker-item{
    height: 50px;
}
/*prop info*/
.pro-info{
    padding: 0.2rem 0.1rem;
    background: #fff;
    margin-top: 0.1rem;
}
.pro-info p{
    padding: 0.15rem 0;
    font-size: 0.14rem;
    border-bottom:1px solid #ccc; 
    position: relative;
}
.pro-info p span{
    font-size: 0.1rem;
    color: #ccc;
}
.sanjiao{
    display: inline-block;
    width: 0.07rem;
    height: 0.07rem;
    border-bottom: 1px solid #3b9bff;
    border-right: 1px solid #3b9bff;
    transform:rotate(-45deg) ;
}
.pro-info .color{
    color: #666;
}
.xianhuo{
    font-size: 0.1rem;
    color: #ccc;
}
.baozheng i{
    font-size: 0.1rem;
    margin: 0 0.05rem;
}
.sanjiao{
    display: inline-block;
    width: 0.07rem;
    height: 0.07rem;
    border-bottom: 1px solid #3b9bff;
    border-right: 1px solid #3b9bff;
    transform:rotate(-45deg) ;
    position: absolute;
    right: 0.1rem;
    top: 0.2rem;
}


</style>
