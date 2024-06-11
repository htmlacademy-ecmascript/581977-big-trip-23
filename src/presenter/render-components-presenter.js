import {remove, render} from '../framework/render.js';
import SortView from '../view/sort-view.js';
import WaypointListView from '../view/waypoint-list-view.js';
import ListEmptyView from '../view/list-empty-view.js';
import WaypointPresenter from './waypoint-presenter.js';
import {FilterTypes, SortTypes as SortType, SortTypes, UpdateType, UserAction} from '../const.js';
import {sortByPrice, sortByTime} from '../sort.js';
import {filter} from '../filter';
import NewWaypointPresenter from './new-waypoint-presenter';

export default class RenderComponentsPresenter {
  #waypointsModel = null;
  #destinationsModel = null;
  #offersModel = null;
  #filterModel = null;

  #waypointListComponent = new WaypointListView();
  #noWaypointComponent = null;
  #sortComponent = null;

  tripEventsElement = document.querySelector('.trip-events');
  pageBodyContainer = document.querySelector('.page-main > .page-body__container');

  #waypointPresenters = new Map();
  #newWaypointPresenter = null;
  #currentSortType = null;
  #filterType = FilterTypes.EVERYTHING;

  constructor({waypointsModel, destinationsModel, offersModel, filterModel, onNewWaypointDestroy}) {
    this.#waypointsModel = waypointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#filterModel = filterModel;

    this.#newWaypointPresenter = new NewWaypointPresenter({
      waypointListContainer: this.#waypointListComponent.element,
      onDataChange: this.#handleViewAction,
      onDestroy: onNewWaypointDestroy
    });

    this.#waypointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get waypoints() {
    this.#filterType = this.#filterModel.filter;
    const waypoints = this.#waypointsModel.waypoints;
    const filteredWaypoints = filter[this.#filterType](waypoints);

    switch (this.#currentSortType) {
      case SortTypes.PRICE:
        return filteredWaypoints.sort(sortByPrice);
      case SortTypes.TIME:
        return filteredWaypoints.sort(sortByTime);
      case SortTypes.EVENT:
      case SortTypes.OFFER:
      case SortTypes.DAY:
        break;
    }
    return filteredWaypoints;
  }

  get destinations() {
    return this.#destinationsModel.destinations;
  }

  get offers() {
    return this.#offersModel.offers;
  }

  init() {
    this.#renderBoard();
  }

  createWaypoint() {
    this.#currentSortType = SortType.DAY;
    this.#filterModel.setFilter(UpdateType.MAJOR, FilterTypes.EVERYTHING);
    this.#newWaypointPresenter.init(this.destinations, this.offers);
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    remove(this.#sortComponent);
    this.#clearBoard();
    this.#renderBoard();
  };

  #renderSort() {
    this.#sortComponent = new SortView({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#sortComponent, this.tripEventsElement);
  }

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_WAYPOINT:
        this.#waypointsModel.updateWaypoint(updateType, update);
        break;
      case UserAction.ADD_WAYPOINT:
        this.#waypointsModel.addWaypoint(updateType, update);
        break;
      case UserAction.DELETE_WAYPOINT:
        this.#waypointsModel.deleteWaypoint(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#waypointPresenters.get(data.id).init(data, this.destinations, this.offers);
        break;
      case UpdateType.MINOR:
        this.#clearBoard();
        this.#renderBoard();
        break;
      case UpdateType.MAJOR:
        this.#clearBoard({resetSortType: true});
        this.#renderBoard();
        break;
    }
  };

  #renderWaypoint(waypoint, destinations, offers) {
    const waypointPresenter = new WaypointPresenter({
      waypointListContainer: this.#waypointListComponent.element,
      onDataChange: this.#handleViewAction.bind(this),
      onModeChange: this.#handleModeChange
    });
    waypointPresenter.init(waypoint, destinations, offers);
    this.#waypointPresenters.set(waypoint.id, waypointPresenter);
  }

  #renderListEmpty() {
    this.#noWaypointComponent = new ListEmptyView({
      filterType: this.#filterType
    });

    render(this.#noWaypointComponent, this.pageBodyContainer);
  }

  #renderWaypoints(waypoints, destinations, offers) {
    waypoints.forEach((waypoint) => this.#renderWaypoint(waypoint, destinations, offers));
  }

  #handleModeChange = () => {
    this.#newWaypointPresenter.destroy();
    this.#waypointPresenters.forEach((presenter) => presenter.resetView());
  };

  #clearBoard({resetSortType = false} = {}) {
    this.#newWaypointPresenter.destroy();
    this.#waypointPresenters.forEach((presenter) => presenter.destroy());
    this.#waypointPresenters.clear();

    remove(this.#sortComponent);

    if (this.#noWaypointComponent) {
      remove(this.#noWaypointComponent);
    }

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }
  }

  #renderBoard() {
    const waypoints = this.waypoints;
    const waypointCount = waypoints.length;

    if (waypointCount === 0) {
      this.#renderListEmpty();
      return;
    }

    this.#renderSort();
    render(this.#waypointListComponent, this.tripEventsElement);
    this.#renderWaypoints(waypoints, this.destinations, this.offers);
  }
}
