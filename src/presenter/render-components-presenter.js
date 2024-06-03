import {render, replace} from '../framework/render.js';
import SortView from '../view/sort-view.js';
import FiltersView from '../view/filters-view.js';
import WaypointView from '../view/waypoint-view.js';
import EditingFormView from '../view/editing-form-view.js';
import WaypointListView from '../view/waypoint-list-view.js';

export default class RenderComponentsPresenter {
  #waypointsModel = null;

  constructor({waypointsModel}) {
    this.#waypointsModel = waypointsModel;
  }

  #waypointListView = new WaypointListView();
  tripEventsElement = document.querySelector('.trip-events');
  tripControlsFiltersElement = document.querySelector('.trip-controls__filters');

  #waypoints = [];
  #destinations = [];
  #offers = [];

  #renderWaypoint(waypoint, destinations, offers) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };
    const waypointComponent = new WaypointView({
      waypoint: waypoint,
      destinations: destinations,
      offers: offers,
      onEditClick: () => {
        replaceCardToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });
    const waypointEditComponent = new EditingFormView({
      waypoint: waypoint,
      destinations: destinations,
      offers: offers,
      onFormSubmit: () => {
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replaceCardToForm() {
      replace(waypointEditComponent, waypointComponent);
    }

    function replaceFormToCard() {
      replace(waypointComponent, waypointEditComponent);
    }

    render(waypointComponent, this.#waypointListView.element);
  }

  init() {
    this.#waypoints = [...this.#waypointsModel.waypoints];
    this.#destinations = [...this.#waypointsModel.destinations];
    this.#offers = [...this.#waypointsModel.offers];

    render(new SortView, this.tripEventsElement);
    render(new FiltersView(), this.tripControlsFiltersElement);
    render(this.#waypointListView, this.tripEventsElement);

    for (let i = 0; i < this.#waypoints.length; i++) {
      this.#renderWaypoint(this.#waypoints[i], this.#destinations, this.#offers);
    }
  }
}
