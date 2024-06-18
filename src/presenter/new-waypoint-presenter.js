import {remove, render, RenderPosition} from '../framework/render.js';
import {UserAction, UpdateType} from '../const.js';
import EditingFormView from '../view/editing-form-view.js';

export default class NewWaypointPresenter {
  #waypointListContainer = null;

  #handleDataChange = null;
  #handleDestroy = null;

  #waypointEditComponent = null;

  #tripsModel = null;
  #noWaypointComponent = null;
  #pageBodyContainerElement = null;

  constructor({waypointListContainer, onDataChange, onDestroy, tripsModel, noWaypointComponent, pageBodyContainerElement}) {
    this.#waypointListContainer = waypointListContainer;
    this.#handleDataChange = onDataChange;
    this.#handleDestroy = onDestroy;
    this.#tripsModel = tripsModel;
    this.#noWaypointComponent = noWaypointComponent;
    this.#pageBodyContainerElement = pageBodyContainerElement;
  }

  init(destinations, offers) {
    if (this.#waypointEditComponent !== null) {
      return;
    }

    this.#waypointEditComponent = new EditingFormView({
      destinations: destinations,
      offers: offers,
      onFormSubmit: this.#handleFormSubmit,
      onDeleteClick: this.#handleDeleteClick,
      onEditCloseClick: this.#handleEditCloseClick,
    });

    render(this.#waypointEditComponent, this.#waypointListContainer, RenderPosition.AFTERBEGIN);

    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy() {
    if (this.#waypointEditComponent === null) {
      return;
    }

    this.#handleDestroy();

    remove(this.#waypointEditComponent);
    this.#waypointEditComponent = null;

    if (this.#tripsModel.waypoints.length === 0) {
      render(this.#noWaypointComponent, this.#pageBodyContainerElement);
    }

    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #handleFormSubmit = (waypoint) => {
    this.#handleDataChange(
      UserAction.ADD_WAYPOINT,
      UpdateType.MINOR,
      waypoint
    );
  };

  #handleDeleteClick = () => {
    this.destroy();
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.destroy();
    }
  };

  #handleEditCloseClick = () => {
    this.destroy();
  };

  setSaving() {
    this.#waypointEditComponent.updateElement({
      isDisabled: true,
      isSaving: true,
    });
  }

  setAborting() {
    const resetFormState = () => {
      this.#waypointEditComponent.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };

    this.#waypointEditComponent.shake(resetFormState);
  }
}
