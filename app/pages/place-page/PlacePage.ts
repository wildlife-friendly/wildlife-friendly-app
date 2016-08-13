import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var cordova;

@Component({
  templateUrl: 'build/pages/place-page/place-page.html'
})
export class PlacePage {
  place: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.place = navParams.get('place');
  }

  visitWebsite () {
    if (typeof cordova !== 'undefined') {
      cordova.InAppBrowser.open(this.place.url, "_system", "location=true");
    }
    else {
      window.location.href = this.place.url
    }
  }
}
