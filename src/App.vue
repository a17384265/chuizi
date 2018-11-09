<template>
  <div id="app">
    <Appup v-if="$route.name !== 'login'"></Appup>
    <Xiding v-if="$route.name !== 'login'"></Xiding>
    <router-view></router-view>
    <Appdown v-if="$route.name !== 'login'"></Appdown>
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
