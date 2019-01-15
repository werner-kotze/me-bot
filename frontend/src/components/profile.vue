<template>
  <v-app id="inspire">
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-title>topnot</v-toolbar-title>
    </v-toolbar>
    <v-content>
        <v-card flat>
        <v-form ref="form" @submit.prevent="onCreateHairdresser">
          <v-container grid-list-xl fluid>
            <v-layout wrap>
              <v-flex xs12 sm6>
                <v-text-field
                  name="firstname"
                  label="First name"
                  v-model="firstname"
                  id="firstname"
                  color="purple darken-2"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  name="lastname"
                  label="Last name"
                  v-model="lastname"
                  color="blue darken-2"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  name="imageUrl"
                  label="Image Url"
                  v-model="imageUrl"
                  color="blue darken-2"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-textarea
                  v-model="bio"
                  color="teal"
                >
                  <div slot="label">
                    Bio <small>(optional)</small>
                  </div>
                </v-textarea>
              </v-flex>
              <v-flex xs12 sm6>
                <v-slider
                  v-model="age"
                  color="orange"
                  label="Age"
                  hint="Be honest"
                  min="1"
                  max="100"
                  thumb-label
                ></v-slider>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              flat
              color="primary"
              type="submit"
            >Register</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-content>
    <v-footer color="indigo" app>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data () {
      return {
        firstname: '',
        lastname: '',
        bio: '',
        age: '',
        imageUrl: ''
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
          this.$router.push('profile')
        }
      }
    },
  }
</script>
<style lang="scss" scoped>
  h1 {
    text-align: center;
  }
</style>
