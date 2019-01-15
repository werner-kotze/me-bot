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
                 <span class="group pa-1">
                   <v-icon>room</v-icon>
                 </span>
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


                   <v-btn type="submit" color="accent" >
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
         <br/>
         <v-flex xs12  offset v-for="item in shoppingItems">
           <br/>
         <v-card >

           <v-card-title primary-title >
             <div >
               <h3 > {{ item.name }} </h3>
               <h5> {{ item.price }} </h5>
             </div>
           </v-card-title>

           <v-card-actions>
             <v-btn flat color="orange">Hallor At Me</v-btn>
             <v-btn flat color="orange">Scope Location</v-btn>
           </v-card-actions>
         </v-card>
         </v-flex>
         <div class="google-map" :id="mapName"></div>


   </v-content>
  </v-app>
</template>

<script>



    import { mapActions } from 'vuex'
              import { mapGetters } from 'vuex'
      export default {
      name: 'google-map',
 props: ['name'],
 data: function () {
   return {
     title:'topnot',
     mapName: this.name + "-map",

      address : '',
      long : '',
      lat : '',
      shoppingItems: [
    {name: 'Chop Shop', price: '10'},
     {name: 'Partners', price: '12'},
     {     name: 'Fuck You Barbers', price: '10'},
              {name: 'PoesKlap Haarkappers', price: '12'},
     {name: 'God Se Knitter', price: '10'},
     {name: 'Satan Se Balhaar-Kapper', price: '12'}
   ],
      placesToShow :[
        'Chop Shop',
        'Partners',
        'Fuck You Barbers',
        'PoesKlap Haarkappers',
        'God Se Knitter'
      ]
    }},
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
    mounted:function() {

      const element = document.getElementById(this.mapName)
      const options = {
      zoom: 14,
      center: new google.maps.LatLng(51.501527,-0.1921837),
      types : 'hair_care'
      }
     const map = new google.maps.Map(element, options);

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

   },


    }

</script>
<style>

.google-map {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: gray;}

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
