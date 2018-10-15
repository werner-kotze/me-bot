import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import Vuetify from 'vuetify'
import AlertCmp from '@/components/alert.vue'

import axios from 'axios'

import VueAnalytics from 'vue-analytics'

import App from '@/App.vue'
import * as firebase from 'firebase'
import './registerServiceWorker'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

Vue.config.productionTip = false
Vue.component('app-alert', AlertCmp)
// more info: https://github.com/MatteoGabriele/vue-analytics
Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GOOGLE_ANALYTICS,
  router
})

Vue.use(Vuetify, {
  iconfont: 'fa',
  icons: {
    'menu': 'fas fa-ellipsis-v'
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBXEK2IakYa6zHX-bvvbIE7Ui6uG4qX5SM",
      authDomain: "topnot-74d6f.firebaseapp.com",
      databaseURL: "https://topnot-74d6f.firebaseio.com",
      projectId: "topnot-74d6f",
      storageBucket: "topnot-74d6f.appspot.com"
    })
  }
}).$mount('#app')
