<template>
  <div id="app">
    <Appup></Appup>
    <Xiding></Xiding>
    <router-view></router-view>
    <Appdown></Appdown>
  </div>
</template>


<script>
  import Appup from "./components/Appup"
  import Appdown from "./components/Appdown"
  import Xiding from "./components/Xiding.vue"
export default {
  name: 'App',
  components:{
    Appup,
    Appdown,
    Xiding
  }
}
</script>

<style>
#app {

}
</style>
