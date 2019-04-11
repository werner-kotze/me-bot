<template>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="onClickBtn"><v-icon>menu</v-icon></v-toolbar-side-icon>
      <v-toolbar-title>topnot</v-toolbar-title>
    </v-toolbar>
</template>

<script>

// Utilities
import {
  mapMutations
} from 'vuex'

export default {
  // data: () => ({
  //   drawer: null
  // }),
  props: {
    source: String
  },
  computed: {
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    //...mapMutations(['setDrawer', 'toggleDrawer']),
    ...mapMutations(['setDrawer', 'toggleDrawer']),
    onClickBtn () {
      this.setDrawer(!this.$store.state.sidebar)
    },
    onClick () {
      //
    },
    onLogout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
click.stop="onClickBtn"
<style lang="scss" scoped>
  h1 {
    text-align: center;
  }
</style>
