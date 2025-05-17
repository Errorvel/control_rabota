import AbstractComponent from '../framework/abstract-component.js';

export default class HeaderComponent extends AbstractComponent {
  get template() {
    return `<header><h1>Моя коллекция фильмов</h1></header>`;
  }
}
