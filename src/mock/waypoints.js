import {getRandomArrayElement, camelize} from '../utils.js';

const mockedWaypoints = [
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'base_price': 1100,
    'date_from': '2019-05-01T14:30:56.845Z',
    'date_to': '2019-07-11T00:00:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    'is_favorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    'type': 'taxi'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'base_price': 100,
    'date_from': '2019-07-10T09:55:56.845Z',
    'date_to': '2019-07-11T12:22:13.375Z',
    'destination': 'bfa5cb22-a1fe-4b77-a83c-0e528e910e04',
    'is_favorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    'type': 'bus'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'base_price': 500,
    'date_from': '2019-12-02T10:01:56.845Z',
    'date_to': '2019-12-11T11:20:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a11c-0e528e910e04',
    'is_favorite': true,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    'type': 'flight'
  }
];

const waypoints = mockedWaypoints.map((item) => camelize(item));

const getRandomWaypoint = () => getRandomArrayElement(waypoints);

export {getRandomWaypoint};
