import {getDatesDiff} from './utils.js';
import dayjs from 'dayjs';

const sortByPrice = (a, b) => b.basePrice - a.basePrice;

const sortByDateFromAcs = (a, b) => dayjs(a.dateFrom) - dayjs(b.dateFrom);

const sortByDateToDesc = (a, b) => dayjs(b.dateTo) - dayjs(a.dateTo);

const sortByTime = (a, b) => getDatesDiff(b.dateFrom, b.dateTo) - getDatesDiff(a.dateFrom, a.dateTo);

export {sortByPrice, sortByTime, sortByDateFromAcs, sortByDateToDesc};
