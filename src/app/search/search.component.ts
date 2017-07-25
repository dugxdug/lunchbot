import { Component, OnInit, NgZone, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MapsAPILoader } from '@agm/core';

declare var google: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // geocoder: any;
  // map: any;
  // service: any;
  // directionsDisplay = new google.maps.DirectionsRenderer();
  // directionsService = new google.maps.DirectionsService();
  // radius: any;

  // google maps zoom level
  zoom = 8;

  // initial center position for the map
  lat = 35.775194;
  lng = -78.647124;

  searchTerm = '';
  markers = [];

  constructor(private _mapsAPILoader: MapsAPILoader, private _zone: NgZone) { }

  ngOnInit() {
    // this._mapsAPILoader.load()
    this.autocomplete();
  }

  autocomplete() {
  this._mapsAPILoader.load().then(() => {
    const autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocompleteInput'), {});
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      this._zone.run(() => {
        const place = autocomplete.getPlace();

        this.markers.push({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          label: place.name,
        });

        this.lat = place.geometry.location.lat();
        this.lng = place.geometry.location.lng();

        console.log(place);
      });
    });
  });
}

  locationSearch() {
    return null;
  }
}
