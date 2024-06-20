import {FilterType} from './const.js';
import dayjs from 'dayjs';

const filter = {
  [FilterType.EVERYTHING]: (trips) => trips,
  [FilterType.FUTURE]: (trips) => trips.filter((trip) => dayjs(trip.dateFrom) > dayjs()),
  [FilterType.PRESENT]: (trips) => trips.filter((trip) => dayjs(trip.dateFrom) <= dayjs() && dayjs(trip.dateTo) >= dayjs()),
  [FilterType.PAST]: (trips) => trips.filter((trip) => dayjs(trip.dateTo) < dayjs())
};

export {filter};
