import {getRandomWaypoint} from '../mock/trip';
import {mockedDestinations} from '../mock/destination';
import {mockedOffers} from '../mock/offer';

const TRIP_COUNT = 3;

export default class TripsModal {
  trips = Array.from({length: TRIP_COUNT}, getRandomWaypoint);
  destinations = mockedDestinations;
  offers = mockedOffers;

  getTrips() {
    return this.trips;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}
