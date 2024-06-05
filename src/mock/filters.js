import {filter} from '../filter.js';

const generateFilter = (trips) => Object.entries(filter).map(
  ([filterType, filterTrips]) => ({
    type: filterType,
    trips: filterTrips(trips),
    count: filterTrips(trips).length
  })
);

export {generateFilter};
