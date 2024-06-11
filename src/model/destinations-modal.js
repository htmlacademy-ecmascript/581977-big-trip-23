import Observable from '../framework/observable';
import {mockedDestinations} from '../mock/destinations';

export default class DestinationsModal extends Observable{
  #destinations = mockedDestinations;

  get destinations() {
    return this.#destinations;
  }
}
