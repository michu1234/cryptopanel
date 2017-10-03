<template>
  <div id="app">
    <div class="col-md-2">
     <input v-model="searchPair" type="text"></input> {{pairName}}
      <table class="container table table-hover table-condensed table-responsive">
        <thead class="thead-default">
          <tr class="font-weight-bold">
            <td>Symbol</td>
            <td>1H</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="value in newValue">
            <td>{{value.symbol}}</td>
            <td :class="alertClass(value.percent_change_1h)"><span v-if="value.percent_change_1h > 0">+</span>{{value.percent_change_1h}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ShortList',
    data() {
      return {
        msg: 'Testowa informacja',
        newValue: '',
        searchPair: '',
        pairName: ''
      }
    },
    methods: {
      getValues() {
        axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=20')
          .then((response) => {
            this.newValue = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      alertClass(numberData) {
         return numberData > 0 ? "text-success" : "text-danger";
      }
    },
    created() {
      this.getValues();
      // setInterval(()=>{this.getValues(); console.log('a');},5000);
      

    }
  }
</script>

<style lang="scss">
  h2 {
    margin: 50px;
  }
</style>
