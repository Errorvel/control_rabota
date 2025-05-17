import AbstractComponent from '../framework/abstract-component.js';

export default class MovieListComponent extends AbstractComponent {
  constructor() {
    super();
    this._element = document.createElement('div');
    this._element.className = 'card-container';
  }
  get template() {
    return `<div class="card-container"></div>`;
  }
  add(child) {
    this.element.append(child);
  }
  clear() {
    this.element.innerHTML = '';
  }
  get element() {
    return this._element;
  }
}
