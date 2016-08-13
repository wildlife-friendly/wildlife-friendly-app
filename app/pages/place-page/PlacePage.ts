import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/place-page/place-page.html'
})
export class PlacePage {
  place: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.place = navParams.get('place');
  }
}
