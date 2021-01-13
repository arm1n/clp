// ----------------------------------------------------------------------------------------------------
// Abstract component to be extended by all components.
// ----------------------------------------------------------------------------------------------------
class Base extends HTMLElement {
  connectedCallback() {
    this._connected = true;
    this._templateNode = this.cloneNode(true);

    this.setup();
    this.update();
  }

  disconnectedCallback() {
    this._connected = false;
    this.teardown();
  }

  get componentId() {
    const { constructor: Child } = this;
    if (typeof Child.componentId !== "string") {
      throw new Error(`Static property "componentId" is not set!`);
    }

    return Child.componentId;
  }

  get $template() {
    if (!this._templateNode) {
      return null;
    }

    return this._templateNode;
  }

  get template() {
    if (!this._templateNode) {
      return '';
    }
    
    return this._templateNode.innerHTML;
  }

  get isConnected() {
    return this._connected === true;
  }

  setup() {
    // template method for dom setup based on connected nodes
    // e.g. query for certain dom nodes from `this.$template`
  }

  teardown() {
    // template method for dom teardown on disconnected nodes
    // e.g. remove event listeners for custom dom nodes
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
