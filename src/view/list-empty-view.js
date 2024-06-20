import AbstractView from '../framework/view/abstract-view.js';
import {FilterType} from '../const.js';

const NoWaypointsTextType = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.PAST]: 'There are no past events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.FUTURE]: 'There are no future events now'
};

const createListEmptyTemplate = (filterType) => {
  const noWaypointTextValue = NoWaypointsTextType[filterType];

  return `<section class="trip-events">
          <h2 class="visually-hidden">Trip events</h2>

          <p class="trip-events__msg">${noWaypointTextValue}</p>

        </section>`;
};

export default class ListEmptyView extends AbstractView{
  #filterType = null;

  constructor({filterType}) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createListEmptyTemplate(this.#filterType);
  }
}
