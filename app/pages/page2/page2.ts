import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlacePage } from '../place-page/PlacePage'

@Component({
  templateUrl: 'build/pages/page2/page2.html'
})
export class Page2 {
  icons: string[];
  places: Array<{title: string, note: string, icon: string, url: string}>;
  searchText: string;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.places = [];

    this.searchText = "";
  }

  itemTapped(event, place) {
    this.navCtrl.push(PlacePage, { place: place })
  }

  onSearchInput () {
    if (this.searchText === 'Thailand') {
      this.places = [{
        title: 'Elephant Nature Park',
        note: 'Chiang Mai, Thailand',
        icon: 'build',
        url: 'http://www.elephantnaturepark.org/'
      }]
    }
    else {
      this.places = []
    }
  }
}
