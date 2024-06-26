import {TRIP_TYPES} from '../const.js';
import {capitalizeFirstLetter, DateTimeFormat, getFormattedDate} from '../utils.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import he from 'he';

const BLANK_WAYPOINT = {
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: null,
  isFavorite: false,
  offers: null,
  type: 'flight'
};

const createTripTypesTemplate = (type, isDisabled) => TRIP_TYPES.map((tripType) => `<div class="event__type-item">
                          <input id="event-type-${tripType.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${tripType.toLowerCase()}" ${tripType.toLowerCase() === type ? 'checked' : ''} ${isDisabled ? 'disabled' : ''}>
                          <label class="event__type-label  event__type-label--${tripType.toLowerCase()}" for="event-type-${tripType.toLowerCase()}-1">${tripType}</label>
                        </div>`).join('');

const createCityNamesTemplate = (destinations) => destinations.map((data) => `<option value="${data.name}"></option>`).join('');

const createOffersTemplate = (typeOffers, pointOffers, isDisabled) => (typeof typeOffers === 'undefined' || typeOffers.offers.length === 0) ? '' : `<section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
                    <div class="event__available-offers">
                      ${typeOffers.offers.map((offer) => `<div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.id}-1" data-id="${offer.id}" type="checkbox" name="event-offer-${offer.id}" ${(pointOffers.some((item)=> item.id === offer.id) ? 'checked' : '')} ${isDisabled ? 'disabled' : ''}>
                        <label class="event__offer-label" for="event-offer-${offer.id}-1">
                          <span class="event__offer-title">${offer.title}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${offer.price}</span>
                        </label>
                      </div>`).join('')}
                    </div>
                  </section>`;

const createDescriptionTemplate = (description, pictures) => description ? `<section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${description}</p>
                    ${pictures.length !== 0 ? `<div class="event__photos-container">
                      <div class="event__photos-tape">
                        ${pictures.map((picture) => `<img class="event__photo" src="${picture.src}" alt="${picture.description}">`).join('')}
                      </div>
                    </div>` : ''}
                  </section>` : '';

const getResetButtonName = (waypoint, isDeleting) => {
  if (waypoint.id) {
    if (isDeleting) {
      return 'Deleting...';
    } else {
      return 'Delete';
    }
  } else {
    return 'Cancel';
  }
};

function createEditingFormTemplate(waypoint, destinations, offers) {
  const {basePrice, dateFrom, dateTo, destination, type, isDisabled, isSaving, isDeleting} = waypoint;
  const currentDestination = destinations.find((item) => item.id === destination);
  const {description, pictures} = currentDestination ? currentDestination : '';
  const typeOffers = offers.find((offer) => offer.type === type);
  const pointOffers = typeOffers && waypoint.offers ? typeOffers.offers.filter((typeOffer) => waypoint.offers.includes(typeOffer.id)) : [];
  const typesTemplate = createTripTypesTemplate(type, isDisabled);
  const cityNamesTemplate = createCityNamesTemplate(destinations);
  const offersTemplate = createOffersTemplate(typeOffers, pointOffers, isDisabled);
  const formattedDates = {
    start: getFormattedDate(dateFrom, DateTimeFormat.DATETIME),
    end: getFormattedDate(dateTo, DateTimeFormat.DATETIME)
  };
  const descriptionTemplate = createDescriptionTemplate(description, pictures);
  const resetButtonName = getResetButtonName(waypoint, isDeleting);

  return (`            <li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox" ${isDisabled ? 'disabled' : ''}>

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${typesTemplate}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${type ? capitalizeFirstLetter(type) : ''}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${he.encode(currentDestination ? currentDestination.name : '')}" list="destination-list-1" ${isDisabled ? 'disabled' : ''}>
                    <datalist id="destination-list-1">
                      ${cityNamesTemplate}
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${formattedDates.start}" ${isDisabled ? 'disabled' : ''}>
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${formattedDates.end}" ${isDisabled ? 'disabled' : ''}>
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="number" min="1" name="event-price" value="${basePrice}" ${isDisabled ? 'disabled' : ''}>
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit" ${isDisabled ? 'disabled' : ''}>${isSaving ? 'Saving...' : 'Save'}</button>
                  <button class="event__reset-btn" type="reset">${resetButtonName}</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                  ${offersTemplate}
                  ${descriptionTemplate}
                </section>
              </form>
            </li>`);
}

