<template>
    <div>
        <index-head></index-head>
        <classifybanner></classifybanner>
        <classifycontent1></classifycontent1>
        <classifycontent2></classifycontent2>
        <classifycontent3></classifycontent3>
        <classifyzzc></classifyzzc>
        <!-- <index-footer></index-footer> -->
    </div>
</template>

<script type="text/ecmascript-6">
//   import "../assets/js/jquery-2.1.4.min"
  import "../assets/js/classify.js"
//   import "../assets/css/public.css"
//  import classifyheader from '../components/classify/classify_header.vue'
  import indexHead from '../components/common/indexHead.vue'  
  import classifybanner from '../components/classify/classify_banner.vue'
  import classifycontent1 from '../components/classify/classify_content1.vue'
  import classifycontent2 from '../components/classify/classify_content2.vue'
  import classifycontent3 from '../components/classify/classify_content3.vue'
  import classifyzzc from "../components/classify/classify_zzc.vue"
  import indexFooter from '../components/common/indexFooter.vue'  
    export default {
        components: {
//          classifyheader,
          indexHead,
          classifybanner,
          classifycontent1,
          classifycontent2,
          classifycontent3,
          classifyzzc,
          indexFooter
        },
        mounted(){
            $(function(){
        var flag=1;
        $(".category-floor ul li").click(function(){
            if(flag==1){

                $(".shop-show-wrap").animate({
                    right: "0%"

                },500);
                $("#zzc").css({"display":"block"})
                flag=0;
            }else{
                $(".shop-show-wrap").animate({
                    right: "-80%"

                },200);
                $("#zzc").css({"display":"none"})

                flag=1;
            }

        });
        $("#zzc").click(function(){
            $(".shop-show-wrap").animate({"right":"-80%"},50)
            $("#zzc").css({"display":"none"})
        })
    });

        }
        
    }
</script>

<style scoped>
    
</style>
