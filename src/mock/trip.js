import {TRIP_TYPES, CITY_NAMES, PICTURES_URL, MOCKED_DESCRIPTION} from '../const.js';
import {getRandomArrayElement, getRandomInteger} from '../utils.js';
import dayjs from 'dayjs';

const arrayLength = {
  min: 1,
  max: 5
};

const pictureNumberRange = {
  min: 1,
  max: 15
};

const prices = [1000, 1500, 2000, 3000, 3500];

const mockWaypoints = [
  {
    type: getRandomArrayElement(TRIP_TYPES),
    destination: {
      description: Array.from({length: getRandomInteger(arrayLength.min, arrayLength.max)}, () => getRandomArrayElement(MOCKED_DESCRIPTION.split('. '))),
      name: getRandomArrayElement(CITY_NAMES),
      pictures: Array.from({length: getRandomInteger(arrayLength.min, arrayLength.max)}, () => PICTURES_URL + getRandomInteger(pictureNumberRange.min, pictureNumberRange.max))
    },
    startDate: new Date('2024-05-20'),
    endDate: new Date('2024-05-21'),
    price: getRandomArrayElement(prices),
    offers: [{
      type: 'luggage',
      name: 'Add luggage',
      price: '50'
    },
    {
      type: 'comfort',
      name: 'Switch to comfort',
      price: '80'
    }]
  },
  {
    type: getRandomArrayElement(TRIP_TYPES),
    destination: {
      description: Array.from({length: getRandomInteger(arrayLength.min, arrayLength.max)}, () => getRandomArrayElement(MOCKED_DESCRIPTION.split('. '))),
      name: getRandomArrayElement(CITY_NAMES),
      pictures: Array.from({length: getRandomInteger(arrayLength.min, arrayLength.max)}, () => PICTURES_URL + getRandomInteger(pictureNumberRange.min, pictureNumberRange.max))
    },
    startDate: new Date('2024-06-01'),
    endDate: new Date('2024-07-01'),
    price: getRandomArrayElement(prices),
    offers: null
  },
  {
    type: getRandomArrayElement(TRIP_TYPES),
    destination: {
      description: Array.from({length: getRandomInteger(arrayLength.min, arrayLength.max)}, () => getRandomArrayElement(MOCKED_DESCRIPTION.split('. '))),
      name: getRandomArrayElement(CITY_NAMES),
      pictures: Array.from({length: getRandomInteger(arrayLength.min, arrayLength.max)}, () => PICTURES_URL + getRandomInteger(pictureNumberRange.min, pictureNumberRange.max))
    },
    startDate: null,
    endDate: null,
    price: getRandomArrayElement(prices),
    offers: [{
      type: 'meal',
      name: 'Add meal',
      price: '15'
    }]
  },
  {
    type: getRandomArrayElement(TRIP_TYPES),
    destination: {
      description: Array.from({length: getRandomInteger(arrayLength.min, arrayLength.max)}, () => getRandomArrayElement(MOCKED_DESCRIPTION.split('. '))),
      name: getRandomArrayElement(CITY_NAMES),
      pictures: Array.from({length: getRandomInteger(arrayLength.min, arrayLength.max)}, () => PICTURES_URL + getRandomInteger(pictureNumberRange.min, pictureNumberRange.max))
    },
    startDate: null,
    endDate: null,
    price: getRandomArrayElement(prices),
    offers: [{
      type: 'luggage',
      name: 'Add luggage',
      price: '50'
    },
    {
      type: 'comfort',
      name: 'Switch to comfort',
      price: '80'
    },
    {
      type: 'seats',
      name: 'Choose seats',
      price: '5'
    }]
  }
];

const getRandomWaypoint = () => getRandomArrayElement(mockWaypoints);

export {getRandomWaypoint};
