import TripsModal from '../src/model/trips-modal.js';
import RenderComponentsPresenter from './presenter/render-components-presenter.js';

const tripModel = new TripsModal();
const renderComponentsPresenter = new RenderComponentsPresenter({tripModel});

renderComponentsPresenter.init();
