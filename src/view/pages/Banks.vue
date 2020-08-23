<template>
  <div>
    <div>
      <h1>Banks</h1>
    </div>
    <div>
      <bank-list/>
    </div>
  </div>
</template>

<script>

import BankList from "@/view/components/BankList";

export default {
  name: "Banks",
  components: {
    BankList
  }
}
</script>

<style scoped>

</style>