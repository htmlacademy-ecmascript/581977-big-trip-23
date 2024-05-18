import {render, RenderPosition} from '../render.js';
import SortView from '../view/sort-view.js';
import FiltersView from '../view/filters-view.js';
import WaypointView from '../view/waypoint-view.js';
import EditingFormView from '../view/editing-form-view';
import WaypointListView from '../view/waypoint-list-view';
import CreationFormView from '../view/creation-form-view';

export default class RenderComponentsPresenter {
  waypointListView = new WaypointListView();
  tripEventsElement = document.querySelector('.trip-events');
  tripControlsFiltersElement = document.querySelector('.trip-controls__filters');

  init() {
    render(new SortView, this.tripEventsElement);
    render(new FiltersView(), this.tripControlsFiltersElement);
    render(this.waypointListView, this.tripEventsElement);
    render(new CreationFormView(), this.waypointListView.getElement());
    render(new EditingFormView(), this.waypointListView.getElement(), RenderPosition.AFTERBEGIN);

    for (let i = 0; i < 3; i++) {
      render(new WaypointView(), this.waypointListView.getElement());
    }
  }
}
