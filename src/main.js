import WaypointsModel from './model/waypoints-model.js';
import RenderComponentsPresenter from './presenter/render-components-presenter.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import NewEventButtonView from './view/new-event-button-view.js';
import DataApiService from './data-api-service.js';
import FailedLoadDataView from './view/failed-load-data-view.js';

const AUTHORIZATION = 'Basic I1fFjzLhxCfSIJF';
const ENDPOINT = 'https://23.objects.htmlacademy.pro/big-trip';
const failedLoadDataComponent = new FailedLoadDataView();

const waypointsModel = new WaypointsModel({
  dataApiService: new DataApiService(ENDPOINT, AUTHORIZATION),
  failedLoadDataComponent: failedLoadDataComponent
});
const destinationsModel = new DestinationsModel({
  dataApiService: new DataApiService(ENDPOINT, AUTHORIZATION),
  failedLoadDataComponent: failedLoadDataComponent
});
const offersModel = new OffersModel({
  dataApiService: new DataApiService(ENDPOINT, AUTHORIZATION),
  failedLoadDataComponent: failedLoadDataComponent
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

destinationsModel.init();
offersModel.init();
waypointsModel.init().finally(() => {
  newEventButtonComponent.element.disabled = false;
});
