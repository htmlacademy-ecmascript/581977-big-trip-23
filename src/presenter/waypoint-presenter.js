import WaypointView from '../view/waypoint-view.js';
import EditingFormView from '../view/editing-form-view.js';
import {remove, render, replace} from '../framework/render.js';
import {UpdateType, UserAction} from '../const';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class WaypointPresenter {
  #waypointListContainer = null;
  #handleDataChange = null;
  #handleModeChange = null;

  #waypointComponent = null;
  #waypointEditComponent = null;

  #waypoint = null;
  #destinations = null;
  #offers = null;
  #mode = Mode.DEFAULT;

  constructor({waypointListContainer, onDataChange, onModeChange}) {
    this.#waypointListContainer = waypointListContainer;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(waypoint, destinations, offers) {
    this.#waypoint = waypoint;
    this.#destinations = destinations;
    this.#offers = offers;

    const prevWaypointComponent = this.#waypointComponent;
    const prevWaypointEditComponent = this.#waypointEditComponent;

    this.#waypointComponent = new WaypointView({
      waypoint: this.#waypoint,
      destinations: this.#destinations,
      offers: this.#offers,
      onEditClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick
    });

    this.#waypointEditComponent = new EditingFormView({
      waypoint: this.#waypoint,
      destinations: this.#destinations,
      offers: this.#offers,
      onFormSubmit: this.#handleFormSubmit,
      onDeleteClick: this.#handleDeleteClick,
      onEditCloseClick: this.#handleEditCloseClick,
    });

    if (prevWaypointComponent === null || prevWaypointEditComponent === null) {
      render(this.#waypointComponent, this.#waypointListContainer);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#waypointComponent, prevWaypointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#waypointComponent, prevWaypointEditComponent);
      this.#mode = Mode.DEFAULT;
    }

    remove(prevWaypointComponent);
    remove(prevWaypointEditComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#waypointEditComponent.reset(this.#waypoint);
      this.#replaceFormToCard();
    }
  }

  destroy() {
    remove(this.#waypointComponent);
    remove(this.#waypointEditComponent);
  }

  #replaceCardToForm() {
    replace(this.#waypointEditComponent, this.#waypointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceFormToCard() {
    replace(this.#waypointComponent, this.#waypointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#waypointEditComponent.reset(this.#waypoint);
      this.#replaceFormToCard();
    }
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange(
      UserAction.UPDATE_WAYPOINT,
      UpdateType.MINOR,
      {...this.#waypoint, isFavorite: !this.#waypoint.isFavorite},
    );
  };

  #handleEditClick = () => {
    this.#replaceCardToForm();
  };

  #handleEditCloseClick = () => {
    this.#waypointEditComponent.reset(this.#waypoint);
    this.#replaceFormToCard();
  };

  #handleFormSubmit = (update) => {
    this.#handleDataChange(
      UserAction.UPDATE_WAYPOINT,
      UpdateType.MINOR,
      update,
    );
  };

  #handleDeleteClick = (waypoint) => {
    this.#handleDataChange(
      UserAction.DELETE_WAYPOINT,
      UpdateType.MINOR,
      waypoint,
    );
  };

  setSaving() {
    if (this.#mode === Mode.EDITING) {
      this.#waypointEditComponent.updateElement({
        isDisabled: true,
        isSaving: true,
      });
    }
  }

  setDeleting() {
    if (this.#mode === Mode.EDITING) {
      this.#waypointEditComponent.updateElement({
        isDisabled: true,
        isDeleting: true,
      });
    }
  }

  setAborting() {
    if (this.#mode === Mode.DEFAULT) {
      this.#waypointComponent.shake();
      return;
    }

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
