import WaypointsModal from './model/waypoints-modal.js';
import RenderComponentsPresenter from './presenter/render-components-presenter.js';
import DestinationsModal from './model/destinations-modal';
import OffersModel from './model/offers-model';
import FilterModel from './model/filter-model';
import FilterPresenter from './presenter/filter-presenter';
import NewEventButtonView from './view/new-event-button-view';
import {render} from './framework/render';

const waypointsModel = new WaypointsModal();
const destinationsModel = new DestinationsModal();
const offersModel = new OffersModel();
const filterModel = new FilterModel();

const tripMainElement = document.querySelector('.trip-main');
const tripControlsFiltersElement = document.querySelector('.trip-controls__filters');

const renderComponentsPresenter = new RenderComponentsPresenter({
  waypointsModel,
  destinationsModel,
  offersModel,
  filterModel,
  onNewWaypointDestroy: handleNewWaypointFormClose
});

const filterPresenter = new FilterPresenter({
  filterContainer: tripControlsFiltersElement,
  filterModel,
  waypointsModel
});

const newEventButtonComponent = new NewEventButtonView({
  onClick: handleNewEventButtonClick
});

function handleNewWaypointFormClose() {
  newEventButtonComponent.element.disabled = false;
}

function handleNewEventButtonClick() {
  renderComponentsPresenter.createWaypoint();
  newEventButtonComponent.element.disabled = true;
}

//render(newEventButtonComponent, tripMainElement);

filterPresenter.init();
renderComponentsPresenter.init();
