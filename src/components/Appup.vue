<template>
  <!--template以下才是组件的HTML模板，仍然只能有一个根标签-->
  <div class="app">
    <div class="head">
      <div class="inhead">
        <div class="icon1"></div>
        <router-link to="/products" class="products">全部商品</router-link>

        <div class="icon2">
          <div class="message" style="display: none">
            <div class="user">
              <div class="userImg"><img src="../assets/icon/defaultHead.3f70e7f.jpg" alt="" class="userPic"></div>
              <span>李白</span>
            </div>
            <div class="user_item">
              <router-link to="" class="router-link">我的订单</router-link>
            </div>
            <div class="user_item">
              <router-link to="" class="router-link">帐号资料</router-link>
            </div>
            <div class="user_item">
              <router-link to="" class="router-link">收货地址</router-link>
            </div>
            <div class="user_item">
              <router-link to="" class="router-link">售后服务</router-link>
            </div>
            <div class="user_item">
              <router-link to="" class="router-link">我的优惠</router-link>
            </div>
            <div class="user_item">
              <router-link to="" class="router-link">退出</router-link>
            </div>
          </div>
        </div>
        <div class="icon3">
          <div class="cart" style="display: none">
            <div v-if="$store.state.products.length==0" class="if">
              <span class="then">你的购物车是空的!</span>
            </div>

            <div v-if="$store.state.products.length!=0">
              <div v-for="(g,index) in $store.state.products" class="v-for">
                <div class="productImage"><img :src="$store.state.IMGURL+g.productImage" alt="" width="100px"
                                               height="100px" class="img"></div>

                <div class="productName">{{g.productName}}</div>
                <div class="sub_title">{{g.sub_title}}</div>
                <div class="salePrice">{{g.salePrice}}</div>
                <span class="cheng">*</span><input type="text" v-model="g.num" style="width:20px" class="input">

              </div>

            </div>
            <div class="cartTotalNum">共:{{$store.getters.cartTotalNum}}件</div>
            <div class="totalPrice">总价:{{$store.getters.carTotalPrice}}</div>
            <el-row>
              <el-button type="primary">
                <router-link :to="{name:'order',query:$store.state.products}" class="chakan">去结算</router-link>
              </el-button>

            </el-row>
          </div>
        </div>
      </div>
    </div>
    <div class="xiding">
    </div>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    props: [],
    //无需写template，data仍然以函数返回，其他属性照旧
    data(){
      return {}
    },
    computed: {
      //要计算vuex中的state时候用computed 因为data是create后就创建好的 不能修改???
      goods(){
        console.log(this.$store.state.products)
        return this.$store.state.products
      },
      jiesuan(){
      }
    }

  }
</script>

<!--这个scoped可以让这些样式仅在当前组件生效-->
<style scoped>
  .cartTotalNum {
    display: inline-block;
    margin-left: 30px;
    font-size: 20px;
  }

  .totalPrice {
    display: inline-block;
    font-size: 20px;
  }

  .head {
    width: 100%;
    background-color: black;
    height: 100px;
  }

  .el-row {
    float: right;
    margin: 0 20px 20px 0;
    position: relative;
    top: -10px;

  }

  .chakan {
    color: white;
  }

  .cheng {
    position: relative;
    left: 100px;
    top: -47px;
    color: grey;
  }

  .productImage {
    display: inline-block;
  }

  .productName {
    font-size: 16px;
    display: inline-block;
    position: relative;
    top: -50px;
  }

  .salePrice {
    color: red;
    display: inline-block;
    position: relative;
    left: 100px;
    top: -50px;
  }

  .sub_title {
    color: #BEBEBE;
    position: relative;
    left: 100px;
    top: -50px;
    overflow: hidden;
  }

  .input {
    text-align: center;
    background-color: whitesmoke;
    position: relative;
    right: -100px;
    bottom: 50px;

  }

  .if {
    width: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 333px;
  }

  .then {
    font-size: 24px;
    opacity: 0.5;
  }

  .inhead {
    width: 1220px;
    height: 73px;
    background-color: black;
    margin: auto;

  }

  .icon1 {
    height: 80px;
    width: 100px;
    background: url("../assets/icon/global-logo.85550cd.png") no-repeat 0 0;
    transform: scale(0.5);
    float: left;
  }

  .icon2 {
    width: 20px;
    height: 20px;
    left: 900px;
    top: 40px;
    position: relative;
    cursor: pointer;
    float: left;
    background: url("../assets/icon/account.png") no-repeat -64px 0px;
  }

  .icon3 {
    display: inline-block;
    width: 20px;
    height: 20px;
    left: 950px;
    top: 40px;
    position: relative;
    cursor: pointer;
    background: url("../assets/icon/account.png") no-repeat -66px -22px;
  }

  .products {
    float: left;
    position: relative;
    left: 800px;
    top: 40px;
    color: white;
  }

  .message {
    height: 380px;
    width: 168px;
    border: 1px solid #f5f5f5;
    background-color: whitesmoke;
    z-index: 100;
    border-radius: 15px;
    position: absolute;
    left: -70px;
    top: 20px;
  }

  .user {
    width: 168px;
    height: 108px;
    text-align: center;
    color: #757575;
  }

  .userImg {
    margin: auto;
    margin-top: 18px;
  }

  .userPic {
    width: 46px;
    height: 46px;
  }

  .user_item {
    width: 168px;
    height: 44px;
    font-size: 12px;
    text-align: center;
    display: inline-block;
    margin-top: -2px;
  }

  .router-link {
    color: #757575;
    line-height: 44px;
  }

  .icon2:hover .message {
    display: block !important;
  }

  .cart {
    width: 360px;

    background-color: whitesmoke;
    position: absolute;
    left: -150px;
    top: 20px;
    border-radius: 15px;
    z-index: 100;
  }

  .icon3:hover .cart {
    display: block !important;
  }
</style>
