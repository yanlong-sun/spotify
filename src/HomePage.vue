<template>
  <div id="app">
    <nav-bar class="navBar" />
    <main-page class="mainPage" />
    <main-page class="mainPage" />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import MainPage from '@/components/MainPage.vue'
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  .navBar {
    width: 100%;
    position: fixed;
  }
  .mainPage {
  }
}
</style>
