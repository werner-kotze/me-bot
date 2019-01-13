import axios from 'axios'
import * as firebase from 'firebase'


const state = {
  address : null,
  long : null,
  lat : null
}

const getters = {
  address (state) {
    return state.address
  },
  long (state) {
    return state.long
  },
  lat (state) {
    return state.lat
  }

}

const mutations = {
  setAddress (state, payload) {
    state.country = payload.address
  },
  setLong (state, payload) {
    state.long = payload.long
  },
  setLat (state, payload) {
    state.lat = payload.lat
  }
}

 const actions = {
  locate ({commit}, payload) {
    commit('setLong', payload.long)
    commit('setLat' , payload.lat)
    commit('setAddress',payload.address)
    alert(state.long)
    }

 }

 export default {
  state,
  getters,
  mutations,
  actions
}
