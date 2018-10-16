<template>
  <div class="hots">
    <div class="title">
      <div class="name">热门商品</div>
    </div>

    <div class="content">
      <Product v-for="(p,i) in items" :key="i" :item="p"></Product>
    </div>
  </div>
</template>

<script>
  import Product from "./Product.vue";
  export default {
    props:["items"],
    components:{
      Product
    }
  }
</script>

<style scoped>
  .title{
    height: 60px;
    width: 1220px;
    background-color: #f3f3f3;
    margin: auto;
  }
  .name{
    position: relative;
    text-align: left;
    top: 20px;
    left: 20px;
  }
.content{
  width: 1220px;
      background-color: white;
      margin: 0 auto;
}
  .content:after{
    content: "";
    display:block;
    clear:both;
  }
  .hots{
    margin-top: 35px;
    height: 430px;
  }
</style>
