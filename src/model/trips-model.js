import Observable from '../framework/observable.js';
import {UpdateType} from '../const.js';

export default class TripsModel extends Observable{
  #dataApiService = null;
  #waypoints = [];
  #destinations = [];
  #offers = [];
  #isLoadFailure = false;

  constructor({dataApiService}) {
    super();
    this.#dataApiService = dataApiService;
  }

  get waypoints() {
    return this.#waypoints;
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }

  async init() {
    try {
      const waypoints = await this.#dataApiService.waypoints;
      this.#waypoints = waypoints.map(this.#adaptToClient);
      this.#destinations = await this.#dataApiService.destinations;
      this.#offers = await this.#dataApiService.offers;
    } catch(err) {
      this.#waypoints = [];
      this.#destinations = [];
      this.#offers = [];
      this.#isLoadFailure = true;
    }

    this._notify(UpdateType.INIT, {isLoadFailure: this.#isLoadFailure});
  }

  async updateWaypoint(updateType, update) {
    const index = this.#waypoints.findIndex((waypoint) => waypoint.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting waypoint');
    }

    try {
      const response = await this.#dataApiService.updateWaypoint(update);
      const updatedWaypoint = this.#adaptToClient(response);
      this.#waypoints = [
        ...this.#waypoints.slice(0, index),
        updatedWaypoint,
        ...this.#waypoints.slice(index + 1),
      ];
      this._notify(updateType, update);
    } catch(err) {
      throw new Error('Can\'t update waypoint');
    }
  }

  async addWaypoint(updateType, update) {
    try {
      const response = await this.#dataApiService.addWaypoint(update);
      const newWaypoint = this.#adaptToClient(response);
      this.#waypoints = [newWaypoint, ...this.#waypoints];
      this._notify(updateType, newWaypoint);
    } catch(err) {
      throw new Error('Can\'t add task');
    }
  }

  async deleteWaypoint(updateType, update) {
    const index = this.#waypoints.findIndex((waypoint) => waypoint.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t delete unexisting waypoint');
    }

    try {
      await this.#dataApiService.deleteWaypoint(update);
      this.#waypoints = [
        ...this.#waypoints.slice(0, index),
        ...this.#waypoints.slice(index + 1),
      ];
      this._notify(updateType);
    } catch(err) {
      throw new Error('Can\'t delete task');
    }
  }

  #adaptToClient(waypoint) {
    const adaptedWaypoint = {...waypoint,
      basePrice: waypoint['base_price'],
      dateFrom: waypoint['date_from'] !== null ? new Date(waypoint['date_from']) : waypoint['date_from'],
      dateTo: waypoint['date_to'] !== null ? new Date(waypoint['date_to']) : waypoint['date_to'],
      isFavorite: waypoint['is_favorite']
    };

    delete adaptedWaypoint['base_price'];
    delete adaptedWaypoint['date_from'];
    delete adaptedWaypoint['date_to'];
    delete adaptedWaypoint['is_favorite'];

    return adaptedWaypoint;
  }
}
