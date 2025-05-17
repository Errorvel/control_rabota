import AbstractComponent from '../framework/abstract-component.js';

export default class BoardComponent extends AbstractComponent {
  constructor() {
    super();
    this._element = document.createElement('div');
    this._element.className = 'board';
  }
  append(child) { this._element.append(child); }
  get element() { return this._element; }
  get template() { return `<div class="board"></div>`; }
}
