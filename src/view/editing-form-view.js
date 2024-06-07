import AbstractView from '../framework/view/abstract-view.js';
import {CITY_NAMES, TRIP_TYPES} from '../const.js';
import {capitalizeFirstLetter, DateTimeFormats, getFormattedDate} from '../utils.js';

function createEditingFormTemplate(waypoint, destinations, offers) {
  const {basePrice, dateFrom, dateTo, destination, type} = waypoint;
  const currentDestination = destinations.find((item) => item.id === destination);
  const {description} = currentDestination;
  const typeOffers = offers.find((offer) => offer.type === type).offers;
  const pointOffers = typeOffers.filter((typeOffer) => waypoint.offers.includes(typeOffer.id));
  const createTripTypesTemplate = () => TRIP_TYPES.map((tripType) => `<div class="event__type-item">
                          <input id="event-type-${tripType.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${tripType.toLowerCase()}">
                          <label class="event__type-label  event__type-label--${tripType.toLowerCase()}" for="event-type-${tripType.toLowerCase()}-1">${tripType}</label>
                        </div>`).join('');
  const createCityNamesTemplate = () => CITY_NAMES.map((cityName) => `<option value="${cityName}"></option>`).join('');
  const createOffersTemplate = () => pointOffers.length === 0 ? '' : `<section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
                    <div class="event__available-offers">
                      ${pointOffers.map((offer) => `<div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.type}-1" type="checkbox" name="event-offer-${offer.type}" checked>
                        <label class="event__offer-label" for="event-offer-${offer.type}-1">
                          <span class="event__offer-title">${offer.title}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${offer.price}</span>
                        </label>
                      </div>`).join('')}
                    </div>
                  </section>`;
  const typesTemplate = createTripTypesTemplate();
  const cityNamesTemplate = createCityNamesTemplate();
  const offersTemplate = createOffersTemplate();
  const formattedDates = {
    start: getFormattedDate(dateFrom, DateTimeFormats.DATETIME),
    end: getFormattedDate(dateTo, DateTimeFormats.DATETIME)
  };

  return (`            <li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${typesTemplate}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${capitalizeFirstLetter(type)}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${currentDestination.name}" list="destination-list-1">
                    <datalist id="destination-list-1">
                      ${cityNamesTemplate}
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${formattedDates.start}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${formattedDates.end}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                  ${offersTemplate}
                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${description}</p>
                  </section>
                </section>
              </form>
            </li>`);
}

export default class EditingFormView extends AbstractView{
  #waypoint = null;
  #destinations = null;
  #offers = null;
  #handleFormSubmit = null;

  constructor({waypoint, destinations, offers, onFormSubmit}) {
    super();
    this.#waypoint = waypoint;
    this.#destinations = destinations;
    this.#offers = offers;
    this.#handleFormSubmit = onFormSubmit;

    this.element.querySelector('form')
      .addEventListener('submit', this.#formSubmitHandler);
  }

  get template() {
    return createEditingFormTemplate(this.#waypoint, this.#destinations, this.#offers);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(this.#waypoint);
  };
}
