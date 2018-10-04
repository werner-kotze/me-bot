<template>
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
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon>question_answer</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>FAQ</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon>lock</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Login</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
  </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      open: false
    };
  }
};
</script>

<style lang="scss">
</style>
