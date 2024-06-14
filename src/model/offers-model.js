import Observable from '../framework/observable.js';
import {UpdateType} from '../const.js';
import {render} from '../framework/render.js';

export default class OffersModel extends Observable{
  #dataApiService = null;
  #offers = [];
  #failedLoadDataComponent = null;

  constructor({dataApiService, failedLoadDataComponent}) {
    super();
    this.#dataApiService = dataApiService;
    this.#failedLoadDataComponent = failedLoadDataComponent;
  }

  get offers() {
    return this.#offers;
  }

  async init() {
    try {
      this.#offers = await this.#dataApiService.offers;
    } catch(err) {
      this.#offers = [];
      render(this.#failedLoadDataComponent, document.querySelector('.page-main > .page-body__container'));
    }

    this._notify(UpdateType.INIT);
  }
}
