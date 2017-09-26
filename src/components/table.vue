<template>
<div id="app">
<div class="col-md-8 container">
   <h2 class="m-500">Check Cryptocurrency Price</h2>
    <table class="container table table-hover table-condensed table-responsive">
      <thead>
        <tr class="font-weight-bold">
        <td>Rank</td>
        <td>Name</td>
        <td>Symbol</td>
        <td>Price (USD)</td>
        <td>1H</td>
        <td>1D</td>
        <td>1W</td>
        <td>Market Cap (USD)</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="value in newValue">
        <td>{{value.rank}}</td>
        <td>{{value.name | capitalize}}</td>
        <td>{{value.symbol}}</td>
        <td>{{value.price_usd | currency}}</td>
        <td>{{value.percent_change_1h}}</td>
        <td>{{value.percent_change_24h}}</td>
        <td>{{value.percent_change_7d}}</td>
        <td>{{value.market_cap_usd}}</td>
      </tr>
    </tbody>
   </table>
 </div>
  </div>
</template>

<script>
  export default {
    name: 'table',
    data () {
      return {
        msg: 'Testowa informacja',
        newValue: ''
      }
    },
    created() {
        axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=20')
          .then((response) => {
          this.newValue = response.data;
          console.log(this.newValue);

        })
          .catch(function (error) {
          console.log(error);
        });
    }
  }
</script>

<style lang="scss">
  h2 {
    margin: 50px;
  }
</style>
