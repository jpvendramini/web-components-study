const sizes = {
  small: "0.625rem",
  medium: "0.875rem",
  large: "4rem",
};

export class LabelComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        /* Shadow DOM CSS */
        .label {
          font-family: 'Open Sans', sans-serif;
          font-weight: normal;
        }
        .ellipsed {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
      <div class="label" id="label"></div>
    `;
  }

  // Define a getter and setter for the text property
  get text() {
    return this.getAttribute("text");
  }

  set text(value) {
    this.setAttribute("text", value);
  }

  // Define a getter and setter for the size property
  get size() {
    return sizes[this.getAttribute("size")] || sizes.medium; // Default size
  }

  set size(value) {
    this.setAttribute("size", value);
  }

  // Define a getter and setter for the bold property
  get bold() {
    return this.hasAttribute("bold");
  }

  set bold(value) {
    if (value) {
      this.setAttribute("bold", "");
    } else {
      this.removeAttribute("bold");
    }
  }

  get ellipsed() {
    return this.hasAttribute("ellipsed");
  }

  set ellipsed(value) {
    if (value) {
      this.setAttribute("ellipsed", "");
    } else {
      this.removeAttribute("ellipsed");
    }
  }

  // Define a getter and setter for the color property
  get color() {
    return this.getAttribute("color") || "#232323"; // Default color
  }

  set color(value) {
    this.setAttribute("color", value);
  }

  // Called when the component is connected to the DOM
  connectedCallback() {
    this.updateTitle();
  }

  // Called when an observed attribute changes
  attributeChangedCallback(name, oldValue, newValue) {
    if (
      name === "text" ||
      name === "size" ||
      name === "bold" ||
      name === "color" ||
      name === "ellipsed"
    ) {
      this.updateTitle();
    }
  }

  // Update the title text
  updateTitle() {
    const titleElement = this.shadowRoot.getElementById("label");
    titleElement.textContent = this.text || "Default Title";
    titleElement.style.fontSize = this.size;
    titleElement.style.fontWeight = this.bold ? "bold" : "normal";
    titleElement.style.color = this.color;

    // Check if the ellipsed attribute is set and apply ellipsis styles
    if (this.ellipsed) {
      titleElement.classList.add("ellipsed");
    } else {
      titleElement.classList.remove("ellipsed");
    }
  }
}
customElements.define("label-component", LabelComponent);
