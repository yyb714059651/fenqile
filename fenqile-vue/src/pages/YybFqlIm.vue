<template>
    <div>
         <im-head></im-head>
         <im-site></im-site>
         <im-body></im-body>
         <im-body></im-body>
         <im-foot></im-foot>
    </div>
</template>

<script type="text/ecmascript-6">
    import ImHead  from "../components/FqlIm/ImHead.vue";
    import ImSite  from "../components/FqlIm/ImSite.vue";
    import ImBody  from "../components/FqlIm/ImBody.vue";
    import ImFoot  from "../components/FqlIm/ImFoot.vue";
        export default {
            components:{
                 ImHead,
                 ImSite,
                 ImBody,
                 ImFoot
            }
    }
</script>

<style scoped>

</style>
