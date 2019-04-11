import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

import users from '@/store/services/users'
import auth from '@/store/modules/auth'
import vuex from '@/store/utils/vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    users,
    auth,
    vuex
  }
})

export default store
