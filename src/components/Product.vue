<template>
  <div class="product">

    <div class="productItem">
      <div ><img :src="$store.state.IMGURL+item.productImage" alt="预览图"  class="productImg"></div>
      <div class="productName">{{item.productName}}</div><br>
      <div class="sub_title">{{item.sub_title}}</div><br>
      <div class="salePrice" style="display: block">{{item.salePrice}}</div>

      <el-row style="display: none" class="el-row">
        <el-button ><router-link :to="{name:'productDetail',query:item}" class="chakan">查看详情</router-link></el-button>
        <el-button type="primary"><router-link to="/" class="jiaru" @click="add">加入购物车</router-link></el-button>
      </el-row>
    </div>

  </div>
</template>

<script>
  export default {
    props:["item"],
    methosd:{
        add:function () {
          this.$store.commit('setproductImage',{name:libai})
        }
    }
  }
</script>

<style scoped>
  .productImg{
    width: 100%;
    height: 100%;
    display: block;
    margin: auto;
  }

  .productItem {
    float: left;
    width: 243px;
    height: 430px;
  }
  .productName{
    color: #424242;
    font-size: 16px;
    text-align: center;
    text-overflow: ellipsis; /*超过省略号*/
    white-space: nowrap; /*不换行*/
    overflow: hidden; /*超过隐藏*/
  }
  .salePrice{
    color: red;
    font-size: 24px;
    text-align: center;
  }
  .sub_title{
    color: #d0d0d0;
    text-overflow: ellipsis; /*超过省略号*/
    white-space: nowrap; /*不换行*/
    overflow: hidden; /*超过隐藏*/
    text-align: center;
  }
  .productItem:hover{
    transform: translateY(-3px);
    box-shadow: 1px 1px 20px #999;
    transition: transform .5s;

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
  left: 15px;
  top: 30px;
}

  .product :hover .el-row{
    display: block !important;

  }
  .product :hover .salePrice{
    display: none !important;

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


</style>
