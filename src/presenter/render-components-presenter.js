import {remove, render} from '../framework/render.js';
import SortView from '../view/sort-view.js';
import FiltersView from '../view/filters-view.js';
import WaypointListView from '../view/waypoint-list-view.js';
import ListEmptyView from '../view/list-empty-view.js';
import {generateFilter} from '../mock/filters.js';
import WaypointPresenter from './waypoint-presenter.js';
import {updateItem} from '../utils.js';
import {SortTypes} from '../const.js';
import {sortByPrice, sortByTime} from '../sort.js';

export default class RenderComponentsPresenter {
  #waypointsModel = null;

  constructor({waypointsModel}) {
    this.#waypointsModel = waypointsModel;
  }

  #waypointListComponent = new WaypointListView();
  #sortComponent = null;

  tripEventsElement = document.querySelector('.trip-events');
  tripControlsFiltersElement = document.querySelector('.trip-controls__filters');
  pageBodyContainer = document.querySelector('.page-main > .page-body__container');

  #waypoints = [];
  #destinations = [];
  #offers = [];
  #filteredTrips = null;
  #waypointPresenters = new Map();
  #currentSortType = null;
  #initialWaypoints = [];

  init() {
    this.#waypoints = [...this.#waypointsModel.waypoints];
    this.#destinations = [...this.#waypointsModel.destinations];
    this.#offers = [...this.#waypointsModel.offers];
    this.#filteredTrips = generateFilter(this.#waypoints);

    this.#initialWaypoints = [...this.#waypointsModel.waypoints];

    this.#renderBoard();
  }

  #sortWaypoints(sortType) {
    switch (sortType) {
      case SortTypes.PRICE:
        this.#waypoints.sort(sortByPrice);
        break;
      case SortTypes.TIME:
        this.#waypoints.sort(sortByTime);
        break;
      case SortTypes.EVENT:
      case SortTypes.OFFER:
        break;
      case SortTypes.DAY:
        this.#waypoints = [...this.#initialWaypoints];
    }

    this.#currentSortType = sortType;
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortWaypoints(sortType);
    remove(this.#sortComponent);
    this.#renderSort();
    this.#clearWaypointList();
    this.#renderWaypoints();
  };

  #renderSort() {
    this.#sortComponent = new SortView({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#sortComponent, this.tripEventsElement);
  }

  #renderFilters() {
    render(new FiltersView({filteredTrips: this.#filteredTrips}), this.tripControlsFiltersElement);
  }

  #handleWaypointChange(updatedWaypoint) {
    this.#waypoints = updateItem(this.#waypoints, updatedWaypoint);
    this.#initialWaypoints = updateItem(this.#initialWaypoints, updatedWaypoint);
    this.#waypointPresenters.get(updatedWaypoint.id).init(updatedWaypoint, this.#destinations, this.#offers);
  }

  #renderWaypoint(waypoint, destinations, offers) {
    const waypointPresenter = new WaypointPresenter({
      waypointListContainer: this.#waypointListComponent.element,
      onDataChange: this.#handleWaypointChange.bind(this),
      onModeChange: this.#handleModeChange
    });
    waypointPresenter.init(waypoint, destinations, offers);
    this.#waypointPresenters.set(waypoint.id, waypointPresenter);
  }

  #renderListEmpty() {
    render(new ListEmptyView(), this.pageBodyContainer);
  }

  #renderWaypoints() {
    render(this.#waypointListComponent, this.tripEventsElement);

    if (this.#waypoints.length === 0) {
      this.#renderListEmpty();
      return;
    }

    this.#waypoints.forEach((waypoint) => this.#renderWaypoint(waypoint, this.#destinations, this.#offers));
  }

  #clearWaypointList() {
    this.#waypointPresenters.forEach((presenter) => presenter.destroy());
    this.#waypointPresenters.clear();
  }

  #handleModeChange = () => {
    this.#waypointPresenters.forEach((presenter) => presenter.resetView());
  };

  #renderBoard() {
    this.#renderFilters();
    this.#renderSort();
    this.#renderWaypoints();
  }
}
