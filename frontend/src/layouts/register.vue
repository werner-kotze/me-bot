<template>
  <v-app id="inspire">
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-title>topnot</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
       <v-layout align-center justify-center>
         <v-flex xs12 sm8 md4>
           <v-card class="elevation-12">
             <v-toolbar dark color="indigo">
               <v-toolbar-title>Login form</v-toolbar-title>
               <v-spacer></v-spacer>
               <v-tooltip bottom>
                 <v-btn
                   icon
                   large
                   :href="source"
                   target="_blank"
                   slot="activator"
                 >
                   <v-icon large>code</v-icon>
                 </v-btn>
                 <span>Source</span>
               </v-tooltip>
             </v-toolbar>
             <v-card-text>
               <v-form>
                 <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                 <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
               </v-form>
             </v-card-text>
             <v-card-actions>
               <v-spacer></v-spacer>
               <v-btn color="primary">Login</v-btn>
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
    name: 'Login',
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
