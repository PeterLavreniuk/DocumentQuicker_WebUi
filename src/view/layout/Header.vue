<template>
  <div id="header_style">
    <div id="header_title">
      <router-link to="/">DocumentQuicker</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
#header_style{
  background: #649bf6;
  height: 60px;
}

#header_title{
  font-size: 32px;
  color: #222222;
  text-align: left;
  margin: 0px 0px 0px 64px;
}

a:link{text-decoration: none; color: #222222}
a:visited{text-decoration: none; color: #222222}
a:hover{text-decoration: none; color: #222222}
a:active{text-decoration: none; color: #222222}
</style>