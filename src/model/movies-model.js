import Observable from '../framework/observable.js';
import { mockMovies } from '../mock/movies.js';

export default class MoviesModel extends Observable {
  constructor() {
    super();
    this._movies = [...mockMovies];
    this._nextId = this._movies.length + 1;
  }

  getMovies() {
    return this._movies;
  }

  addMovie(title, watched) {
    this._movies.push({ id: this._nextId++, title, watched });
    this._notify(this._movies);
  }

  deleteMovie(id) {
    this._movies = this._movies.filter(m => m.id !== id);
    this._notify(this._movies);
  }

  updateMovie(id, data) {
    this._movies = this._movies.map(m => m.id === id ? { ...m, ...data } : m);
    this._notify(this._movies);
  }

  filterByStatus(status) {
    if (status === 'all') return this._movies;
    return this._movies.filter(m => status === 'watched' ? m.watched : !m.watched);
  }
}
