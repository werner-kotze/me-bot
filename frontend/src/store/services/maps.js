import axios from 'axios'
import * as firebase from 'firebase'


const state = {
  address: null
}

const getters = {
  address (state) {
    return state.address
  }
}

const mutations = {
  setAddress (state, payload) {
    state.address = payload
  }
}
  
 const actions = {
  locate ({commit}, payload) {
    alert(payload.address) 
    commit('setAddress', payload.address)
  }
 }
 
 export default {
  state,
  getters,
  mutations,
  actions
}