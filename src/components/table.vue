<template>
  <div id="table">
    <div class="container-fluid">
      <h2 class="m-500 text-center">Check Cryptocurrency Price</h2>
      <h4 class="ml-4 mb-4 text-warning">Latest news:</h4>
      <div class="row">
        <div class="news-box col-md-2 mr-5">
          <ul class="newsTable">
            <li v-for="news in newsData">
              <p class="small font-weight-bold">{{news.title}}</p>
              <p><img :src="news.urlToImage"></p>
              <p class="small">{{news.description | cutText}}</p>
              <hr>
            </li>
          </ul>
        </div>
        <table class="container col-md-8 table table-hover table-condensed table-responsive">
          <thead class="thead-default">
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
              <td :class="alertClass(value.percent_change_1h)"><span v-if="value.percent_change_1h > 0">+</span>{{value.percent_change_1h}}</td>
              <td :class="alertClass(value.percent_change_24h)"><span v-if="value.percent_change_24h > 0">+</span>{{value.percent_change_24h}}</span>
              </td>
              <td :class="alertClass(value.percent_change_7d)"><span v-if="value.percent_change_7d > 0">+</span>{{value.percent_change_7d}}</span>
              </td>
              <td>{{value.market_cap_usd}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'table',
    data() {
      return {
        msg: 'Testowa informacja',
        newValue: '',
        picData: '',
        newsData: ''
      }
    },
    methods: {
      getValues() {
        axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=50')
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
    filters: {
      cutText: function (value) {
        value = value.toString()
        if (value.length > 40) {
          return value.slice(0, 90) + "...";
        }
      }
    },
    created() {
      this.getValues();
      // setInterval(()=>{this.getValues(); console.log('a');},5000)
      axios.get('https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=08952dd3e4054fed896dc4e18ebdd80d')
        .then((response) => {
          this.newsData = response.data.articles;
          console.log(response.data.articles[2].urlToImage);
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

  img {
    max-width: 130px;
  }

  ul {
    list-style: none;
  }

  .newsTable {
    border-left: 1px solid #ebebe0;
  }
</style>
