<template>
	 <div class="article">
        <dl>
            <dt>
                <img src="../../assets/img/hpd/avt_default1.png" alt="">
                <router-link :to='{name:"Dl"}'><span>{{logininfo}}</span></router-link>
            </dt>
            <dd>
                <p><i class="iconfont icon-hongbao"></i><span>查看乐卡额度</span><span class="sanjiao"></span></p>
            </dd>
        </dl>
        <ul>
            <li>
                <p>0</p>
                <p>优惠券</p>
            </li>
            <li>
                <p>0.00</p>
                <p>免息额度</p> 
            </li>
            <li>
                <p>0</p>
                <p>收藏</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                logininfo:"立即登录",
            }
        },
        mounted:function(){
            var username =  this.getCookie("userName")
            if(username != ""){
                this.logininfo=username;
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
	.article{
    margin-top: 0.59rem;
    width: 100%;
    height: 1.68rem;
    background: url("../../assets/img/hpd/top_bd.png") no-repeat center;
    background-size: 100% 100%;
    position: relative;
}
.article dl{
    margin-top: 0.2rem;
    width: 85%;
    height: 0.48rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-size: 0.2rem;
    transform: translateY(0.3rem)
}
.article dl dt .iconfont{
    font-size:0.16rem;
}
.article dl dt img{
    width: 0.48rem;
    height: 0.48rem;
    border: 0;
}
.article dl dt span{
    font-size: 0.16rem;
    color: #fff;
    vertical-align: middle;
    margin-left: 0.1rem;
}
.article dl dd p{
    font-size: 0.16rem;
    color: #fff;
    position: relative;
    height: 100%;
    line-height: 0.48rem;
}
.article dl dd p span{
    margin-right: 0.1rem;
}
.article dl dd p i{
    margin-right: 0.1rem;
}
.article dl dd p .sanjiao{
    display: block;
    width: 0.16rem;
    height: 0.16rem;
    position: absolute;
    right: -0.2rem;
    top: 0.15rem;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    transform: rotate(45deg);
}
.article ul{
    width: 100%;
    height: 0.48rem;
    position: absolute;
    left: 0;
    bottom: 0;
    background: rgba(255,255,255,.2);
}
.article ul li{
    width: 33.333333333%;
    height: 100%;
    background: url("../../assets/img/hpd/line.png") no-repeat left;
    float: left;
    font-size: 0.16rem;
}
.article ul li p{
    text-align: center;
    color: #fff;
}
</style>