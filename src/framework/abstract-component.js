export default class AbstractComponent {
  constructor() {
    this._element = null;
  }
  get element() {
    if (!this._element) {
      const tpl = document.createElement('template');
      tpl.innerHTML = this.template.trim();
      this._element = tpl.content.firstElementChild;
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
  get template() {
    throw new Error('AbstractComponent: template getter not implemented');
  }
}
