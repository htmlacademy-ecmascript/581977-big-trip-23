import AbstractView from '../framework/view/abstract-view.js';
import {capitalizeFirstLetter} from '../utils';

function createFiltersItemTemplate(filter) {
  const {type} = filter;

  return `<div class="trip-filters__filter">
                  <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}">
                  <label class="trip-filters__filter-label" for="filter-${type}">${capitalizeFirstLetter(type)}</label>
                </div>`;
}

function createFiltersTemplate(filteredTrips) {
  const filterTripsTemplate = filteredTrips
    .map((filter, index) => createFiltersItemTemplate(filter, index === 0))
    .join('');

  return (`<form class="trip-filters" action="#" method="get">
                ${filterTripsTemplate}
                <button class="visually-hidden" type="submit">Accept filter</button>
              </form>`);
}

export default class FiltersView extends AbstractView{
  #filteredTrips = null;

  constructor(filteredTrips) {
    super();
    this.#filteredTrips = filteredTrips;
  }

  get template() {
    return createFiltersTemplate(this.#filteredTrips);
  }
}
