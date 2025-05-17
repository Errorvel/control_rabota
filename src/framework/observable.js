export default class Observable {
  #observers = [];
  addObserver(fn) {
    this.#observers.push(fn);
  }
  _notify(payload) {
    this.#observers.forEach(fn => fn(payload));
  }
}
