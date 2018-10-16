<template>
    <!--template以下才是组件的HTML模板，仍然只能有一个根标签-->
    <div class="others">
      <Xiangqing v-for="(p,index) in items1" :key="index" :item1="p"></Xiangqing>
    </div>
</template>

<script>
  import Bizhi from './Bizhi.vue'
  import Xiangqing from './Xiangqing.vue'
    export default {
      components:{
        Bizhi,
        Xiangqing
      },
      props:["items1"]
    }
</script>

<!--这个scoped可以让这些样式仅在当前组件生效-->
<style scoped>
  .others{
    width: 1220px;
    margin: auto;
    margin-top: 100px;


  }
  .title1{
    height: 60px;
    width: 1220px;
    background-color: #f3f3f3;
  }
  .name1{
    position: relative;
    text-align: left;
    top: 20px;
    left: 20px;
  }





</style>
