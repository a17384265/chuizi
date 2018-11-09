<template>
  <div>
    <!--template以下才是组件的HTML模板，仍然只能有一个根标签-->
    <div class="app">
      <div class="title"><h2 class="h2">购物清单</h2></div>
    </div>
    <div>
      <div class="father">
        <div class="title-message">
          <span class="productMessage">商品信息</span>
          <span class="price">单价</span>
          <span class="count">数量</span>
          <span class="total">小计</span>
          <span class="option">操作</span>
        </div>

        <div class="cartItem">
          <div v-for="p in $store.state.products" class="v-for">
            <input type="checkbox" v-model="p.check" class="checkbox">
            <div class="productImage"><a href="" class="productImage"><img :src="$store.state.IMGURL+p.productImage"
                                                                           alt="" class="img"></a></div>
            <div class="productName">{{p.productName}}</div>

            <div class="sub_title">{{p.sub_title}}</div>
            <div class="salePrice">&yen{{p.salePrice}}</div>
            <div class="count"><i class="el-icon-remove-outline jianjian" @click="jianjian(p)"
                                  :class="{'point':p.num==1}"></i><input type="text" v-model="p.num" class="pnum"><i
              class="el-icon-circle-plus-outline jiajia" @click="jiajia(p)"></i></div>
            <div class="computed">{{p.num * p.salePrice}}</div>
            <div class="caozuo" @click="remove(p)"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="cartBottom">
      <input name="Fruit" type="checkbox" value="全选" v-model="checkAll" class="selectAll"/><span
      class="selectAll1">全选</span>

      <el-row>
        <el-button type="primary">
          <router-link to="/login" class="jiesuan">结算</router-link>
        </el-button>
      </el-row>
      <div class="totaoPrice">总价:{{total_price}}元</div>
      <div class="total_count">共{{total_count}}件</div>
    </div>

  </div>
</template>

<script>

  import $ from "jquery"
  $(function () {
    $(".jiesuan").click(function () {
      var product = JSON.parse(localStorage.products);
      console.log(product)
      $.ajax({
        data: {"product": product},
        type: "post",
        url: "http://127.0.0.1:3000/payment",
        dataType: "json",
        success: function (data) {
          console.log(data)
        }
      })
    })

  })
  export default {
    //无需写template，data仍然以函数返回，其他属性照旧
    data(){
      return {}
    },
    props: [],
    methods: {
      remove: function (p) {
        localStorage.products = JSON.stringify(this.$store.state.products);
        return this.$store.state.products.splice(p, 1)
      },
      jianjian: function (p) {
        if (p.num > 1) {
          return p.num--
        }
      },
      jiajia: function (p) {
        return p.num++
      }
    },
    computed: {
      total_price: function () {
        var price = 0;
        for (var i = 0; i < this.$store.state.products.length; i++) {
          var price1 = this.$store.state.products[i].salePrice
          var count = this.$store.state.products[i].num
          if (this.$store.state.products[i].check) {
            price += count * price1;
          }
        }
        return price.toFixed(2);
      },
      total_count: function () {
        var count = 0;
        for (var i = 0; i < this.$store.state.products.length; i++) {
          if (this.$store.state.products[i].check) {
            count += this.$store.state.products[i].num
          }
        }
        return count
      },
      checkAll: {
        set: function (c) {
          console.log(c)
          for (var i = 0; i < this.$store.state.products.length; i++) {
            this.$store.state.products[i].check = c;
          }
        },
        get: function () {
          var all = true;
          for (var i = 0; i < this.$store.state.products.length; i++) {
            var c = this.$store.state.products[i].check;
            all = all && c;
          }
          return all;
        }
      }
    }
  }
</script>

<!--这个scoped可以让这些样式仅在当前组件生效-->
<style scoped>
  .v-for {
    height: 150px;
  }

  .productImage {
    float: left;
    margin-left: 20px;
  }

  .point {
    cursor: not-allowed !important;
  }

  .productName {
    position: relative;
    top: 20px;
  }

  .sub_title {
    position: relative;
    top: 20px;
  }

  .checkbox {
    position: relative;
    left: -100px;
    top: 33px;
    z-index: 1;
  }

  .father {
    content: "";
    clear: both;
    display: block;
  }

  .salePrice {
    float: left;
    margin-left: 580px;
    position: absolute;
  }

  .computed {
    float: left;
    position: absolute;
    margin-left: 960px;;
  }

  .caozuo {
    float: right;
    position: absolute;
    top: 120px;
  }

  .pnum {
    text-align: center;
    width: 20px;
    background-color: #f5f5f5;
  }

  .pnum {
    float: left;
    position: relative;
    left: -600px;
    top: 6px;
  }

  .jianjian {
    font-size: 24px;
    float: left;
    position: relative;
    right: 620px;
    cursor: pointer;
  }

  .jiajia {
    font-size: 24px;
    float: left;
    position: relative;
    right: 580px;
    cursor: pointer;

  }

  .jiesuan {
    color: white;

  }

  .el-row {
    float: right;
    margin-right: 20px;
    line-height: 80px;
  }

  .selectAll1 {
    font-size: 18px;
  }

  .total_count {
    float: right;
    margin-right: 20px;
    line-height: 80px;
  }

  .totaoPrice {
    font-size: 16px;
    float: right;
    margin-right: 20px;
    line-height: 80px;
  }

  .selectAll {
    margin-left: 20px;
  }

  .caozuo {
    width: 20px;
    height: 20px;
    background-color: red;
    background: url("../assets/icon/account.png") no-repeat -50px -60px;
    position: relative;
    float: right;
    left: -80px;
    top: 1px;

  }

  span {
    line-height: 100px;
  }

  .img {
    width: 80px;
    height: 80px;
    border: 1px solid gainsboro;
  }

  .productMessage {
    margin-left: 20px;
    line-height: 40px;
  }

  .price {
    margin-right: 600px;
    float: right;
    line-height: 40px;
  }

  .count {
    margin-right: -250px;
    float: right;
    line-height: 40px;

  }

  .total {
    margin-right: -400px;
    float: right;
    line-height: 40px;
  }

  .option {
    margin-right: -550px;
    float: right;
    line-height: 40px;
  }

  .cartBottom {
    width: 1220px;
    height: 80px;
    border: 1px solid #dbdbdb;
    background-color: #f5f5f5;
    margin: 0 auto;
  }

  .cartItem {
    width: 1220px;
    border: 1px solid #dbdbdb;
    background-color: #f5f5f5;
    margin: 0 auto;
  }

  .cartItem:after {
    content: "";
    clear: both;
    display: block;
  }

  .title-message {
    width: 1220px;
    height: 40px;
    border: 1px solid #dbdbdb;
    background-color: #f5f5f5;
    margin: 0 auto;
  }

  .h2 {
    width: 1180px;
    margin: 0 auto;
    line-height: 60px;
    font-size: 16px;
  }

  .title {
    width: 1220px;
    height: 60px;
    border: 1px solid #dbdbdb;
    background-color: #fafafa;
    margin: 0 auto;
  }
</style>
