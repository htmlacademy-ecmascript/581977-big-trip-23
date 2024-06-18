import AbstractView from '../framework/view/abstract-view.js';
import dayjs from 'dayjs';
import {sortByDateFromAcs, sortByDateToDesc} from '../sort.js';

const createHeaderTemplate = (waypoints, destinations, offers) => {
  const copiedWaypoints = [...waypoints];
  const sortedWaypointsAsc = copiedWaypoints.sort(sortByDateFromAcs);
  const firstDate = sortedWaypointsAsc[0].dateFrom;
  const sortedWaypointsDesc = copiedWaypoints.sort(sortByDateToDesc);
  const lastDate = sortedWaypointsDesc[0].dateTo;

  const waypointsCount = waypoints.length;
  const firstWaypoint = waypoints[0];
  const secondWaypoint = waypoints[1];
  const lastWaypoint = waypoints[waypointsCount - 1];

  let price = 0;

  waypoints.forEach((waypoint) => {
    price += waypoint.basePrice;
    const typeOffers = offers.find((offer) => offer.type === waypoint.type);
    const pointOffers = typeOffers && waypoint.offers ? typeOffers.offers.filter((typeOffer) => waypoint.offers.includes(typeOffer.id)) : [];
    pointOffers.forEach((pointOffer) => {
      price += pointOffer.price;
    });
  });

  const firstWaypointDestination = destinations.find((item) => item.id === firstWaypoint.destination);
  const secondWaypointDestination = secondWaypoint ? destinations.find((item) => item.id === secondWaypoint.destination) : '';
  const lastWaypointDestination = destinations.find((item) => item.id === lastWaypoint.destination);
  let currentDestinationNames = '';

  if (waypointsCount === 1) {
    currentDestinationNames = firstWaypointDestination.name;
  } else if (waypointsCount === 2) {
    currentDestinationNames = `${firstWaypointDestination.name} — ${lastWaypointDestination.name}`;
  } else if (waypointsCount === 3) {
    currentDestinationNames = `${firstWaypointDestination.name} — ${secondWaypointDestination.name} — ${lastWaypointDestination.name}`;
  } else if (waypointsCount > 3) {
    currentDestinationNames = `${firstWaypointDestination.name} —... — ${lastWaypointDestination.name}`;
  } else {
    currentDestinationNames = '';
  }

  return `<section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__title">${currentDestinationNames}</h1>

              <p class="trip-info__dates">${dayjs(firstDate).format('D MMM')}&nbsp;&mdash;&nbsp;${dayjs(lastDate).format('D MMM')}</p>
            </div>

            <p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${price}</span>
            </p>
          </section>`;
};

export default class HeaderView extends AbstractView {
  #waypoints = null;
  #destinations = null;
  #offers = null;

  constructor({waypoints, destinations, offers}) {
    super();
    this.#waypoints = waypoints;
    this.#destinations = destinations;
    this.#offers = offers;
  }

  get template() {
    return createHeaderTemplate(this.#waypoints, this.#destinations, this.#offers);
  }
}
