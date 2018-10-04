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
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"><v-icon>menu</v-icon></v-toolbar-side-icon>
      <v-toolbar-title>topnot</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
         <v-flex xs12 sm6 offset-sm3>
           <v-card>
             <v-img
               src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
               aspect-ratio="2.75"
             ></v-img>

             <v-card-title primary-title>
               <div>
                 <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                 <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
               </div>
             </v-card-title>

             <v-card-actions>
               <v-btn flat color="orange">Share</v-btn>
               <v-btn flat color="orange">Explore</v-btn>
             </v-card-actions>
           </v-card>
         </v-flex>
       </v-layout>
      </v-container>
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
    }
  }
</script>

<style lang="scss" scoped>
    h1 {
      text-align: center;
    }
</style>
