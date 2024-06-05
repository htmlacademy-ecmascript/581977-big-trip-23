import WaypointsModal from './model/waypoints-modal.js';
import RenderComponentsPresenter from './presenter/render-components-presenter.js';

const waypointsModel = new WaypointsModal();
const renderComponentsPresenter = new RenderComponentsPresenter({waypointsModel});

renderComponentsPresenter.init();
