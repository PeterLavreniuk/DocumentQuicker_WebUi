<template>
  <div>
    {{bankInfo.description}} <br>
    {{bankInfo.bic}} <br>
    {{bankInfo.corrAccount}} <br>
    {{bankInfo.corrAccount}} <br>
    {{bankInfo.creationDate}} <br>
    {{bankInfo.editDate}} <br>
  </div>
</template>

<script>

const State = Object.freeze({ Undefined : 0, Edit: 1, Preview : 2});

export default {
  name: "BankModel",
  props: {
    bankInfo: Object,
    state: State.Undefined
  }
}
</script>

<style scoped>

</style>