// vue dependencies
import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import Vuetify from 'vuetify'

// initialize app
import App from '@/App.vue'

// firebase
import * as firebase from 'firebase'

// styling
import './stylus/main.styl'
import './styles/index.scss'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

// theme
Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: '#512DA8',
    secondary: '#F5F5F5',
    accent: '#FFEB3B',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

// components
import './components'
import AlertCmp from '@/components/alert.vue'
import MaterialCard from '@/components/card.vue'
import Offset from '@/components/offset.vue'

Vue.component('app-alert', AlertCmp)
Vue.component('material-card', MaterialCard)
Vue.component('helper-offset', Offset)

// api
import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

// pwa requirements
import './registerServiceWorker'
Vue.config.productionTip = false

// analytics
import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GOOGLE_ANALYTICS,
  router
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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
}).$mount('#app')
