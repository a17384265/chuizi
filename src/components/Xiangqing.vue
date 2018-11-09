<template>
    <!--template以下才是组件的HTML模板，仍然只能有一个根标签-->
    <div class="father">
      <div class="title"><div class="name1">{{item1.title}}</div></div>
      <div class="pic">
        <img :src="$store.state.IMGURL+item1.img" alt="详情图" class="img5">
      </div>

        <div v-for="(p,index) in item1.products"  class="img2">
          <div><img :src="$store.state.IMGURL+p.productImage" alt="详情" class="img1"></div>
          <div class="productName">{{p.productName}}</div><br>
          <div class="sub_title">{{p.sub_title}}</div><br>
          <div class="salePrice" style="display: block">{{p.salePrice}}</div>
          <el-row style="display: none" class="el-row">
            <el-button ><router-link :to="{name:'productDetail',query:p} "class="chakan">查看详情</router-link></el-button>
            <el-button type="primary"><router-link to="" class="jiaru" @click="shop">加入购物车</router-link></el-button>
          </el-row>
        </div>


    </div>
</template>

<script>

  export default {
        //无需写template，data仍然以函数返回，其他属性照旧
      props:["item1"],
    components: {},
      methods:{
        shop:function () {
         this.store.commit("buy",this.item1);
        }
      }
    }
</script>

<!--这个scoped可以让这些样式仅在当前组件生效-->
<style scoped>
  .father:after{
    content: "";
    display:block;
    clear:both;
  }
  .father{
    background-color: white;
    margin-top: 35px;
  }
  .title{
    width: 1220px;
    height: 60px;
    margin: auto;
    background-color: #f3f3f3;;
  }
  .pic{
    width: 610px;
    height: 430px;
    float: left;
  }
  .img5{
    width: 610px;
    height: 430px;
  }

  .img1{
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;

  }
  .img2{
    width: 304px;
    height: 430px;
    float: left;
    background-color: white;
  }
  .productName{
    color: black;
    font-size: 14px;
    text-align: center;
  }
  .sub_title{
    color: #d0d0d0;
    text-align: center;
  }
  .salePrice{
    color: red;
    text-align: center;
    font-size: 20px;
  }
  .img2:hover{
    transform: translateY(-3px);
    box-shadow: 1px 1px 20px #999;
    transition: transform .5s;
  }
  .img2:hover .el-row{
    display: block !important;
  }
  .img2:hover .salePrice{
    display: none !important;
  }
  .el-button{
    width: 100px;
    height: 30px;
    text-align: center;
    font-size: 10px;
    position: relative;
    top: -30px;
  }
  .el-row{
    left: 45px;
    top: 30px;
  }
  .chakan{
    position: relative;
    color:black;
    top: -4px;
  }
  .jiaru{
    position: relative;
    color: white;
    top: -4px;
  }
  .name1{
    position: relative;
    text-align: left;
    top: 20px;
    left: 20px;
  }


</style>
