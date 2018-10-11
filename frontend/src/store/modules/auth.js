import axios from 'axios'
import * as firebase from 'firebase'

const state = {
  loggedIn: false,
  profile: {},
  validation: { email: true },
  authError: false,
  user: null
}

const getters = {
  user (state) {
    return state.user
  }
}

const mutations = {
  login (state) {
    state.loggedIn = true
  },
  logout (state) {
    state.loggedIn = false
  },
  setProfile (state, payload) {
    state.profile = payload
  },
  setValidationEmail (state, bool) {
    state.validation.email = bool
  },
  setAuthError (state, bool) {
    state.authError = bool
  },
  setUser (state, payload) {
    state.user = payload
  }
}

const actions = {
  postLogin (context, payload) {
    return axios.post('/api/users/login/', payload)
      .then(response => {})
      .catch(e => {
        context.commit('setAuthError', true)
        console.log(e)
      })
  },
  postRegister (context, payload) {
    return axios.post('/api/users/register/', payload)
      .then(response => {
        if (response.data.status === 210) {
          context.commit('setValidationEmail', false)
        } else {
          context.commit('setValidationEmail', true)
          context.commit('login')
          context.commit('setProfile', response.data)
        }
      })
      .catch(e => { console.log(e) })
  },
  signUserUp ({ commit }, payload) {
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
    .then(
      user => {
        const newUser = {
          id: user.uid,
          rating: []
        }
        commit('setUser', newUser)
      }
    ).catch (
      error => {
        console.log(error)
      },
    )
  },
  getProfile (context) {
    return axios.get('/api/users/profile')
      .then(response => {
        context.commit('login')
        context.commit('setProfile', response.data)
      })
      .catch(e => {
        context.commit('logout')
        console.log(e)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
