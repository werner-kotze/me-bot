<template>
  <v-app light>
   <v-toolbar class="white">
     <v-icon>change_history</v-icon>
     <v-toolbar-title v-text="title"></v-toolbar-title>
   </v-toolbar>
   <v-content>
     <section>
       <v-card class="elevation-12">
             <v-toolbar dark color="primary">
               <v-toolbar-title>Find your Knitter</v-toolbar-title>
               <v-spacer></v-spacer>
              
             </v-toolbar>
             <v-card-text>
               <v-form  @submit.prevent="onLocate($data)">
                  <v-text-field
                   v-model="address"
                   prepend-icon="room"
                   name="address"
                   label="Enter your address"
                   type="string">
               </v-text-field>
                 <v-card-actions>
                   <v-spacer></v-spacer>
                   <v-btn type="submit" color="accent" :disabled="loading" :loading="loading">
                    Locate
                     <span slot="loader" class="custom-loader">
                      <v-icon light>cached</v-icon>
                     </span>
                  </v-btn>
                 </v-card-actions>
               </v-form>
             </v-card-text>
           </v-card>
           
           
         </v-layout>
       </v-parallax>
     </section>

    

     
   </v-content>
  </v-app>
</template>
<script>
   
    import { mapActions } from 'vuex'
    import { mapGetters } from 'vuex'
   
    export default {
    data: () => ({
      title: 'topnot',
      address: ''
    }),
    props: {
      source: String
    },
    computed: {
      ...mapGetters([
        'address'
      ])
    },
    methods: {
      ...mapActions({
        onLocate: 'locate'
      })
    }
    }
</script>
