import TripsModel from './model/trips-model.js';
import RenderComponentsPresenter from './presenter/render-components-presenter.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import NewEventButtonView from './view/new-event-button-view.js';
import DataApiService from './data-api-service.js';

const AUTHORIZATION = 'Basic I1fFjzLhVCfSIJF';
const ENDPOINT = 'https://23.objects.htmlacademy.pro/big-trip';

const tripsModel = new TripsModel({
  dataApiService: new DataApiService(ENDPOINT, AUTHORIZATION),
});
const filterModel = new FilterModel();

const tripControlsFiltersElement = document.querySelector('.trip-controls__filters');

const renderComponentsPresenter = new RenderComponentsPresenter({
  tripsModel,
  filterModel,
  onNewWaypointDestroy: handleNewWaypointFormClose
});

const filterPresenter = new FilterPresenter({
  filterContainer: tripControlsFiltersElement,
  filterModel,
  tripsModel
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
tripsModel.init().finally(() => {
  newEventButtonComponent.element.disabled = false;
});
