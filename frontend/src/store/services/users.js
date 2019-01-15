import axios from 'axios'
import * as firebase from 'firebase'

const state = {
  loadedHairdressers: [
    {
      firstname: '',
      lastname: '',
      bio: '',
      company: '',
      imageUrl: '',
      age: null
    }
  ]
},

getters = {
    loadedHairdressers (state) {
      return state.loadedHairdressers.sort((hairDressersA, hairDressersB) => {
        return hairDressersA.date > hairDressersB.date
      })
    },
    featuredHairdressers (state, getters) {
      return getters.loadedHairdressers.slice(0, 5)
    },
    loadedHairdressers (state) {
      return (hairdesserId) => {
        return state.loadedHairdressers.find((hairdesser) => {
          return hairdesser.id === hairdesserId
        })
      }
    }
},

mutations = {
  setLoadedHairdressers (state, payload) {
  state.loadedHairdressers = payload
  },
  createHairdresser (state, payload) {
    state.loadedHairdressers.push(payload)
  }
},

actions = {
    loadHairdressers ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('hairdessers').once('value')
        .then((data) => {
          const hairdesser = []
          const obj = data.val()
          for (let key in obj) {
            hairdessers.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              creatorId: obj[key].creatorId
            })
          }
          commit('setLoadedHairdressers', hairdesser)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    },
    createHairdresserProfile ({commit, getters}, payload) {
      const hairdesser = {
        firstname: payload.firstname,
        lastname: payload.lastname,
        imageUrl: payload.imageUrl,
        bio: payload.bio,
        age: payload.age,
        creatorId: getters.user.id
      }
      firebase.database().ref('hairdressers').push(hairdesser)
        .then((data) => {
          const key = data.key
          commit('createHairdresser', {
            ...hairdesser,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
      // Reach out to firebase and store it
    },
}

export default {
  state,
  getters,
  mutations,
  actions
}
