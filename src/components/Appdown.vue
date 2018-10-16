<template>
    <!--template以下才是组件的HTML模板，仍然只能有一个根标签-->
    <div>
      <div class="last">
        <div class="dibu">
          <a href="">简体</a>&nbsp;&nbsp;|
          <a href="">繁体</a>&nbsp;&nbsp;|
          <a href="">English</a>&nbsp;&nbsp;|
          <a href="">常见问题</a><br>
          <span class="span">Copyright © 2004-2018 xx.com 版权所有</span>
        </div>

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
        methods: {}
    }
</script>

<!--这个scoped可以让这些样式仅在当前组件生效-->
<style scoped>
  .last{
    width: 100%;
    height: 110px;
    margin-top: 50px;
    background-color: white;
  }
  .dibu{
    width: 1220px;
    margin: auto;
    text-align: center;
    background-color: white;
    position: relative;
    top: 40px;

  }

</style>
