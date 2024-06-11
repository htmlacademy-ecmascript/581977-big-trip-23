import AbstractView from '../framework/view/abstract-view';

const createNewEventButtonTemplate = () => '<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>';

export default class NewEventButtonView extends AbstractView{
  #handleClick = null;

  constructor({onClick}) {
    super();
    this.#handleClick = onClick;
    document.querySelector('.trip-main__event-add-btn').addEventListener('click', this.#clickHandler);
  }

  get template() {
    return createNewEventButtonTemplate();
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleClick();
  };
}
