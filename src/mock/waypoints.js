import {camelize} from '../utils.js';

const mockedWaypoints = [
  {
    'id': 'd5275abe-fdfe-479d-9817-331d62788095',
    'base_price': 1100,
    'date_from': '2024-06-01T14:30:56.845Z',
    'date_to': '2024-06-11T00:00:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    'is_favorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    'type': 'taxi'
  },
  {
    'id': '57370827-0997-4c21-bfcf-03101f1e4456',
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
    'id': '8238525c-310e-47f5-b919-dc664d59ec6e',
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

export {waypoints};
