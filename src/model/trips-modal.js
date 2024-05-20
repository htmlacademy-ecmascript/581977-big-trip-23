import {getRandomWaypoint} from '../mock/trip';

const TRIP_COUNT = 3;

export default class TripsModal {
  trips = Array.from({length: TRIP_COUNT}, getRandomWaypoint);

  getTrips() {
    return this.trips;
  }
}
