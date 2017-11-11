<template>
  <div>
    <cartheader></cartheader>
    <cartcontent></cartcontent>
    <!-- <index-footer></index-footer> -->
  </div>
</template>

<script>
import "../assets/js/cart.js"
import cartheader from "../components/goodscart/cartheader";
import cartcontent from "../components/goodscart/cartcontent";
import indexFooter from "../components/common/indexFooter";
export default {
  components:{
    cartheader,
    cartcontent,
    indexFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
