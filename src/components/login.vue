<template>
  <!--template以下才是组件的HTML模板，仍然只能有一个根标签-->
  <div class="app">
    <form>
      <div class="name">
        <i class="iconfont icon-yonghu"></i>
        <input type="text" placeholder="用户名/邮箱" class="username" v-model="inputText.username">
      </div>
      <div class="pass">
        <i class="iconfont icon-yuechi"></i>
        <input type="password" placeholder="密码" class="password" v-model="inputText.password">
      </div>
      <div>
        <input type="submit" value="登录" @click="submit" class="submit"><a href="">注册 Smartisan ID</a><a href="">忘记密码</a>
      </div>
    </form>
  </div>
</template>

<script>
  import $ from 'jquery'
  $(function () {
    $(".submit").click(function () {
      var token = {}
      token.name = $(".username").val()
      token.pass = $(".password").val()
      console.log(token)
      $.ajax({
        data: token,
        type: "post",
        url: "http://127.0.0.1:3000/login",
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
      return {
        inputText: {}
      }
    },
    props: [],
    methods: {
      submit: function () {

      }
    }
  }
</script>

<!--这个scoped可以让这些样式仅在当前组件生效-->
<style scoped>
  @import "../assets/font_0osr0jsk9rr/iconfont.css";

  .name {
    border: 1px solid gainsboro;
    width: 360px;
  }

  .username {
    width: 320px;
    height: 40px;

  }

  .password {
    width: 320px;
    height: 40px;
    border: 1px solid gainsboro;
  }

  .app {
    text-align: center; /*让div内部文字居中*/
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #dadada;
    width: 450px;
    height: 550px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 9px 30px -6px rgba(0, 0, 0, .2);
  }
</style>
