import {remove, render, RenderPosition} from '../framework/render.js';
import SortView from '../view/sort-view.js';
import WaypointListView from '../view/waypoint-list-view.js';
import ListEmptyView from '../view/list-empty-view.js';
import WaypointPresenter from './waypoint-presenter.js';
import {FilterTypes, SortTypes as SortType, SortTypes, UpdateType, UserAction} from '../const.js';
import {sortByDateFromAcs, sortByPrice, sortByTime} from '../sort.js';
import {filter} from '../filter.js';
import NewWaypointPresenter from './new-waypoint-presenter.js';
import LoadingView from '../view/loading-view.js';
import UiBlocker from '../framework/ui-blocker/ui-blocker.js';
import HeaderView from '../view/header-view.js';
import FailedLoadDataView from '../view/failed-load-data-view';

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

export default class RenderComponentsPresenter {
  #tripsModel = null;
  #filterModel = null;

  #waypointListComponent = new WaypointListView();
  #sortComponent = null;
  #loadingComponent = new LoadingView();
  #headerComponent = null;
  #failedLoadDataComponent = new FailedLoadDataView();

  tripMainElement = document.querySelector('.trip-main');
  tripEventsElement = document.querySelector('.trip-events');
  pageBodyContainerElement = document.querySelector('.page-main > .page-body__container');

  #waypointPresenters = new Map();
  #newWaypointPresenter = null;
  #currentSortType = SortTypes.DAY;
  #filterType = FilterTypes.EVERYTHING;
  #isLoading = true;
  #uiBlocker = new UiBlocker({
    lowerLimit: TimeLimit.LOWER_LIMIT,
    upperLimit: TimeLimit.UPPER_LIMIT
  });

  #noWaypointComponent = null;

  constructor({tripsModel, filterModel, onNewWaypointDestroy}) {
    this.#tripsModel = tripsModel;
    this.#filterModel = filterModel;

    this.#newWaypointPresenter = new NewWaypointPresenter({
      waypointListContainer: this.#waypointListComponent.element,
      onDataChange: this.#handleViewAction,
      onDestroy: onNewWaypointDestroy
    });

    this.#tripsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get waypoints() {
    this.#filterType = this.#filterModel.filter;
    const waypoints = this.#tripsModel.waypoints;
    const filteredWaypoints = filter[this.#filterType](waypoints);

    switch (this.#currentSortType) {
      case SortTypes.PRICE:
        return filteredWaypoints.sort(sortByPrice);
      case SortTypes.TIME:
        return filteredWaypoints.sort(sortByTime);
      case SortTypes.EVENT:
      case SortTypes.OFFER:
        break;
      case SortTypes.DAY:
        return filteredWaypoints.sort(sortByDateFromAcs);
    }
    return filteredWaypoints;
  }

  get destinations() {
    return this.#tripsModel.destinations;
  }

  get offers() {
    return this.#tripsModel.offers;
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

    render(this.#sortComponent, this.tripEventsElement, RenderPosition.AFTERBEGIN);
  }

  #handleViewAction = async (actionType, updateType, update) => {
    this.#uiBlocker.block();

    switch (actionType) {
      case UserAction.UPDATE_WAYPOINT:
        this.#waypointPresenters.get(update.id).setSaving();
        try {
          await this.#tripsModel.updateWaypoint(updateType, update);
        } catch(err) {
          this.#waypointPresenters.get(update.id).setAborting();
        }
        break;
      case UserAction.ADD_WAYPOINT:
        this.#newWaypointPresenter.setSaving();
        try {
          await this.#tripsModel.addWaypoint(updateType, update);
        } catch(err) {
          this.#newWaypointPresenter.setAborting();
        }
        break;
      case UserAction.DELETE_WAYPOINT:
        this.#waypointPresenters.get(update.id).setDeleting();
        try {
          await this.#tripsModel.deleteWaypoint(updateType, update);
        } catch(err) {
          this.#waypointPresenters.get(update.id).setAborting();
        }
        break;
    }

    this.#uiBlocker.unblock();
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        remove(this.#headerComponent);
        this.#waypointPresenters.get(data.id).init(data, this.destinations, this.offers);
        this.#renderHeader();
        break;
      case UpdateType.MINOR:
        this.#clearBoard();
        this.#renderBoard();
        break;
      case UpdateType.MAJOR:
        this.#clearBoard({resetSortType: true});
        this.#renderBoard();
        break;
      case UpdateType.INIT:
        if (data.isLoadFailure) {
          remove(this.#loadingComponent);
          this.#renderFailedLoadData();
          return;
        }
        this.#isLoading = false;
        remove(this.#loadingComponent);
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

  #renderLoading() {
    render(this.#loadingComponent, this.tripEventsElement);
  }

  #renderListEmpty() {
    this.#noWaypointComponent = new ListEmptyView({
      filterType: this.#filterType
    });

    render(this.#noWaypointComponent, this.pageBodyContainerElement);
  }

  #renderHeader() {
    this.#headerComponent = new HeaderView({
      waypoints: [...this.#tripsModel.waypoints].sort(sortByDateFromAcs),
      destinations: this.destinations,
      offers: this.offers
    });

    render(this.#headerComponent, this.tripMainElement, RenderPosition.AFTERBEGIN);
  }

  #renderWaypoints(waypoints, destinations, offers) {
    waypoints.forEach((waypoint) => this.#renderWaypoint(waypoint, destinations, offers));
  }

  #handleModeChange = () => {
    this.#newWaypointPresenter.destroy();
    this.#waypointPresenters.forEach((presenter) => presenter.resetView());
  };

  #renderFailedLoadData = () => {
    render(this.#failedLoadDataComponent, this.pageBodyContainerElement);
  };

  #clearBoard({resetSortType = false} = {}) {
    this.#newWaypointPresenter.destroy();
    this.#waypointPresenters.forEach((presenter) => presenter.destroy());
    this.#waypointPresenters.clear();

    remove(this.#sortComponent);
    remove(this.#loadingComponent);
    remove(this.#headerComponent);

    if (this.#noWaypointComponent) {
      remove(this.#noWaypointComponent);
    }

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }
  }

  #renderBoard() {
    if (this.#isLoading) {
      this.#renderLoading();
      return;
    }

    const waypoints = this.waypoints;
    const waypointCount = waypoints.length;

    render(this.#waypointListComponent, this.tripEventsElement);

    if (waypointCount === 0) {
      this.#renderListEmpty();
      return;
    }

    this.#renderHeader();
    this.#renderSort();
    this.#renderWaypoints(waypoints, this.destinations, this.offers);
  }
}
