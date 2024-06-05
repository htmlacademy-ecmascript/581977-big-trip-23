import AbstractView from '../framework/view/abstract-view.js';

const createListEmptyTemplate = (filter) => {
  const getCurrentFilter = () => {
    switch (filter) {
      case 'Past':
        return 'There are no past events now';
      case 'Present':
        return 'There are no present events now';
      case 'Future':
        return 'There are no future events now';
      default:
        return 'Click New Event to create your first point';
    }
  };

  const currentFilter = getCurrentFilter();

  return `<section class="trip-events">
          <h2 class="visually-hidden">Trip events</h2>

          <p class="trip-events__msg">${currentFilter}</p>

          <!--
            Значение отображаемого текста зависит от выбранного фильтра :
              * Everthing – 'Click New Event to create your first point'
              * Past — 'There are no past events now';
              * Present — 'There are no present events now';
              * Future — 'There are no future events now'.
          -->
        </section>`;
};

export default class ListEmptyView extends AbstractView{
  #filter = '';

  constructor(filter) {
    super();
    this.#filter = filter;
  }

  get template() {
    return createListEmptyTemplate(this.#filter);
  }
}
