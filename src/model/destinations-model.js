import Observable from '../framework/observable';
import {UpdateType} from '../const';

export default class DestinationsModel extends Observable{
  #dataApiService = null;
  #destinations = [];

  constructor({dataApiService}) {
    super();
    this.#dataApiService = dataApiService;
  }

  get destinations() {
    return this.#destinations;
  }

  async init() {
    try {
      this.#destinations = await this.#dataApiService.destinations;
    } catch(err) {
      this.#destinations = [];
    }

    this._notify(UpdateType.INIT);
  }
}
