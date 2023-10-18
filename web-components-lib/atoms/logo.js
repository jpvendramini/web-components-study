export default class Logo extends HTMLElement {
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
        ? "./icons/bookshelf-selected-logo.svg"
        : "./icons/bookshelf-unselected-logo.svg";
  
        const template = `
            <img src="${IMG_PATH}" alt="Logo icon" width="43.224px" height="69.333px">
        `;
  
        this.shadowRoot.innerHTML = template;
    }
  }
  
  customElements.define("logo-component", Logo);
  