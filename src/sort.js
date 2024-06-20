import {getDatesDiff} from './utils.js';
import dayjs from 'dayjs';

const sortByPrice = (firstWaypoint, secondWaypoint) => secondWaypoint.basePrice - firstWaypoint.basePrice;

const sortByDateFromAcs = (firstWaypoint, secondWaypoint) => dayjs(firstWaypoint.dateFrom) - dayjs(secondWaypoint.dateFrom);

const sortByDateToDesc = (firstWaypoint, secondWaypoint) => dayjs(secondWaypoint.dateTo) - dayjs(firstWaypoint.dateTo);

const sortByTime = (firstWaypoint, secondWaypoint) => getDatesDiff(secondWaypoint.dateFrom, secondWaypoint.dateTo) - getDatesDiff(firstWaypoint.dateFrom, firstWaypoint.dateTo);

export {sortByPrice, sortByTime, sortByDateFromAcs, sortByDateToDesc};
