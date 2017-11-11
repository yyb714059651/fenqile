<template>
    <div>
        <section class="message-list">
          <p>孚道美妆专营店</p>
          <div class="message-box">
            <img src="../../assets/img/yybimg/hRoGAFjU0eWAStpTAAKOFqyT6MM237_164x164.jpg" />
            <div class="message-text">
              <p class="message-text-p1">菲拉格慕（Ferragamo）蓝色经典男士淡香水</p>
              <p class="message-text-p2">规格：100ml</p>
              <span>
                <i class="message-text-i">￥199.0</i>
                <i>X 1</i>
              </span>
            </div>
          </div>
          <span class="message-span">选填，我们会尽可能满足您的需求</span>
        </section>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {

    }
</script>

<style scoped>
   .message-list{
   				padding: 0 0.2rem;
   				background: white;
   				border-bottom: 0.1rem solid #ccc;
   			}
   			.message-list>p{
   				padding: 0.15rem;
   				border-bottom: 0.01rem solid #ccc;
   				font-size:0.15rem;
   			}
   			.message-box{
   				padding: 0.2rem 0 0 0;
   				display: flex;
   				border-bottom: 0.01rem solid #ccc;
   			}
   			.message-box img{
   				width:30%;
   				height:1rem;
   				display: block;
   			}
   			.message-text{
   				padding: 0.15rem 0;
   				width:70%;
   				font-size: 0.1rem;
   			}
   			.message-text-p1{
   				font-size: 0.1rem;
   				white-space:nowrap;
   			    overflow:hidden;
   			    text-overflow:ellipsis;
   			}
   			.message-text-p2{
   				font-size: 0.08rem;
   			}
   			.message-text span{
   				padding-top: 0.25rem;
   				display: flex;
   				justify-content: space-between;
   			}
   			.message-text-i{
   				color: #3B9BFF;
   				font-size: 0.15rem;
   			}
   			.message-span{
   				display: block;
   				height:0.5rem;
   				color: #ccc;
   				line-height: 0.5rem;
   				font-size: 0.15rem;
   			}
</style>
