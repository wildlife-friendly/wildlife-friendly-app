//noinspection TypeScriptCheckImport
import {Component} from '@angular/core';
import {PlacePage} from "../place-page/PlacePage";
import {NavController} from "ionic-angular";
import {PlaceService} from "../../services/place-service";
declare var google;

@Component({
  templateUrl: 'build/pages/search-page/search-page.html',
  properties: ['location'],
  providers: [PlaceService]
})
export class SearchPage {

  searchInputElement: HTMLInputElement;
  dropDownActive: boolean;
  service = new google.maps.places.AutocompleteService();
  latLng = null;
  locations;
  locationQuery: string = "";
  selectedLocation: string = "";
  searchIsPending: boolean = true;
  hasQuery: boolean = false;

  constructor(public navCtrl: NavController, public placeService: PlaceService) {
    navigator.geolocation.getCurrentPosition(function (position) {
      this.latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    });
    this.dropDownActive = false;
  }

  ngOnInit() {
    this.searchInputElement = (<HTMLInputElement>document.getElementById("location"));
  }

  onLocationSearch(query: string) {
    this.searchIsPending = true;

    if (!query) {
      query = '';
    }

    this.dropDownActive = (query.length >= 3 && this.locations.length);

    this.hasQuery = query.length > 0;

    if (query.length < 3) {
      this.locations = [];
      this.selectedLocation = null;
      return;
    }

    let req = {input: query};
    if (this.latLng) {
      req['location'] = this.latLng;
    }
    this.service.getQueryPredictions(req, (predictions, status) => {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        this.locations = predictions;
        this.dropDownActive = true;
        this.selectedLocation = predictions[0];
      }
    });
  }

  selectLocation = (location) => {
    this.dropDownActive = false;
    this.locationQuery = location.description;
    this.selectedLocation = location;
    this.searchIsPending = false;
  };

  itemTapped(event, place) {
    this.navCtrl.push(PlacePage, {place: place})
  }

  places() {
    if (this.selectedLocation) {
      return this.placeService.placesNear(this.selectedLocation);
    }
    return [];
  }

  placesFound(): boolean {
    return this.places().length > 0;
  }

}
