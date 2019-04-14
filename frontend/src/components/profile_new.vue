<template>
  <v-app id="inspire">
    <navbar/>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex xs12 sm6 offset-sm3>
            <material-card class="v-card-profile">
              <v-avatar
                slot="offset"
                class="mx-auto d-block"
                size="130"
              >
                <img
                  src="https://www.wired.com/images_blogs/wiredscience/2012/10/ff_musk4_f.jpg"
                >
              </v-avatar>
              <v-card-text class="text-xs-center">
                <h6 class="category text-gray font-weight-thin mb-3">CEO / CO-FOUNDER</h6>
                <h4 class="card-title font-weight-light">Elon Musk</h4>
                <p class="card-description font-weight-light">Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...</p>
              </v-card-text>
              <v-dialog v-model="dialog" persistent max-width="600px">
                <v-btn slot="activator" outline small fab color="indigo">
                  <v-icon>edit</v-icon>
                </v-btn>
               <v-card>
                 <v-card-title>
                   <span class="headline">User Profile</span>
                 </v-card-title>
                 <v-card-text>
                   <v-container grid-list-md>
                     <v-layout wrap>
                       <v-flex xs12 sm6 md4>
                         <v-text-field label="Legal first name*" required></v-text-field>
                       </v-flex>
                       <v-flex xs12 sm6 md4>
                         <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                       </v-flex>
                       <v-flex xs12 sm6 md4>
                         <v-text-field
                           label="Legal last name*"
                           hint="example of persistent helper text"
                           persistent-hint
                           required
                         ></v-text-field>
                       </v-flex>
                       <v-flex xs12>
                         <v-text-field label="Email*" required></v-text-field>
                       </v-flex>
                       <v-flex xs12>
                         <v-text-field label="Password*" type="password" required></v-text-field>
                       </v-flex>
                       <v-flex xs12 sm6>
                         <v-select
                           :items="['0-17', '18-29', '30-54', '54+']"
                           label="Age*"
                           required
                         ></v-select>
                       </v-flex>
                       <v-flex xs12 sm6>
                         <v-autocomplete
                           :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                           label="Interests"
                           multiple
                         ></v-autocomplete>
                       </v-flex>
                     </v-layout>
                   </v-container>
                   <small>*indicates required field</small>
                 </v-card-text>
                 <v-card-actions>
                   <v-spacer></v-spacer>
                   <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                   <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
                 </v-card-actions>
               </v-card>
             </v-dialog>
            </material-card>
          </v-flex>
       </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
    </v-footer>
  </v-app>
</template>

<script>

import navbar from '@/components/navbar.vue'
import { mapGetters } from 'vuex'

export default {

    components: {
      navbar
    },

    data () {
      return {
        firstname: '',
        lastname: '',
        bio: '',
        age: '',
        imageUrl: '',
        dialog: false
      }
    },

    methods: {
      onCreateHairdresser () {
        const hairdresserData = {
          firstname: this.firstname,
          lastname: this.lastname,
          bio: this.bio,
          age: this.age,
          imageUrl: this.imageUrl
        }
        this.$store.dispatch('createHairdresserProfile', hairdresserData)
        this.$router.push('/dashboard')
      }
    },

    computed: {
      ...mapGetters([
        'user',
        'error',
        'loading'
      ])
    },

    watch: {

      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('profile-new')
        }
      }

    }

  };

</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
  }
</style>
