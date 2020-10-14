// ----------------------------------------------------------------------------------------------------
// Abstract component to be extended by all components.
// ----------------------------------------------------------------------------------------------------
class Base extends HTMLElement {
  connectedCallback() {
    this._connected = true;

    this.innerHTML = `
      <div class="clp-${this.componentId}-wrapper clp-wrapper"></div>
      <div class="clp-${this.componentId}-template clp-template">${this.template}</div>
    `;

    this.$wrapper = this.querySelector(`.clp-${this.componentId}-wrapper`);
    this.$template = this.querySelector(`.clp-${this.componentId}-template`);

    this.setup();
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

  setup() {
    // template method for dom setup based on connected nodes
    // e.g. query for certain dom nodes from `this.$template`
  }

  render() {
    // abstract method to render into `this.$wrappepr` <div>
    throw new Error(`"render()" must be implemented!`);
  }

  update() {
    if (!this.isConnected) {
      return;
    }

    this.render();
  }

  static get componentId() {
    return undefined;
  }
}

export { Base };
