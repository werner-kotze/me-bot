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
      <div id = 'cardsAndMap' style="visibility: hidden">
			<v-flex xs12  offset v-for="item in shoppingItems">
				<br/>
				<v-card >
					<v-card-title primary-title >
						<div >
							<h3 > {{ item.name }} </h3>
              <h5> {{ item.lat }} </h5>
              <h5> {{ item.long }} </h5>
              <h5> {{ item.companyAddr }} </h5>
              <h5> {{ item.hours }} </h5>
						</div>
					</v-card-title>
					<v-card-actions>
						<v-btn flat color="orange">Hallor At Me</v-btn>
						<v-btn flat color="orange">Scope Location</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
			<div class="google-map" :id="mapName"></div>
      </div>
		</v-content>
	</v-app>
</template>


<script>
 var service;
 var shoppingItems;
 var map;
 var infowindow;
 var radius = 2000;
 var shoppingItemsOG= [{
         name: 'Chop Shop',
         lat: '10',
         long: '10',
         companyAddr : 'address',
         hours : 'open'

     },
     {
         name: 'Partners',
         lat: '12',
         long: '10',
         companyAddr : 'address',
         hours : 'open'
     },
     {
         name: 'Fuck You Barbers',
         lat: '10',
         long: '10',
         companyAddr : 'address',
         hours : 'open'
     },
     {
         name: 'PoesKlap Haarkappers',
         lat: '12',
         long: '10',
         companyAddr : 'address',
         hours : 'open'
     },
     {
         name: 'God Se Knitter',
         lat: '10',
         long: '10',
         companyAddr : 'address',
         hours : 'open'
     },
     {
         name: 'Satan Se Balhaar-Kapper',
         lat: '12',
         long: '10',
         companyAddr : 'address',
         hours : 'open'
     }
 ];
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      shoppingItemsOG.length = 0;
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        createMarker(results[i]);
      }
    }
  }

  function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });
          shoppingItemsOG.push({  name: place.name,
          lat: place.geometry.location.lat(),
          long: place.geometry.location.lng(),
          companyAddr:place.vicinity,
          hours : place.opening_hours
        }
          )
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }


import {
        mapActions
    } from 'vuex'
import {
    mapGetters
} from 'vuex'

export default {
    name: 'google-map',
    props: ['name'],
    data: function() {
        return {
            title: 'topnot',
            mapName: this.name + "-map",
            markerCoordinates: [{
              latitude: 51.501527,
              longitude: -0.1921837
            }],
            address: '',
            long: '',
            lat: '',
            shoppingItems: shoppingItemsOG,
            }
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
    mounted: function() {


        this.autocomplete = new google.maps.places.Autocomplete(
            (this.$refs.autocomplete), {
                types: ['geocode']
            }
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
            this.markerCoordinates.latitude = this.lat;
            this.markerCoordinates.longitude = this.long;
            this.address = address;
            var latLong =  new google.maps.LatLng(this.markerCoordinates.latitude,this.markerCoordinates.longitude)

            const element = document.getElementById(this.mapName)
            const options = {
                zoom: 14,
                center: latLong
            }
            map = new google.maps.Map(element, options);
            var request = {
             location: latLong,
             radius: radius,
             type: ['hair_care']
           };
           infowindow = new google.maps.InfoWindow();

           service = new google.maps.places.PlacesService(map);
           service.nearbySearch(request, callback);
           document.getElementById('cardsAndMap').style.visibility = 'visible';
                  });

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
