import Observable from '../framework/observable.js';
import {UpdateType} from '../const.js';
import {render} from '../framework/render.js';

export default class DestinationsModel extends Observable{
  #dataApiService = null;
  #destinations = [];
  #failedLoadDataComponent = null;

  constructor({dataApiService, failedLoadDataComponent}) {
    super();
    this.#dataApiService = dataApiService;
    this.#failedLoadDataComponent = failedLoadDataComponent;
  }

  get destinations() {
    return this.#destinations;
  }

  async init() {
    try {
      this.#destinations = await this.#dataApiService.destinations;
    } catch(err) {
      this.#destinations = [];
      render(this.#failedLoadDataComponent, document.querySelector('.page-main > .page-body__container'));
    }

    this._notify(UpdateType.INIT);
  }
}
