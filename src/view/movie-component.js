import AbstractComponent from '../framework/abstract-component.js';

export default class MovieComponent extends AbstractComponent {
  constructor(movie) {
    super();
    this._movie = movie;
  }

  get template() {
    return `
      <div class="card ${this._movie.watched ? 'watched' : ''}">
        <h3 class="card-title">${this._movie.title}</h3>
        <div class="card-details">
          <label>
            <input type="checkbox" class="toggle-watched" ${this._movie.watched ? 'checked' : ''}>
            Просмотрен
          </label>
          <button class="edit">✎</button>
          <button class="delete">🗑</button>
        </div>
      </div>
    `;
  }

  setDeleteHandler(cb) {
    this.element.querySelector('.delete').addEventListener('click', cb);
  }

  setToggleHandler(cb) {
    this.element
      .querySelector('.toggle-watched')
      .addEventListener('change', e => cb(e.target.checked));
  }

  setEditHandler(cb) {
    this.element.querySelector('.edit').addEventListener('click', () => {
      const newTitle = prompt('Новое название', this._movie.title);
      if (newTitle) cb({ title: newTitle });
    });
  }
}
