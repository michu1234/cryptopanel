<template>
  <div id="shortlist">
    <div class="container-fluid row shortlist__box">
      <div class="col-md-2">
        <input v-model="searchPair" type="text"></input> 
        <table class="container table table-hover table-condensed table-responsive shortlist__table mt-3">
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
      <div class="col-md-9">
        <div id="mainChart"></div>
      </div>
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
        displayValue: '',
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
      },
      addMainChart() {
        var mainChart = c3.generate({
          bindto: '#mainChart',
          size: {
            height: 550,
            width: 1100
          },
          data: {
            columns: [
              ['data1', 130, 100, 140, 200, 150, 50, 44, 57, 34, 130, 100, 140, 220, 12, 44, 88, 34 ]
            ],
            colors: {
              data1: '#f7931a'
            },
            types: {
              data1: 'area-spline'
            }
          }
        });
      }
    },
    created() {
      this.getValues();
      setInterval(()=>{this.getValues(); console.log('a');},5000);
    },
    mounted() {
      this.addMainChart();
    }
  }
</script>

<style lang="scss">
  h2 {
    margin: 50px;
  }

  .shortlist__box {
    max-height: 600px;
    overflow: hidden;
  }

  .shortlist__table {
    overflow-y: scroll;
    max-height: 500px;
  }
</style>
