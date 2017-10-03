let CRYPTOCOMPARE_API_URI = "https://www.cryptocompare.com";

let COINMARKETCAP_API_URI = "https://api.coinmarketcap.com";

let UPDATE_INTERVAL = 60 * 1000;

let app = new Vue({
  el: "#app",
  data: {
    coins: [],
    coinData: {}
  },
  methods: {
    getCoinData: function () {
      let self = this;

      axios.get(CRYPTOCOMPARE_API_URI + "/api/data/coinlist")
        .then((resp) => {
          this.coinData = resp.data.Data;
          this.getCoins();
        })
        .catch((err) => {
          this.getCoins();
          console.error(err);
        });
    },
    getCoins: function () {
      let self = this;

      axios.get(COINMARKETCAP_API_URI + "/v1/ticker/?limit=10")
        .then((resp) => {
          this.coins = resp.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getCoinImage: function (symbol) {

      symbol = (symbol === "MIOTA" ? "IOT" : symbol);
      symbol = (symbol === "VERI" ? "VRM" : symbol);

      return CRYPTOCOMPARE_API_URI + this.coinData[symbol].ImageUrl;
    },

    getColor: (num) => {
      return num > 0 ? "color:green;" : "color:red;";
    },
  },

  created: function () {
    this.getCoinData();
  }
});
setInterval(() => {
  app.getCoins();
}, UPDATE_INTERVAL);



<table class="container table table-hover table-condensed table-responsive">
<thead>
  <tr class="font-weight-bold">
    <td>Rank</td>
  </tr>
</thead>
<tbody>
  <tr v-for=" in ">
    <td></td>
  </tr>
</tbody>
</table>