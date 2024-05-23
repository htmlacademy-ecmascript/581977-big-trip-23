import {PICTURES_URL} from '../const.js';
import {getRandomArrayElement, getRandomInteger, camelize} from '../utils.js';

const mockedDestinations = [
  {
    'id': 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    'description': 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    'name': 'Chamonix',
    'pictures': [
      {
        'src': PICTURES_URL + getRandomInteger(1, 15),
        'description': 'Chamonix parliament building'
      }
    ]
  }
];

const mockedOffers = [
  {
    'type': 'taxi',
    'offers': [
      {
        'id': 'b4c3e4e6-9053-42ce-b747-e281314baa31',
        'title': 'Upgrade to a business class',
        'price': 120
      }
    ]
  }
];

const mockedWaypoints = [
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'base_price': 1100,
    'date_from': '2019-07-10T22:55:56.845Z',
    'date_to': '2019-07-11T11:22:13.375Z',
    'destination': mockedDestinations[0],
    'is_favorite': false,
    'offers': [
      mockedOffers[0]
    ],
    'type': 'taxi'
  }
];

const waypoints = mockedWaypoints.map((item) => camelize(item));

const getRandomWaypoint = () => getRandomArrayElement(waypoints);

export {getRandomWaypoint};
