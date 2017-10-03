import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
import jQuery from 'jquery'
import Axios from 'axios'
global.axios = Axios
global.jQuery = jQuery

Vue.use(Vue2Filters)


//components//
import App from './App.vue'
import Table from './components/Table.vue'
import ShortList from './components/ShortList.vue'
import NavBar from './components/NavBar.vue'



Vue.component('vue-table', Table)
Vue.component('short-list', ShortList)
Vue.component('nav-bar', NavBar)



new Vue({
  el: '#app',
  render: h => h(App)
})
