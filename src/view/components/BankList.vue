<template>
  <div>
    <button>Add</button>
    <BankReadonly v-for="bank in bankList" :bankInfo="bank" :key="bank.id"/>
  </div>
</template>

<script>
import axios from'axios'
import BankReadonly from "@/view/components/BankReadonly";

export default {
  name: "BankList",
  components: {
    BankReadonly
  },
  data(){
    return {
      bankList : null
    };
  },
  mounted() {
    const url = process.env.VUE_APP_API_ENDPOINT + "/api/v1/BankInfo";
    axios.get(url).then(response => {
      this.bankList = response.data;
      console.log(response);
    });
  }
}
</script>

<style scoped>

</style>