import {Injectable} from "@angular/core";
import {IPlace} from "../domain/place";

declare var google;


@Injectable()
export class PlaceService {

  service = new google.maps.DistanceMatrixService();

  places: IPlace[] = [{
    title: 'Elephant Nature Park',
    note: 'Chiang Mai, Thailand',
    icon: 'build',
    url: 'http://www.elephantnaturepark.org/',
    image: 'img/bigenp.jpg',
    logo: 'img/enp.png',
    longitude: 98.86139,
    latitude: 19.21644
  }
  // ,
  //   {
  //     title: 'Deer Forest',
  //     note: 'Odem, Israel',
  //     icon: 'build',
  //     url: 'http://www.yayalim.co.il/',
  //     image: 'img/deer.jpg',
  //     logo: 'img/deerLogo.gif',
  //     longitude: 35.74957,
  //     latitude: 33.19337
  //   },
  //   {
  //     title: 'Dolphin Reef Eilat',
  //     note: 'Eilat, Israel',
  //     icon: 'build',
  //     url: 'http://www.dolphinreef.co.il/',
  //     image: 'img/dol.jpg',
  //     logo: 'img/dolLogo.gif',
  //     longitude: 34.93579,
  //     latitude: 29.52713
  //   }
  ];

  radiosInKm: number = 200;

  availablePlaces = [];

  placesNear(location) {

    let allPlaces = this.places.map(p => new google.maps.LatLng(p.latitude, p.longitude));

    this.service.getDistanceMatrix({
      origins: [location.description],
      destinations: allPlaces,
      travelMode: 'DRIVING',
    }, this.calcAvailablePlaces);

    if (location.description.toLowerCase().includes("thailand")) {
      return this.places;
    }
    return [];
  }

  calcAvailablePlaces(result) {
    // console.log(result.rows[0].);
    // this.availablePlaces.filter((r) => r.)
  }
}
