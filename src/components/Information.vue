<template>
    <!--template以下才是组件的HTML模板，仍然只能有一个根标签-->
    <div>
        我是一个单文件组件
    </div>
</template>

<script>
    export default {
        //无需写template，data仍然以函数返回，其他属性照旧
        data(){
            return {}
        },
        props: [],
        methods: {}
    }
</script>

<!--这个scoped可以让这些样式仅在当前组件生效-->
<style scoped>

</style>
