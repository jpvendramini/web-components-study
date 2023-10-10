import "../atoms/label.js";
import "../atoms/title.js";

const sizes = {
  small: "0.75rem",
  medium: "1.25rem",
  large: "4rem",
};

class SearchInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <div>
        <input type="text" placeholder="Search a book by It's name or author">
      </div>
    `;
  }

  // // Define a getter and setter for the text property
  //   get text() {
  //     return this.getAttribute("text");
  //   }

  //   set text(value) {
  //     this.setAttribute("text", value);
  //   }

  //   // Define a getter and setter for the size property
  //   get size() {
  //     return sizes[this.getAttribute("size")] || sizes.medium; // Default size
  //   }

  //   set size(value) {
  //     this.setAttribute("size", value);
  //   }

  //   // Called when the component is connected to the DOM
  //   connectedCallback() {
  //     this.updateTitle();
  //   }

  //   // Called when an observed attribute changes
  //   attributeChangedCallback(name, oldValue, newValue) {
  //     if ((name === "text" || name === "size") && oldValue !== newValue) {
  //       this.updateTitle();
  //     }
  //   }

  //   // Update the title text
  //   updateTitle() {
  //     const titleElement = this.shadowRoot.getElementById("title");
  //     titleElement.textContent = this.text || "Default Title";
  //     titleElement.style.fontSize = this.size;
  //   }
}
customElements.define("search-input-component", SearchInput);
