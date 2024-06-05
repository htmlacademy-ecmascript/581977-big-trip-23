import {FilterTypes} from './const.js';
import dayjs from 'dayjs';

const filter = {
  [FilterTypes.EVERYTHING]: (trips) => trips,
  [FilterTypes.FUTURE]: (trips) => trips.filter((trip) => dayjs(trip.dateFrom) > dayjs()),
  [FilterTypes.PRESENT]: (trips) => trips.filter((trip) => dayjs(trip.dateFrom) <= dayjs() && dayjs(trip.dateTo) >= dayjs()),
  [FilterTypes.PAST]: (trips) => trips.filter((trip) => dayjs(trip.dateTo) < dayjs())
};

export {filter};
