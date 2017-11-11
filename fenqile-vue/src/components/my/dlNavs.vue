<template>
	<article class="articlecontent">
        <dl class="matop">
            <dt><i class="iconfont icon-mulu"></i><span>本月账单</span></dt>
            <dd><span>全部</span><i class="iconfont icon-arrow-rt"></i></dd>
        </dl>
		<ul class="huankuaninfo clear" v-show="showOrHide">
			<li><p><span>838.2</span></p><p>本月待还</p></li>
			<li><p><span>0.00</span></p><p>消费笔数</p></li>
			<li><p>剩余<span>10</span>天</p><p>还款日</p></li>
		</ul>
        <dl class="matop">
            <dt><i class="iconfont icon-mulu"></i><span>本月账单</span></dt>
            <dd><span>全部</span><i class="iconfont icon-arrow-rt"></i></dd>
        </dl>
        <ul class="clear ul2">
            <li><p><i class="iconfont icon-daifukuan"></i></p><p>待付款</p></li>
            <li><p><i class="iconfont icon-daifukuan"></i></p><p>待付款</p></li>
            <li><p><i class="iconfont icon-daifukuan"></i></p><p>待付款</p></li>
            <li><p><i class="iconfont icon-daifukuan"></i></p><p>待付款</p></li>
        </ul>
        <dl>
            <dt><i class="iconfont icon-gouwuche1"></i><span>我的购物车</span></dt>
            <dd><span></span><i class="iconfont icon-arrow-rt"></i></dd>
            <p></p>
        </dl>
        <dl>
            <dt><i class="iconfont icon-hongbao"></i><span>邀请好友得返现</span></dt>
            <dd><span>瓜分200万现金</span><i class="iconfont icon-arrow-rt"></i></dd>
            <p></p>
        </dl>
        <dl>
            <dt><i class="iconfont "></i><span>我的银行卡</span></dt>
            <dd><span></span><i class="iconfont icon-arrow-rt"></i></dd>
            <p></p>
        </dl>
        <dl>
            <dt><i class="iconfont icon-huiyuanxiangqingye-duanxin"></i><span>我的预约</span></dt>
            <dd><span></span><i class="iconfont icon-arrow-rt"></i></dd>
            <p></p>
        </dl>
        <dl>
            <dt><i class="iconfont icon-mulu"></i><span>安全中心</span></dt>
            <dd><span></span><i class="iconfont icon-arrow-rt"></i></dd>
            <p></p>
        </dl>
        <dl>
            <dt><i class="iconfont icon-htmal5icon31-copy"></i><span>客服支持</span></dt>
            <dd><span></span><i class="iconfont icon-arrow-rt"></i></dd>
            <p></p>
         </dl>
    </article>
</template>

<script>
export default {
	data () {
		return{
			showOrHide:false,
		}
    },
    mounted(){
        var username=this.getCookie("username");
        // console.log(this.$store.state.vipname);
        // console.log(username)
        if(username == this.$store.state.vipname){
            console.log(username == this.$store.state.vipname)
            this.showOrHide=true;
        }
    },
    methods:{
        getCookie :function(key){
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
        }
    }
}
</script>

<style scoped>
	
.articlecontent{
    width: 100%;
}
.articlecontent dl:nth-child(1){
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: #fff;
    font-size: 0.16rem;
    padding: 0.15rem 0.15rem;;
}
.matop{
    margin-top: 0.16rem;
}
.articlecontent dl{
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: #fff;
    font-size: 0.16rem;
    padding: 0.15rem 0.15rem;
    position: relative;
}
.articlecontent dl i{
    color: #ffa7bd
}
.articlecontent .ul2{
    width: 100%;
    background: #fff;
    padding: 0.2rem;
    border-top: 1px solid #f2f2f2;
}
.articlecontent .ul2 li{
    width: 25%;
    float: left;
    font-size: 0.14rem;
}
.articlecontent .ul2 li p{
    text-align: center;
    color: #666;
}
.articlecontent dl>p{
    width: 90%;
    height: 1px;
    background: #f2f2f2;
    position: absolute;
    right: 0;
    bottom: 0;
}
.articlecontent dl dt i{
    margin-right: 0.1rem;
}
.huankuaninfo{
	width:100%;
	background:#fff;
	padding:0.15rem 0;
}
.huankuaninfo li{
	width:33.33333%;
	float:left;
}
.huankuaninfo li p{
	text-align:center;
	font-size:0.16rem;
}
.huankuaninfo li p span{
	color:#3b9bff;
}
</style>