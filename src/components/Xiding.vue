<template>

  <div class="banner " id="banner"  :class="isFixed== true?'isFixed':''">
    <div class="xiding">
      <!--<input type="text" class="searchBox" >-->
      <!--<input type="submit" class="search" value="搜索" @click="search">-->
      <router-link to="/" class="router-link">首页</router-link>
      <router-link to="/products" class="router-link">全部商品</router-link>
    </div>
  </div>

</template>

<script>

    export default {
        //无需写template，data仍然以函数返回，其他属性照旧
        data(){
            return {
              isFixed: false,

            }
        },
        props: [],
        methods: {
          //在methods监控滚动时间
          handleScroll () {
            this.$nextTick(() => {
              let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
              let headerTop = document.getElementById("banner");

              if (scrollTop > 10) {
                this.isFixed = true;
              } else {
                this.isFixed = false;
              }
            })
          },
          search(){
          }
        },
      mounted(){
        window.addEventListener('scroll', this.handleScroll);
      },
      destroyed(){
        window.removeEventListener('scroll', this.handleScroll);
      }
    }
</script>

<!--这个scoped可以让这些样式仅在当前组件生效-->
<style scoped>
  .banner{
    width: 100%;
    height: 90px;
    background-color: #fff;
  }
  .xiding{
    width: 1220px;
    height: 90px;
    margin: auto;
    background-color: #fff;
  }
  .router-link{
    color: #666;
    cursor: pointer;
    position: relative;
    top: 40px;
    padding-left: 20px;
  }
  .xiding {
    width: 1220px;
    text-align: left;
    height: 90px;
    background-color: #f7f7f7;
    margin: 0 auto;
  }
  .banner {
    width: 100%;
    border: 2px;
    background-color: #f7f7f7;
  }
  .isFixed{
    position: fixed;
    top: 0px;
    z-index: 4;
    width: 100%;
  }

  .search {
    float: right;
  }

  .searchBox {
    width: 150px;
    height: 20px;
    float: right;
  }



</style>
