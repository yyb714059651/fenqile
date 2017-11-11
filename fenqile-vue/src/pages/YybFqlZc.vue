<template>
    <div>
         <zc-head></zc-head>
         <zc-body></zc-body>
         <zc-foot></zc-foot>
    </div>
</template>

<script type="text/ecmascript-6">
    import ZcHead  from "../components/FqlZc/ZcHead.vue";
    import ZcFoot  from "../components/FqlZc/ZcFoot.vue";
    import ZcBody  from "../components/FqlZc/ZcBody.vue";
    export default {
        components:{
             ZcHead,
             ZcBody,
             ZcFoot
        }
    }
</script>

<style scoped>

</style>
