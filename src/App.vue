<template>
  <HeaderMenu/>
  <MainPage/>
</template>

<script>
import HeaderMenu from './components/HeaderMenu.vue'
import MainPage from './components/MainPage.vue'
export default {
  name: 'App',
  components: {
    HeaderMenu, MainPage
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
