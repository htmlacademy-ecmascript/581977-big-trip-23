import {getDatesDiff} from './utils';

const sortByPrice = (a, b) => b.basePrice - a.basePrice;

const sortByTime = (a, b) => getDatesDiff(b.dateFrom, b.dateTo) - getDatesDiff(a.dateFrom, a.dateTo);

export {sortByPrice, sortByTime};
