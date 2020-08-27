<template>
  <div>
    <H1>Bank</H1>
    <BankModel :bankInfo="bank"/>
  </div>
</template>

<script>

import BankModel from "@/view/components/BankModel";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
const PageState = Object.freeze({ Undefined : 0, Create : 1, Edit : 2});

export default {
  name: "Bank",
  methods: {

  },
  components:{
    // eslint-disable-next-line vue/no-unused-components
    BankModel
  },
  data(){
    return{
      PageState,
      State : PageState.Undefined,
      bank : null
    }
  },
  mounted() {
    console.log(this.$route.params.id)

    let id = this.$route.params.id;
    if(id == undefined){
      this.State = PageState.Create;
    }
    // eslint-disable-next-line no-empty
    else{
      this.State = PageState.Edit;
      const url = process.env.VUE_APP_API_ENDPOINT + "/api/v1/BankInfo/" + id + "/info";
      axios.get(url).then(response => {
        this.bank = response.data;
        console.log(response);
      });
    }
  }
}
</script>

<style scoped>

</style>