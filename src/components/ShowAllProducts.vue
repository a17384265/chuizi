<template>
    <!--template以下才是组件的HTML模板，仍然只能有一个根标签-->
    <div class="biankuang">

      <div class="taxian">
      <div v-for="(u,index) in items2" class="zhanshi">
        <div class="img1"><img :src="$store.state.IMGURL+u.productImage[0]" alt="" class="img"></div>
        <div class="productName">{{u.productName}}</div><br>
        <div class="sub_title"> {{u.sub_title}}</div><br>
        <div class="salePrice" style="display: block">{{u.salePrice}}</div><br>
        <el-row style="display: none" class="el-row">
          <el-button ><router-link class="mess" :to="{name:'productDetail',query:u}" style="color: black;">查看详情</router-link></el-button>

          <el-button type="primary"><router-link to="/productDetail" class="cart">加入购物车</router-link></el-button>
        </el-row>
      </div>
      </div>

    </div>
</template>

<script>
    export default {
        //无需写template，data仍然以函数返回，其他属性照旧
      props:["items2"],
        data(){
            return {}
        },
    }
</script>

<!--这个scoped可以让这些样式仅在当前组件生效-->
<style scoped>
  .taxian:after{
    content: "";
    display:block;
    clear:both;
  }
.biankuang{
  width: 1220px;
  margin: auto;

  margin-top: 100px;
}
  .zhanshi{
    width: 305px;
    height: 430px;
    background-color: white;
    float: left;
  }
  .img1{
    width: 206px;
    height: 206px;
    margin: 0 auto;
    margin-top: 40px;

  }
  .img{
    width: 100%;
    height: 100%;
    display: block;
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
  .zhanshi:hover{
    transform: translateY(-3px);
    box-shadow: 1px 1px 20px #999;
    transition: transform .5s;
  }
  .zhanshi:hover .el-row{
    display: block !important;
  }
  .zhanshi:hover .salePrice{
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
    top: 20px;
  }
  .mess{
    position: relative;
    color:black;
    top: -4px;
  }
  .cart{
    position: relative;
    color: white;
    top: -4px;
  }
</style>
