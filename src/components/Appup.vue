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
              <div class="user_item"><router-link to="" class="router-link">我的订单</router-link></div>
              <div class="user_item"><router-link to="" class="router-link">帐号资料</router-link></div>
              <div class="user_item"><router-link to="" class="router-link">收货地址</router-link></div>
              <div class="user_item"><router-link to="" class="router-link">售后服务</router-link></div>
              <div class="user_item"><router-link to="" class="router-link">我的优惠</router-link></div>
              <div class="user_item"><router-link to="" class="router-link">退出</router-link></div>
            </div>
          </div>
          <div class="icon3">
                <div class="cart" STYLE="display: none">
                    <div>{{$store.state.products}}</div>
                  </div>
          </div>
        </div>
      </div>
      <div class="xiding">
    </div>
    </div>
</template>

<script>

    export default {
        //无需写template，data仍然以函数返回，其他属性照旧
        data(){
            return {}
        },
        props: [],
      /*  methods: {
            hots(){
           return this.$store.state.hots
        }},*/
        created(){
          this.$store.dispatch('getdata')
          this.$store.dispatch('getdata1')
        }

    }
</script>

<!--这个scoped可以让这些样式仅在当前组件生效-->
<style scoped>
  .head{
    width: 100%;
    background-color: black;
    height: 100px;
  }

  .inhead{
    width: 1220px;
    height: 73px;
    background-color: black;
    margin: auto;

  }
  .icon1{
    height: 80px;
    width: 100px;
    background:url("../assets/icon/global-logo.85550cd.png") no-repeat 0 0;
    transform: scale(0.5);
    float: left;
  }
  .icon2{
    width: 20px;
    height: 20px;
    left: 900px;
    top: 40px;
    position: relative;
    cursor: pointer;
    float: left;
    background: url("../assets/icon/account.png") no-repeat -64px 0px;
  }
  .icon3{
    display: inline-block;
    width: 20px;
    height: 20px;
    left: 950px;
    top: 40px;
    position: relative;
    cursor: pointer;
    background: url("../assets/icon/account.png") no-repeat -66px -22px;

  }
  .products{
    float: left;
    position: relative;
    left: 800px;
    top: 40px;
    color: white;
  }
  .message{
    height: 380px;
    width: 168px;
    border:1px solid #f5f5f5;
    background-color: whitesmoke;
    z-index: 100;
    border-radius: 15px;
    position: absolute;
    left: -70px;
    top: 20px;
  }
  .user{
    width: 168px;
    height: 108px;
    text-align: center;
    color:#757575;
  }
  .userImg{
    margin: auto;
    margin-top: 18px;
  }
  .userPic{
      width: 46px;
    height: 46px;
  }

  .user_item{
    width: 168px;
    height: 44px;
    font-size: 12px;
    text-align: center;
    display: inline-block;
    margin-top: -2px;

  }
  .router-link{
    color:#757575;
    line-height:44px;

  }
  .icon2:hover .message{
    display: block!important;
  }
  .cart{
    width: 360px;
    height: 333px;
    background-color: whitesmoke;
    position: absolute;
    left: -150px;
    top: 20px;
    border-radius: 15px;
  }
  .icon3:hover .cart{
    display: block!important;
  }
 </style>
