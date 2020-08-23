<template>
  <div id="app">
    <div class="header">
      <webapp-header/>
    </div>
    <div class="main">
      <webapp-main/>
    </div>
    <div class="footer">
      <webapp-footer/>
    </div>
  </div>
</template>

<script>

import Header from "@/view/layout/Header";
import Main from "@/view/layout/Main";
import Footer from "@/view/layout/Footer";

export default {
  name: 'App',
  components: {
    'webapp-header': Header,
    'webapp-main': Main,
    'webapp-footer': Footer
  }
}
</script>

<style>
#app {
  font-family: Ubuntu, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.footer{
  flex-shrink: 0;
}

.main{
  flex: 1 0 auto;
}

.header{
  flex-shrink: 0;
}

html, body{
  height: 100%;
  margin: 0;
}
</style>
