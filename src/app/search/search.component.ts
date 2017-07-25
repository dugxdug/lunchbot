import { Component, OnInit } from '@angular/core';

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

  title: string = 'My first AGM project';
  lat: number = 35.775194;
  lng: number = -78.647124;

  constructor() { }

  ngOnInit() {
  }

  applyFilters() {
    return null;
  }
}
