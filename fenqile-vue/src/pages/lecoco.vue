<template>
    <div>
      <lecocoheader></lecocoheader>
      <lecocobanner></lecocobanner>
      <lecocolk></lecocolk>
      <lecococontent></lecococontent>
      <!-- <index-footer></index-footer> -->
    </div>
</template>

<script type="text/ecmascript-6">
  import "../assets/css/public.css"
  import lecocoheader from '../components/lecoco/lecoco_header.vue'
  import lecocobanner from '../components/lecoco/lecoco_banner.vue'
  import lecocolk from '../components/lecoco/lecoco_lk.vue'
  import lecococontent from '../components/lecoco/lecoco_content.vue'
  import indexFooter from '../components/common/indexFooter.vue'  
    export default {
        components: {
          lecocoheader,
          lecocobanner,
          lecocolk,
          lecococontent,
          indexFooter
        }
    }
</script>

<style scoped>


</style>
