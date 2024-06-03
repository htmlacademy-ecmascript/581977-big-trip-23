import {getRandomWaypoint} from '../mock/waypoints';
import {mockedDestinations} from '../mock/destinations';
import {mockedOffers} from '../mock/offers';

const WAYPOINTS_COUNT = 3;

export default class WaypointsModal {
  #waypoints = Array.from({length: WAYPOINTS_COUNT}, getRandomWaypoint);
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
