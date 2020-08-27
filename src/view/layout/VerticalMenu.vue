<template>
  <div id="menu_style">
    <ul>
      <li>
        <router-link class-active="active" to="/">Dashboard</router-link>
      </li>
      <li>
        <router-link to="/requisites">Requisites</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VerticalMenu"
}
</script>

<style scoped>
#menu_style{
  background: #a3c3fa;
  height: 100%;
}

ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li a {
  display: block;
  color: #000000;
  padding: 8px 16px;
  text-decoration: none;
}

li a.active {
  background-color: red;
  color: white;
}

li a:hover:not(.active) {
  background-color: #4474d9;
  color: white;
}

</style>