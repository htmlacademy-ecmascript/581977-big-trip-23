import {waypoints} from '../mock/waypoints';
import {mockedDestinations} from '../mock/destinations';
import {mockedOffers} from '../mock/offers';

export default class WaypointsModal {
  #waypoints = waypoints;
  #destinations = mockedDestinations;
  #offers = mockedOffers;

  get waypoints() {
    return this.#waypoints;
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }
}
