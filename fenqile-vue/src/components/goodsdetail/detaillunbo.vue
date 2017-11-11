<template>
    <div class="lunbobanner" id="swipperw">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img v-lazy="oneproduct.img[0]" alt="">
                </div>
                <div class="swiper-slide">
                    <img v-lazy="oneproduct.img[0]" alt="">
                </div>
                <div class="swiper-slide">
                    <img v-lazy="oneproduct.img[0]" alt="">
                </div>
                <div class="swiper-slide">
                    <img v-lazy="oneproduct.img[0]" alt="">
                </div>  
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination button"></div>
        </div>
        <div class="keep"></div>
    </div>
</template>

<script>
// import from '../../assets/js/swiper-3.4.2.jquery.min.js'
export default {
  props:["oneproduct"],
 /* data(){
      return{
        id:"",
        list:""
      }
  },
  methods:{
    //   that=this,
        
      getGoodsList(){
        //   axios.get("http://10.35.166.23:82/fenqile/PHP/getTheGood.php?id="+this.id)
        //   .then((response,error)=>{
        //       console.log(error);
        //       console.log(response)
        //         console.log(response)
        //           console.log(response)
        //     console.log("特定"+response)
        //     let res = response.data; 
        //     this.list = res;
        //     console.log(this.list);
        //   });

      }
  },*/
  mounted:function(){
    //   console.log(oneproduct.img)
    //   setTimeout(function(){
          var mySwiper = new Swiper ('.swiper-container', {
        //   direction: 'vertical',
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination'
        });
    //   },500);
     
    // this.id=this.$route.params.id;
    // this.list=this.$route.params.item;
    // console.log(this.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import '../../assets/css/swiper-3.4.2.min.css' */
/*轮播*/
/* #swipperw .swiper-pagination .swiper-pagination-bullet{
    display: inline-block;
    width: 1rem;
    height: 1rem;
} */
#swipperw .swiper-pagination-bullet{
  display: inline-block;
    width: 3rem;
    height: 3rem;
    
    border-radius: 100%;
    background: #000;
    opacity: .2;
}
.lunbobanner{
    width: 100%;
    height: 3.75rem;
    position: relative;
    margin-top: 0.44rem;
}
.lunbobanner .keep{
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    bottom: 0.2rem;
    right: 0.1rem;
    background: url(../../assets/img/fzy/keep_gray--4ae1935bfd.png) no-repeat center;
    background-size: cover;
    z-index: 1;
}
.lunbobanner .swiper-container{
    width: 100%;
    height: 100%;
}
.lunbobanner .swiper-container .swiper-wrapper{
    width: 100%;
    height: 100%;
}
.lunbobanner .swiper-container .swiper-wrapper .swipper-slide{
    width: 100%;
    height: 100%;
}
.lunbobanner .swiper-container img{
    width: 100%;
    height: 100%;
}

</style>
