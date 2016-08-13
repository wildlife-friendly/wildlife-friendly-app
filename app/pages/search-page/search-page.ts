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
  searchQuery;
  locations;
  location: string = "";
  locationIsSelected: boolean = false;

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
    if (!query) {
      query = '';
    }
    this.dropDownActive = (query.length >= 3 && this.locations.length);

    if (query.length < 3) {
      this.locations = [];
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
      }
    });
  }

  selectLocation = (location) => {
    this.dropDownActive = false;
    this.searchQuery = location.description;
    this.locationIsSelected = true;
  };

  itemTapped(event, place) {
    this.navCtrl.push(PlacePage, {place: place})
  }

  places() {
    return this.placeService.placesNear(this.location);
  }

}
