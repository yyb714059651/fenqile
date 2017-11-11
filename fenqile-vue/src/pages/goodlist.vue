<template>
  <div>
    <listheader></listheader>
    <listbanner></listbanner>   
    <listtabnav></listtabnav>
    <listcontent></listcontent> 
    <!-- <listfooter></listfooter> -->
  </div>
</template>

<script>
import listheader from "../components/goodlist/listheadr.vue";
import listbanner from "../components/goodlist/listbanner.vue";
import listtabnav from "../components/goodlist/listtabnav.vue";
import listcontent from "../components/goodlist/listcontent.vue";
import listfooter from "../components/goodlist/listfooter.vue";
export default {
  components:{
    listheader,
    listbanner,
    listtabnav,
    listcontent,
    listfooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
