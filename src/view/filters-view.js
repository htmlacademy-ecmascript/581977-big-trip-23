import AbstractView from '../framework/view/abstract-view.js';
import {capitalizeFirstLetter} from '../utils.js';

function createFiltersItemTemplate(filter, currentFilterType) {
  const {type} = filter;

  return `<div class="trip-filters__filter">
                  <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" ${type === currentFilterType ? 'checked' : ''} value="${type}">
                  <label class="trip-filters__filter-label" for="filter-${type}">${capitalizeFirstLetter(type)}</label>
                </div>`;
}

function createFiltersTemplate(filterItems, currentFilterType) {
  const filterTripsTemplate = filterItems
    .map((filter) => createFiltersItemTemplate(filter, currentFilterType))
    .join('');

  return (`<form class="trip-filters" action="#" method="get">
                ${filterTripsTemplate}
                <button class="visually-hidden" type="submit">Accept filter</button>
              </form>`);
}

export default class FiltersView extends AbstractView{
  #filters = null;
  #currentFilter = null;
  #handleFilterTypeChange = null;

  constructor({filters, currentFilterType, onFilterTypeChange}) {
    super();
    this.#filters = filters;
    this.#currentFilter = currentFilterType;
    this.#handleFilterTypeChange = onFilterTypeChange;

    this.element.addEventListener('change', this.#filterTypeChangeHandler);
  }

  get template() {
    return createFiltersTemplate(this.#filters, this.#currentFilter);
  }

  #filterTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this.#handleFilterTypeChange(evt.target.value);
  };
}
