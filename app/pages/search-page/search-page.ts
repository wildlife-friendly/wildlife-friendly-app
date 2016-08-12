import {Component} from '@angular/core';

declare var google;

@Component({
  templateUrl: 'build/pages/search-page/search-page.html'
})
export class SearchPage {

  journeySearch;

  ngOnInit(){
    //
    // let searchLocation = (<HTMLInputElement>document.getElementById("search_location"));
    //
    // let autocomplete = new google.maps.places.Autocomplete(searchLocation);
    //
    // let self = this;
    //
    // window.google.maps.event.addListener(autocomplete, 'place_changed', function() {
    //
    //   let place = autocomplete.getPlace();
    //   let geometry = place.geometry;
    //
    //   if ((geometry) !== undefined) {
    //     self.journeySearch.from.name = place.name;
    //     self.journeySearch.from.longitude = geometry.location.lng();
    //     self.journeySearch.from.latitude = geometry.location.lat();
    //   } else {
    //     self.journeySearch.from = {name:"",latitude:0,longitude:0};
    //   }
    //
    // });

  }



}
