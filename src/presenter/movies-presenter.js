import MoviesModel from '../model/movies-model.js';
import HeaderComponent from '../view/header-component.js';
import FormAddMovieComponent from '../view/form-add-movie-component.js';
import FilterComponent from '../view/filter-component.js';
import MovieListComponent from '../view/movie-list-component.js';
import MovieComponent from '../view/movie-component.js';
import { render } from '../framework/render.js';

export default class MoviesPresenter {
  constructor(container) {
    this._container = container;
    this._model = new MoviesModel();

    this._header = new HeaderComponent();
    this._form   = new FormAddMovieComponent();
    this._filter = new FilterComponent();
    this._list   = new MovieListComponent();

    render(this._header, this._container);
    render(this._form, this._container);
    render(this._filter, this._container);
    render(this._list, this._container);

    this._form.setAddHandler(this._handleAdd.bind(this));
    this._filter.setFilterHandler(this._handleFilter.bind(this));
    this._model.addObserver(this._renderMovies.bind(this));

    this._renderMovies(this._model.getMovies());
  }

  _renderMovies(movies) {
    this._list.clear();
    movies.forEach(m => {
      const comp = new MovieComponent(m);
      comp.setDeleteHandler(() => this._model.deleteMovie(m.id));
      comp.setToggleHandler(w => this._model.updateMovie(m.id, { watched: w }));
      comp.setEditHandler(data => this._model.updateMovie(m.id, data));
      this._list.add(comp.element);
    });
  }

  _handleAdd(title, watched) {
    this._model.addMovie(title, watched);
  }

  _handleFilter(status) {
    const filtered = this._model.filterByStatus(status);
    this._renderMovies(filtered);
  }
}
