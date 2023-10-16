class Logo extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    static get observedAttributes() {
      return ["selected"];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "selected") {
        this.render(newValue === "true");
      }
    }
  
    connectedCallback() {
      this.render(this.getAttribute("selected") === "true");
    }
  
    render(selected) {
      const IMG_PATH = selected
        ? "../web-components-lib/assets/icons/bookshelf-selected-logo.svg"
        : "../web-components-lib/assets/icons/bookshelf-unselected-logo.svg";
  
      this.shadowRoot.innerHTML = `
          <img src="${IMG_PATH}" alt="Logo icon" width="43.224px" height="69.333px">
      `;
    }
  }
  
  customElements.define("logo-component", Logo);
  