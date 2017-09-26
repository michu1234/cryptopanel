import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
import jQuery from 'jquery'
global.jQuery = jQuery
import Axios from 'axios'
global.axios = Axios


Vue.use(Vue2Filters)


//components//
import App from './App.vue'
import Table from './components/table.vue'


Vue.component('vue-table', Table)


new Vue({
  el: '#app',
  render: h => h(App)
})
