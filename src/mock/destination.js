import {PICTURES_URL} from '../const.js';

const mockedDestinations = [
  {
    'id': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    'description': 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    'name': 'Chamonix',
    'pictures': [
      {
        'src': `${PICTURES_URL}1`,
        'description': 'Chamonix parliament building'
      },
      {
        'src': `${PICTURES_URL}2`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 'bfa5cb22-a1fe-4b77-a83c-0e528e910e04',
    'description': 'Paris, is a beautiful city, a true asian pearl, with crowded streets.',
    'name': 'Paris',
    'pictures': [
      {
        'src': `${PICTURES_URL}3`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 'bfa5cb75-a1fe-4b77-a11c-0e528e910e04',
    'description': 'Moscow, is a beautiful city, a true asian pearl, with crowded streets.',
    'name': 'Moscow',
    'pictures': []
  }
];

export {mockedDestinations};
