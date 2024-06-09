import AbstractView from '../framework/view/abstract-view.js';
import {SortTypes} from '../const.js';
import {capitalizeFirstLetter} from '../utils';

function createSortTemplate(sort) {
  const createTemplate = () => Object.values(SortTypes).map((value) =>
    `<div class="trip-sort__item  trip-sort__item--${value.split('-')[1]}">
              <input id="${value}" class="trip-sort__input  visually-hidden" type="radio" name="${value}" value="${value}"
${sort === value && value !== SortTypes.EVENT && value !== SortTypes.OFFER ? 'checked' : ''}
${value === SortTypes.EVENT || value === SortTypes.OFFER ? 'disabled' : ''}>
              <label class="trip-sort__btn" for="${value}" data-sort-type="${value}">${capitalizeFirstLetter(value.split('-')[1])}</label>
            </div>`).join('');
  const sortTemplate = createTemplate();

  return (`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            ${sortTemplate}
          </form>`);
}

export default class SortView extends AbstractView{
  #handleSortClick = null;
  #sortType = null;

  constructor({currentSortType, onSortTypeChange}) {
    super();
    this.#sortType = currentSortType;
    this.#handleSortClick = onSortTypeChange;

    this.element.addEventListener('click', this.#sortClickHandler);
  }

  get template() {
    return createSortTemplate(this.#sortType);
  }

  #sortClickHandler = (evt) => {
    if (evt.target.tagName !== 'LABEL' || evt.target.dataset.sortType === SortTypes.EVENT || evt.target.dataset.sortType === SortTypes.OFFER) {
      return;
    }

    evt.preventDefault();
    this.#handleSortClick(evt.target.dataset.sortType);
  };
}
