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
              <td :class="alertClass(value.percent_change_1h)">
                <span v-if="value.percent_change_1h > 0">+</span>{{value.percent_change_1h}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-9">
      <button @click="charType = 'bar'">Bar</button>
      <button @click="charType = 'scatter'">Scatter</button>
      <button @click="charType = 'step'">Step</button>
      <button @click="charType = 'area'">Area</button>
      <button @click="charType = 'area-spline'">Area Spline</button>
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
        displayValue: [],
        searchPair: '',
        pairName: '',
        charType: 'area-spline'
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
        let newTab = this.displayValue;
        let changeType = this.charType;
        var mainChart = c3.generate({
          bindto: '#mainChart',
          size: {
            height: 550,
            width: 1100
          },
          data: {
            columns: [
              ['Bitcoin', ...newTab]
            ],
            colors: {
              Bitcoin: '#f1431a'
            },
            types: {
              Bitcoin: changeType
            }
          },
    axis: {
        x: {
            label: 'Seconds'
        },
        y: {
            label: 'Price in USD'
        }
    },
    zoom: {
        enabled: true
    }
        });
      },
      testowa() {
        let test = this.newValue;
        let newTab = this.displayValue;
         newTab.push(parseFloat(test[0].price_usd) + (Math.random()*1000)+10); //faking more movement on chart
        // if (newTab.length < 10) {
        //   newTab.push(parseFloat(test[0].price_usd) + (Math.random()*1000)); //faking more movement on chart
        // } else {
        //   newTab.push(test[0].price_usd + Math.random());
        //   newTab.push(parseFloat(test[0].price_usd) + (Math.random()*1000))
        //   // newTab.shift();
        // }
        console.log(newTab);
      }
    },
    created() {
      this.getValues();
      setInterval(() => {
        this.getValues();
        console.log('refreshed');
      }, 4000);
      setInterval(() => {
        this.testowa()
      }, 1000);
    },
    mounted() {
      setInterval(()=>{this.addMainChart();},1000);
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
