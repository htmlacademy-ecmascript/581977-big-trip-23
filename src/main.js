import TripsModel from './model/trips-model.js';
import RenderComponentsPresenter from './presenter/render-components-presenter.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import NewEventButtonView from './view/new-event-button-view.js';
import DataApiService from './data-api-service.js';
import {render} from './framework/render.js';

const AUTHORIZATION = 'Basic I1fFjzLhVCfSIJF';
const ENDPOINT = 'https://23.objects.htmlacademy.pro/big-trip';

const tripsModel = new TripsModel({
  dataApiService: new DataApiService(ENDPOINT, AUTHORIZATION),
});
const filterModel = new FilterModel();

const newEventButtonComponent = new NewEventButtonView({
  onClick: handleNewEventButtonClick
});

const tripMainElement = document.querySelector('.trip-main');
const tripControlsFiltersElement = document.querySelector('.trip-controls__filters');

const renderComponentsPresenter = new RenderComponentsPresenter({
  tripsModel,
  filterModel,
  newEventButtonComponent,
  onNewWaypointDestroy: handleNewWaypointFormClose
});

const filterPresenter = new FilterPresenter({
  filterContainer: tripControlsFiltersElement,
  filterModel,
  tripsModel
});

function handleNewWaypointFormClose() {
  newEventButtonComponent.element.disabled = false;
}

function handleNewEventButtonClick() {
  renderComponentsPresenter.createWaypoint();
  newEventButtonComponent.element.disabled = true;
}

render(newEventButtonComponent, tripMainElement);
newEventButtonComponent.element.disabled = true;
filterPresenter.init();
renderComponentsPresenter.init();
tripsModel.init();
