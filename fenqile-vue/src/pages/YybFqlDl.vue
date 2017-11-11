<template>
    <div>
        <dl-head></dl-head>
        <dl-body></dl-body>
        <dl-foot></dl-foot>
    </div>
</template>

<script type="text/ecmascript-6">
    import DlHead  from "../components/FqlDl/DlHead.vue";
    import DlFoot  from "../components/FqlDl/DlFoot.vue";
    import DlBody  from "../components/FqlDl/DlBody.vue";
    export default {
        components:{
                 DlHead,
                 DlBody,
                 DlFoot
        }
    }
</script>

<style scoped>

</style>
