<template>
    <!--template以下才是组件的HTML模板，仍然只能有一个根标签-->
    <div class="showAll">
      <ShowAllProducts :items2="all"></ShowAllProducts>
    </div>
</template>

<script>
  import axios from "axios"
  import ShowAllProducts from "./ShowAllProducts.vue"
  export default {
        //无需写template，data仍然以函数返回，其他属性照旧
        data(){
            return {
                all:{}
            }
        },
      created(){
        axios.get("/api/products").then((resp)=>{
          this.all = resp.data;

        })
      },
    components:{
      ShowAllProducts
    }

    }
</script>

<!--这个scoped可以让这些样式仅在当前组件生效-->
<style scoped>

</style>
