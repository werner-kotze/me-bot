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
               <v-form  @submit.prevent="onLocate($data)" >
                 <div >
                 <input
                   v-model="address"
                   ref="autocomplete"
                   placeholder=" Enter your location"
                   class="search-location"
                   onfocus="value = ''"
                   type="text"
                   label = 'address'
                   />
                   </div>
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
      address : '',
      long : '',
      lat : ''
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
<style>
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}



.search-location {
  display: block;
  width: 60vw;
  margin: 0 auto;
  margin-top: 5vw;
  font-size: 20px;
  font-weight: 400;
  outline: none;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 10px;
}
</style>
