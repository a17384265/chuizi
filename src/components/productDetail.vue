<template>
    <!--template以下才是组件的HTML模板，仍然只能有一个根标签-->
  <div>
    <div class="productDetail">
      <div class="biankuang">
          <div class="div">

            <div v-if="typeof($route.query.productImage)=='string'">
          <div class="smalldiv">
            <li><img :src="$store.state.IMGURL+$route.query.productImage" alt="" class="small"
                     :class="{'check':1==1}"></li>
          </div>
            </div>
            <div v-else>
              <div class="smalldiv" v-for="(pic,inde) in $route.query.productImage"  @click="select(inde)"
                   :class="{'check':inde==index}">
                <li><img :src="$store.state.IMGURL+pic" alt="" class="small"></li>
              </div>
              <div class="hidden"></div>
            </div>
          </div>

        <div v-if="typeof($route.query.productImage)=='string'">
          <div class="bigdiv"><img :src="$store.state.IMGURL+$route.query.productImage" alt="" class="big"></div>
        </div>
        <div v-else>
          <div class="bigdiv"><img :src="$store.state.IMGURL+$route.query.productImage[index]" alt="" class="big"></div>
        </div>
          <div class="title-box">
          <div class="title">{{$route.query.productName}}
          <div class="subtitle">{{$route.query.sub_title}}</div>

            <div class="salePrice">{{$route.query.salePrice}}</div><hr>
          </div>
          </div>
          <div class="num">
            <div class="num1">
              <span class="span" >数量</span>
              <div class="icon3" @click="jianjian" :class="{'allow':num==1}"></div>
              <input type="text" class="input" v-model="num" >
              <div class="icon4" @click="jiajia"></div>
            </div>
            <hr>
          </div>

          <div class="buy" >
            <el-row  class="el-row">
              <el-button type="primary"><router-link to="" class="jiaru">加入购物车</router-link></el-button>
              <el-button ><router-link to="" class="chakan">现在购买</router-link></el-button>
            </el-row>
          </div>
      </div>
    </div>
    <br><br><br><br><br><br>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
        //无需写template，data仍然以函数返回，其他属性照旧
        data(){
            return {
                allpro:{},
                index:0,
              num:1,
            }
        },
      created(){
        axios.get("/api/products").then((resp)=>{
          this.allpro = resp.data;
        })
      },
      methods:{
        select:function (i) {
          this.index=i;
        },
        jianjian:function () {
            if(this.num>1){
            this.num--;
            }
       },
        jiajia:function () {
          this.num++;
        }

      }

    }
</script>

<!--这个scoped可以让这些样式仅在当前组件生效-->
<style scoped>
  .productDetail{
    width: 1220px;
    margin: auto;
    background-color: white;
  }
  .biankuang{
    width: 1220px;
    margin: auto;
    margin-top: 50px;
    padding: 60px;
  }
  .biankuang:after{
    content: "";
    display:block;
    clear:both;
  }
  .smalldiv{
    width: 80px;
    margin-left: 20px;

  }
  .div{
    float: left;
    width: 200px;
  }
  .small{
    width: 100%;



  }
  li{
    width: 80px;
    height: 80px;
  }
  .bigdiv{
    width: 440px;
    height: 440px;
    float: left;
  }
  .big{
    float: left;
    width: 100%;
    height: 100%;
    left: -50px;
    position: relative;
    top:30px;
  }
  .title-box{
    width: 450px;
    height: 120px;
    float: left;
  }
  .title{
    width: 432px;
    height: 62px;
  font-size: 24px;
    color: #000;
    position: relative;
    left: -50px;
  }
  .subtitle{
    width: 432px;
    height: 19px;
    color: #bdbdbd;
    font-size: 13px;
    margin-top: 20px;
  }
  .salePrice{
    width: 38px;
    height: 40px;
    font-size: 20px;
    color: red;
    position: relative;
    left: 400px;
    top: -30px;
  }
  .num{
    float: left;
    width: 450px;
    height: 100px;
    position: relative;
    left: -50px;
  }
  .buy{
    width: 450px;
    float: left;
    position: relative;
    left: -200px;
    top: 50px;
  }
  .el-button{
    width: 145px;
    height: 50px;
    text-align: center;
    font-size: 15px;
    position: relative;
    top: -30px;
  }
  .el-row{
    left: 140px;
    top: 40px;
  }
  .chakan{
    position: relative;
    color:black;
    top: 0;
  }
  .jiaru{
    position: relative;
    color: white;
    top: 0;
  }
  .check{
    width: 87px;
    border:4px solid grey;
    z-index: 8888;
  }
  .icon3{
    height: 35px;
    width: 35px;
    background: url("../assets/icon/button.jpg")0 -184px;
    float: left;

    position: relative;
    left: 20px;
    top: 34px;
    cursor: pointer;
  }
  .allow{
    cursor: not-allowed;
  }
  .input{
    width: 35px;
    height: 35px;
    float: left;
    position: relative;
    left: 20px;
    top: 33px;
    text-align:center;
    display: inline-block;

  }
  .icon4{
      width: 35px;
      height: 35px;
      background:url("../assets/icon/button.jpg") no-repeat 0 0;
      cursor:pointer;
      float: left;
      position: relative;
      left: 20px;
      top: 30px;
    }
  .span{
    float: left;
    margin: auto;
    font-size: 18px;
  }
  .num1:after{
    content: "";
    display:block;
    clear:both;
  }
  .num1{
    display: block;
    line-height: 100px;
  }
  .num{
    margin-top: 20px;
  }
  hr{
    width: 500px;
  }


  </style>
