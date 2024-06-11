import Observable from '../framework/observable';
import {UpdateType} from '../const';

export default class OffersModel extends Observable{
  #dataApiService = null;
  #offers = [];

  constructor({dataApiService}) {
    super();
    this.#dataApiService = dataApiService;
  }

  get offers() {
    return this.#offers;
  }

  async init() {
    try {
      this.#offers = await this.#dataApiService.offers;
    } catch(err) {
      this.#offers = [];
    }

    this._notify(UpdateType.INIT);
  }
}
