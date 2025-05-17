import AbstractComponent from '../framework/abstract-component.js';

export default class FilterComponent extends AbstractComponent {
  get template() {
    return `
      <section class="movie-filter">
        <label>Фильтр:
          <select name="filter">
            <option value="all">Все</option>
            <option value="watched">Просмотренные</option>
            <option value="unwatched">Непросмотренные</option>
          </select>
        </label>
      </section>
    `;
  }

  setFilterHandler(cb) {
    this.element
      .querySelector('select[name="filter"]')
      .addEventListener('change', e => cb(e.target.value));
  }
}
