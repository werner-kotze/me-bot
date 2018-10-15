<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
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
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"><v-icon>menu</v-icon></v-toolbar-side-icon>
      <v-toolbar-title>topnot</v-toolbar-title>
    </v-toolbar>
    <v-content>
    </v-content>
    <v-footer color="indigo" app>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    },
    computed: {
      menuItems () {
        let menuItems = [
          {icon: 'face', title: 'Sign up', link: '/signup'},
          {icon: 'lock_open', title: 'Sign in', link: '/'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {icon: 'dashboard', title: 'Home', link: '/dashboard'},
            {icon: 'question_answer', title: 'FAQ', link: '/'},
            {icon: 'person', title: 'Profile', link: '/'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
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
