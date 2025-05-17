import AbstractComponent from '../framework/abstract-component.js';

export default class FormAddMovieComponent extends AbstractComponent {
  get template() {
    return `
      <section class="movie-form">
        <form id="movie-form">
          <input type="text" name="title" placeholder="Название фильма" required />
          <label class="watched-toggle">
            <input type="checkbox" name="watched" />
            Просмотрен
          </label>
          <button type="submit">Добавить</button>
        </form>
      </section>
    `;
  }

  setAddHandler(cb) {
    this.element
      .querySelector('#movie-form')
      .addEventListener('submit', e => {
        e.preventDefault();
        const title = this.element.title.value.trim();
        const watched = this.element.watched.checked;
        if (title) cb(title, watched);
        this.element.reset();
      });
  }
}
