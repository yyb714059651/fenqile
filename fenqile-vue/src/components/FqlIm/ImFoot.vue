<template>
    <div>
        <section class="message-lie">
          <div class="message-lie-box">
            <span>优惠券</span>
            <a href="###">无可用 &gt;</a>
          </div>
          <div class="message-lie-box">
            <span>商品金额</span>
            <a>￥199.0</a>
          </div>
          <div class="message-lie-box">
            <span>优惠合计</span>
            <a class="message-lie-a">-¥0.00</a>
          </div>
        </section>

        <footer class="message-foot">
          <p>订单金额：<span>￥199.0</span></p>
          <button>提交订单</button>
        </footer>

     </div>
</template>

<script type="text/ecmascript-6">
    export default {

    }
</script>

<style scoped>
   .message-lie{
   				background: white;
   				margin-bottom: 0.6rem;
   			}
         .message-lie-box{
           margin: 0 0 0 0.2rem;
           display: flex;
           height: 0.5rem;
           line-height: 0.5rem;
           border-bottom: 0.01rem solid #ccc;
           justify-content: space-between;
         }
         .message-lie-box span{
           font-size: 0.15rem;
         }
         .message-lie-box  a{
           color: #ccc;
           padding: 0 0.2rem 0 0;
           font-size: 0.15rem;
         }
         .message-lie-box  a.message-lie-a{
           color: #3B9BFF;
         }
         .message-foot{
           position: fixed;
           right: 0;
           bottom: 0;
           height:0.6rem;
           line-height: 0.6rem;
           display:flex;
           width: 100%;
           border-top: 0.01rem solid #ccc;
           justify-content: space-between;
           background: white;

         }
         .message-foot p{
           padding-left:0.2rem;
           display: block;
           font-size: 0.18rem;
           flex: 1;
         }
         .message-foot p span{
           color: #3B9BFF;
         }
         .message-foot button{
           padding: 0 0.1rem;
           display: block;
           outline: none;
           border: 0;
           font-size: 0.2rem;
           background: #3B9BFF;
           color: white;
         }
</style>
