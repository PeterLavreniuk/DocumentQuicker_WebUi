<template>
  <div id="main_style">
    <div id="menu">
      <main-menu/>
    </div>
    <div id="content">
      <main-content/>
    </div>
  </div>
</template>

<script>

import VerticalMenu from "@/view/layout/VerticalMenu";
import Content from "@/view/layout/Content";

export default {
  name: "Main",
  components: {
    'main-menu' : VerticalMenu,
    'main-content' : Content
  }
}
</script>

<style scoped>
#main_style{
  height: 100%;
  margin:0;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

#menu{
  width: 15%;
  height: 100%;
  flex: auto;
  flex-shrink: 0;
}
#content{
  width: 85%;
  height: 100%;
  flex: auto;
  flex-shrink: 0;
}
</style>