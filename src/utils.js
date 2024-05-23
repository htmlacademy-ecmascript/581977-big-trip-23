import dayjs from 'dayjs';

const DATE_FORMAT = 'DD/MM/YY HH:mm';

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomInteger = (min, max)=> {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getFormattedDate = (date) => date ? dayjs(date).format(DATE_FORMAT) : '';

const snakeToCamel = (str) =>
  str.toLowerCase().replace(/([-_][a-z])/g, (group) =>
    group
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')
  );

const camelize = (item) => {
  for (const key of Object.keys(item)) {
    if(key.includes('_')) {
      item[snakeToCamel(key)] = item[key];
      delete item[key];
    }
  }
  return item;
};

export {getRandomArrayElement, getRandomInteger, getFormattedDate, camelize};
