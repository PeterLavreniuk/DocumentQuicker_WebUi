<template>
  <div>
    <div>
      <h1>Banks</h1>
    </div>
    <div>
      <div>
        <button>Add</button>
        <BankListItem v-for="bank in bankList" :bankInfo="bank" :key="bank.id"/>
      </div>
    </div>
  </div>
</template>

<script>

import axios from'axios'
import BankListItem from "@/view/components/BankListItem";

export default {
  name: "Banks",
  components: {
    BankListItem
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