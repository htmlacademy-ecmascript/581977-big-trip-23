import WaypointsModel from './model/waypoints-model.js';
import RenderComponentsPresenter from './presenter/render-components-presenter.js';
import DestinationsModel from './model/destinations-model';
import OffersModel from './model/offers-model';
import FilterModel from './model/filter-model';
import FilterPresenter from './presenter/filter-presenter';
import NewEventButtonView from './view/new-event-button-view';
import DataApiService from './data-api-service';

const AUTHORIZATION = 'Basic ICfFjzLhxCfSIJF';
const ENDPOINT = 'https://23.objects.htmlacademy.pro/big-trip';

const waypointsModel = new WaypointsModel({
  dataApiService: new DataApiService(ENDPOINT, AUTHORIZATION),
});
const destinationsModel = new DestinationsModel({
  dataApiService: new DataApiService(ENDPOINT, AUTHORIZATION)
});
const offersModel = new OffersModel({
  dataApiService: new DataApiService(ENDPOINT, AUTHORIZATION)
});
const filterModel = new FilterModel();

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

newEventButtonComponent.element.disabled = true;
filterPresenter.init();
renderComponentsPresenter.init();

Promise.all([destinationsModel.init(), offersModel.init()]).then(() => {
  waypointsModel.init().finally(() => {
    newEventButtonComponent.element.disabled = false;
  });
});
