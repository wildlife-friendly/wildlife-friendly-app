import {Component} from '@angular/core';
declare var google;

@Component({
  templateUrl: 'build/pages/search-page/search-page.html'
})
export class SearchPage {

  journeySearch;
  location: string;

  ngOnInit(){

    let location = (<HTMLInputElement>document.getElementById("location"));

    let autocomplete = new google.maps.places.Autocomplete(location);

    let self = this;

    google.maps.event.addListener(autocomplete, 'place_changed', function() {

      let place = autocomplete.getPlace();
      let geometry = place.geometry;

      console.log(place.name);

      console.log(geometry.location.lng());

      console.log(geometry.location.lat());

      if ((geometry) !== undefined) {
        self.journeySearch.from.name = place.name;
        self.journeySearch.from.longitude = geometry.location.lng();
        self.journeySearch.from.latitude = geometry.location.lat();
      } else {
        self.journeySearch.from = {name:"",latitude:0,longitude:0};
      }

    });

  }

}
