<template>
  <div>
    <h1>Requisites</h1>
    <button v-on:click="handleBanksClick">Banks</button>
  </div>
</template>

<script>
export default {
  name: "Requisites",
  methods: {
    handleBanksClick: function (){
      this.$router.push('/requisites/banks')
    }
  }
}
</script>

<style scoped>

</style>