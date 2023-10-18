const titleSizes = {
  small: "0.75rem",
  medium: "1.25rem",
  large: "4rem",
};

export default class TitleComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        .title {
          font-weight: bold;
          font-family: 'Libre Baskerville', serif;
        }
        .ellipsed {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
      <div class="title" id="title"></div>
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
    return titleSizes[this.getAttribute("size")] || titleSizes.medium; // Default size
  }

  set size(value) {
    this.setAttribute("size", value);
  }

  // Define a getter and setter for the color property
  get color() {
    return this.getAttribute("color") || "#232323"; // Default color
  }

  set color(value) {
    this.setAttribute("color", value);
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

  // Define a getter and setter for the ellipsed property
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

  // Called when the component is connected to the DOM
  connectedCallback() {
    this.updateTitle();
  }

  // Called when an observed attribute changes
  attributeChangedCallback(name, oldValue, newValue) {
    if (
      (name === "text" ||
        name === "size" ||
        name === "bold" ||
        name === "color" ||
        name === "ellipsed") &&
      oldValue !== newValue
    ) {
      this.updateTitle();
    }
  }

  // Update the title text and styles
  updateTitle() {
    const titleElement = this.shadowRoot.getElementById("title");
    titleElement.textContent = this.text || "Default Title";
    titleElement.style.fontWeight = this.bold ? "bolder" : "bold";
    titleElement.style.fontSize = this.size;
    titleElement.style.color = this.color;

    // Check if the ellipsed attribute is set and apply ellipsis styles
    if (this.ellipsed) {
      titleElement.classList.add("ellipsed");
    } else {
      titleElement.classList.remove("ellipsed");
    }
  }
}

customElements.define("title-component", TitleComponent);
