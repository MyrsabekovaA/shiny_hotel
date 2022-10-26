<template>
  <HeaderMenu/>
  <router-view></router-view>
</template>

<script>
import HeaderMenu from './components/Layouts/HeaderMenu.vue'

export default {
  name: 'App',
  components: {
    HeaderMenu
  }
}
</script>

<style>
#app {
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  /*background-color: aliceblue;*/
}

body{
  margin: 0;
}

</style>
