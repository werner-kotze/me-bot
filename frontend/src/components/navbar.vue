<template>
  <v-navigation-drawer
  id="app-drawer"
    v-model="drawer"
    app
    floating
    persistent
    mobile-break-point="991"
    width="260"
  >
  <v-toolbar flat class="transparent">
     <v-list class="pa-0">
       <v-list-tile avatar>
         <v-list-tile-avatar>
           <img src="https://randomuser.me/api/portraits/men/85.jpg">
         </v-list-tile-avatar>
         <v-list-tile-content>
           <v-list-tile-title>John Leider</v-list-tile-title>
         </v-list-tile-content>
       </v-list-tile>
     </v-list>
    </v-toolbar>
    <v-list dense>
      <v-list-tile
        v-for="item in menuItems"
        :key="item.title"
        :to="item.link">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>{{ item.title }}</v-list-tile-content>
      </v-list-tile>
      <v-list-tile
        v-if="userIsAuthenticated"
        @click="onLogout">
        <v-list-tile-action>
          <v-icon>exit_to_app</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>Logout</v-list-tile-content>
    </v-list-tile>
  </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import {
  mapMutations,
  mapState
} from 'vuex'

export default {
  // data: () => ({
  //   drawer: null
  // }),
  props: {
    source: String
  },
  computed: {
    menuItems () {
      let menuItems = [
        {icon: 'face', title: 'Sign up', link: '/signup'},
        {icon: 'lock_open', title: 'Sign in', link: '/signin'}
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          {icon: 'dashboard', title: 'Home', link: '/dashboard'},
          {icon: 'question_answer', title: 'FAQ', link: '/'},
          {icon: 'person', title: 'Profile', link: '/profile'}
        ]
      }
      return menuItems
    },
    drawer: {
      get () {
        return this.$store.state.sidebar
      },
      set (val) {
        this.$store.commit('sidebar', val)
      }
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    //...mapMutations(['setDrawer', 'toggleDrawer']),
    onLogout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
  }
</style>
