// ----------------------------------------------------------------------------------------------------
// Abstract component to be extended by all components.
// ----------------------------------------------------------------------------------------------------
class Base extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <div class="clp-${this.componentId}-wrapper clp-wrapper"></div>
      <div class="clp-${this.componentId}-template clp-template">${this.template}</div>
    `;

    this.$wrapper = this.querySelector(`.clp-${this.componentId}-wrapper`);
    this.$template = this.querySelector(`.clp-${this.componentId}-template`);
  }

  connectedCallback() {
    this._connected = true;
    this.update();
  }

  disconnectedCallback() {
    this._connected = false;
  }

  get componentId() {
    const { constructor: Child } = this;
    if (typeof Child.componentId !== "string") {
      throw new Error(`Static property "componentId" is not set!`);
    }

    return Child.componentId;
  }

  get template() {
    const $template = this.querySelector(`.clp-${this.componentId}-template`);
    const reference = $template !== null ? $template : this;

    return reference.innerHTML;
  }

  get isConnected() {
    return this._connected === true;
  }

  update() {
    if (!this.isConnected) {
      return;
    }

    this.render();
  }

  render() {
    throw new Error(`"render()" must be implemented!`);
  }

  static get componentId() {
    return undefined;
  }
}

export { Base };
