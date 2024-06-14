import {render, replace, remove} from '../framework/render.js';
import FilterView from '../view/filters-view.js';
import {FilterTypes, UpdateType} from '../const.js';
import {filter} from '../filter.js';

export default class FilterPresenter {
  #filterContainer = null;
  #filterModel = null;
  #waypointsModel = null;

  #filterComponent = null;

  constructor({filterContainer, filterModel, waypointsModel}) {
    this.#filterContainer = filterContainer;
    this.#filterModel = filterModel;
    this.#waypointsModel = waypointsModel;

    this.#waypointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get filters() {
    return Object.values(FilterTypes).map((type) => ({
      type,
      count: filter[type](this.#waypointsModel.waypoints).length
    }));
  }

  init() {
    const filters = this.filters;
    const prevFilterComponent = this.#filterComponent;

    this.#filterComponent = new FilterView({
      filters,
      currentFilterType: this.#filterModel.filter,
      onFilterTypeChange: this.#handleFilterTypeChange
    });

    if (prevFilterComponent === null) {
      render(this.#filterComponent, this.#filterContainer);
      return;
    }

    replace(this.#filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  #handleModelEvent = () => {
    this.init();
  };

  #handleFilterTypeChange = (filterType) => {
    if (this.#filterModel.filter === filterType) {
      return;
    }

    this.#filterModel.setFilter(UpdateType.MAJOR, filterType);
  };
}
