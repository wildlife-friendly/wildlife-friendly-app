import {Injectable} from "@angular/core";
import {IPlace} from "../domain/place";

@Injectable()
export class PlaceService {

  places: IPlace[] = [{
    title: 'Elephant Nature Park',
    note: 'Chiang Mai, Thailand',
    icon: 'build',
    url: 'http://www.elephantnaturepark.org/',
    image: 'img/bigenp.jpg',
    logo: 'img/enp.png',
    longitude: 1,
    latitude: 1
  }];

  radiosInKm: number = 200;

  placesNear(location) {
    if (location.description.toLowerCase().includes("thailand")) {
      return this.places;
    }
    return [];
  }
}
