<template>
  <div id="bank_info_container">
    {{bankInfo.description}} <br>
    {{bankInfo.bic}} <br>
    {{bankInfo.corrAccount}} <br>
    <button v-on:click="bankMoreClick($event, bankInfo.id)">More...</button> <br>
  </div>
</template>

<script>
export default {
  name: "BankListItem",
  props: {
    bankInfo: Object
  },
  methods: {
    bankMoreClick: function (event, id){
      this.$router.push('/requisites/banks/' + id);
    }
  }
}
</script>

<style scoped>
#bank_info_container{
  margin: 10px;
}
</style>