<template>
  <div id="bank_info_container">
    {{bankInfo.description}} <br>
    {{bankInfo.bic}} <br>
    {{bankInfo.corrAccount}} <br>
    {{bankInfo.creationDate}} <br>
    {{bankInfo.editDate}} <br>
    <button>Edit</button> <br>
    <button>Remove</button>
  </div>
</template>

<script>
export default {
  name: "BankReadonly",
  props: {
    bankInfo: Object
  }
}
</script>

<style scoped>
#bank_info_container{
  margin: 10px;
}
</style>