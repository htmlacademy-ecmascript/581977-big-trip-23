import {render, RenderPosition} from '../render.js';
import SortView from '../view/sort-view.js';
import FiltersView from '../view/filters-view.js';
import WaypointView from '../view/waypoint-view.js';
import EditingFormView from '../view/editing-form-view.js';
import WaypointListView from '../view/waypoint-list-view.js';
import CreationFormView from '../view/creation-form-view.js';

export default class RenderComponentsPresenter {
  constructor({tripModel}) {
    this.tripModel = tripModel;
  }

  waypointListView = new WaypointListView();
  tripEventsElement = document.querySelector('.trip-events');
  tripControlsFiltersElement = document.querySelector('.trip-controls__filters');

  init() {
    this.trips = [...this.tripModel.getTrips()];

    render(new SortView, this.tripEventsElement);
    render(new FiltersView(), this.tripControlsFiltersElement);
    render(this.waypointListView, this.tripEventsElement);
    render(new CreationFormView({trip: this.trips[0]}), this.waypointListView.getElement());
    render(new EditingFormView(), this.waypointListView.getElement(), RenderPosition.AFTERBEGIN);

    for (let i = 0; i < this.trips.length; i++) {
      render(new WaypointView({trip: this.trips[i]}), this.waypointListView.getElement());
    }
  }
}
