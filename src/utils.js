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

export {getRandomArrayElement, getRandomInteger, getFormattedDate};