export default class EditingFormView extends AbstractStatefulView{
  #destinations = null;
  #offers = null;
  #handleFormSubmit = null;
  #handleDeleteClick = null;
  #handleEditCloseClick = null;
  #datepickerFrom = null;
  #datepickerTo = null;

  constructor({waypoint = BLANK_WAYPOINT, destinations, offers, onFormSubmit, onDeleteClick, onEditCloseClick}) {
    super();
    this._setState(EditingFormView.parseWaypointToState(waypoint));
    this.#destinations = destinations;
    this.#offers = offers;
    this.#handleFormSubmit = onFormSubmit;
    this.#handleDeleteClick = onDeleteClick;
    this.#handleEditCloseClick = onEditCloseClick;

    this._restoreHandlers();
  }

  get template() {
    return createEditingFormTemplate(this._state, this.#destinations, this.#offers);
  }

  _restoreHandlers() {
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__type-list').addEventListener('change', this.#typeClickHandler);
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#destinationInputHandler);
    this.element.querySelector('.event__input--price').addEventListener('input', this.#priceInputHandler);
    this.element.querySelector('.event__details').addEventListener('change', this.#offerInputHandler);
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#formDeleteClickHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editCloseClickHandler);
    this.#setDatepickerFrom();
    this.#setDatepickerTo();
  }

  reset(waypoint) {
    this._setState({offers: []});
    this.updateElement(
      EditingFormView.parseWaypointToState(waypoint),
    );
  }

  removeElement() {
    super.removeElement();

    if (this.#datepickerFrom) {
      this.#datepickerFrom.destroy();
      this.#datepickerFrom = null;
    }
    if (this.#datepickerTo) {
      this.#datepickerTo.destroy();
      this.#datepickerTo = null;
    }
  }

  #setDatepickerFrom() {
    this.#datepickerFrom = flatpickr(
      this.element.querySelector('input[name="event-start-time"]'),
      {
        maxDate: this._state.dateTo,
        enableTime: true,
        dateFormat: 'd/m/y H:i',
        defaultDate: this._state.dateFrom,
        onClose: this.#dateFromChangeHandler,
      }
    );
  }

  #setDatepickerTo() {
    this.#datepickerTo = flatpickr(
      this.element.querySelector('input[name="event-end-time"]'),
      {
        minDate: this._state.dateFrom,
        enableTime: true,
        dateFormat: 'd/m/y H:i',
        defaultDate: this._state.dateTo,
        onClose: this.#dateToChangeHandler,
      }
    );
  }

  #dateFromChangeHandler = ([userDate]) => {
    this.updateElement({
      dateFrom: userDate,
    });
  };

  #dateToChangeHandler = ([userDate]) => {
    this.updateElement({
      dateTo: userDate,
    });
  };

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(EditingFormView.parseStateToWaypoint(this._state));
  };

  #formDeleteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleDeleteClick(EditingFormView.parseStateToWaypoint(this._state));
  };

  #typeClickHandler = (evt) => {
    evt.preventDefault();
    this._setState({offers: []});
    this.updateElement({
      type: evt.target.value
    });
  };

  #destinationInputHandler = (evt) => {
    evt.preventDefault();
    const selectedDestination = this.#destinations.find((item) => item.name === evt.target.value);

    if (selectedDestination) {
      this.updateElement({
        destination: selectedDestination.id
      });
    }
  };

  #priceInputHandler = (evt) => {
    evt.preventDefault();
    this._setState({
      basePrice: parseInt(evt.target.value, 10)
    });
  };

  #offerInputHandler = (evt) => {
    evt.preventDefault();
    if (!this._state.offers) {
      this._setState({offers: []});
    }

    if (this._state.offers.some((item) => item === evt.target.dataset.id)) {
      this.updateElement({
        offers: this._state.offers.filter((item) => item !== evt.target.dataset.id)
      });
    } else {
      this.updateElement({
        offers: this._state.offers.concat([evt.target.dataset.id])
      });
    }
  };

  #editCloseClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditCloseClick();
  };

  static parseWaypointToState(waypoint) {
    return {
      ...waypoint,
      isDisabled: false,
      isSaving: false,
      isDeleting: false
    };
  }

  static parseStateToWaypoint(state) {
    const waypoint = {...state};

    delete waypoint.isDisabled;
    delete waypoint.isSaving;
    delete waypoint.isDeleting;

    return waypoint;
  }
}
