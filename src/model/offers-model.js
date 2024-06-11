import Observable from '../framework/observable';
import {mockedOffers} from '../mock/offers';

export default class OffersModel extends Observable{
  #offers = mockedOffers;

  get offers() {
    return this.#offers;
  }
}
