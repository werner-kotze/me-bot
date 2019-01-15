<template>
  <v-app id="inspire">
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-title>topnot</v-toolbar-title>
    </v-toolbar>
    <v-content>
        <v-card flat>
        <v-form ref="form" @submit.prevent="onCreateHairdresser">
          <br/>
          <v-toolbar-title class="grey--text text--darken-3">Personal Information</v-toolbar-title>
          <v-container grid-list-xl fluid>
            <v-layout wrap>
              <v-layout column>

              <v-flex xs12  >
                <div class="my-8">
                  <image-uploader
                    :preview="true"
                    :className="['fileinput', { 'fileinput--loaded': hasImage }]"
                    capture="environment"
                    :debug="1"
                    doNotResize="gif"
                    :autoRotate="true"
                    outputFormat="verbose"
                    @input="setImage"
                  >
                    <label for="fileInput" slot="upload-label">
                      <figure>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                        >
                          <path
                            class="path1"
                            d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z"
                          ></path>
                        </svg>
                      </figure>
                      <span class="upload-caption">{{
                        hasImage ? "Replace" : "Click to upload"
                      }}</span>
                    </label>
                  </image-uploader>
                </div>

                <v-text-field
                  name="imageUrl"
                  label="Image Url"
                  v-model="imageUrl"
                  color="blue darken-2"
                  required
                ></v-text-field>
              </v-flex>
              </v-layout >

              
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
                  name="cellNumber"
                  label="Cellphone Number"
                  v-model="cellNumber"
                  color="blue darken-2"
                  optional
                ></v-text-field>
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
            </v-layout>
          </v-container>
          <br/>
          <v-toolbar-title class="grey--text text--darken-3">Business Information</v-toolbar-title>

            <v-container grid-list-xl fluid>
              <v-toolbar-title class="grey--text text--darken-1">Create</v-toolbar-title>

                <v-layout wrap>
                  <v-flex xs12 sm6>
                    <v-text-field
                      name="companyName"
                      label="Company name"
                      v-model="companyName"
                      id="companyName"
                      color="purple darken-2"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-text-field
                      name="companyAddress"
                      label="Address"
                      v-model="companyAddress"
                      color="blue darken-2"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-text-field
                      name="companySuburb"
                      label="Suburb"
                      v-model="companySuburb"
                      color="blue darken-2"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-text-field
                      name="companyCity"
                      label="City"
                      v-model="companyCity"
                      color="blue darken-2"
                      optional
                    ></v-text-field>
                  </v-flex>
                </v-layout>
            </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!formIsValid"
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
export default {
    data () {
      return {
        image: null,
        hasImage : false,
        firstname: '',
        lastname: '',
        bio: '',
        company: '',
        age: null,
        imageUrl: '',
        companies: [
          'Chop Shop',
          'Partners'
        ]
      }
    },
    computed: {
      formIsValid() {
        return this.firstname !== '' &&
          this.lastname !== '' &&
          this.company !== ''
      }
    },
    methods: {
      setImage: function(output) {
      this.hasImage = true;
      this.image = output;
      console.log(this.image);
    },
      onCreateHairdresser () {
        if (!this.formIsValid) {
          return
        }
        const hairdresserData = {
          firstname: this.firstname,
          lastname: this.lastname,
          bio: this.bio,
          company: this.company,
          age: this.age,
          imageUrl: this.imageUrl
        }
        this.$store.dispatch('createHairdresserProfile', hairdresserData)
        this.$router.push('/dashboard')
      }
    },
    mounted() {
     this.autocomplete = new google.maps.places.Autocomplete(
       (this.$refs.autocomplete),
       {types: ['geocode']}
     );
     this.autocomplete.addListener('place_changed', () => {
       let place = this.autocomplete.getPlace();
       let ac = place.address_components;
       var address = ' ';
       if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].long_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
          }
       this.lat = place.geometry.location.lat();
       this.long = place.geometry.location.lng();
       this.address = address;
      }
      );

   }
  }
</script>
<style lang="scss" scoped>
  h1 {
    text-align: center;
  }
  #fileInput {
  display: none;
}
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.my-8 {
  margin-top: 4rem;
  margin-bottom: 4rem;
}
</style>
