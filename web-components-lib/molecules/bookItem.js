import "../atoms/label.js";
import "../atoms/title.js";

export class BookItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  // Define the props using getters and setters
  get title() {
    return this.getAttribute("title") || "Default Title";
  }

  set title(value) {
    this.setAttribute("title", value);
  }

  get label() {
    return this.getAttribute("label") || "Default Label";
  }

  set label(value) {
    this.setAttribute("label", value);
  }

  get path() {
    return this.getAttribute("path") || "https://www.dbooks.org/img/books/5635349929s.jpg";
  }

  set path(value) {
    this.setAttribute("path", value);
  }

  // Define the onClick property to handle click events
  get onClick() {
    return this._onClick;
  }

  set onClick(value) {
    if (this._onClick) {
      this.removeEventListener("click", this._onClick);
    }
    this._onClick = value;
    if (this._onClick) {
      this.addEventListener("click", this._onClick);
      this.style.cursor = "pointer"; // Change the cursor to a pointer on hover
    } else {
      this.style.cursor = "auto"; // Reset cursor to default when there's no onClick handler
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .bookItem {
          display: flex; 
          flex-direction: column; 
          cursor: pointer; 
          width: 150px; 
          gap: 0.8rem;
          align-items: center;
          padding: 5px;
        }
        .bookItem:hover{
          background: rgba(0,0,0,0.1);
        }
        .bookItemTextContainer {
          width:150px; display:flex; flex-direction: column; gap: 5px; line-height:15px
        }
      </style>
      <div class="bookItem">
        <img src="${this.path}" width="119px" height="160px"/>
        <div class="bookItemTextContainer">      
          <title-component text="${this.title}" size="small" bold ellipsed></title-component>
          <label-component text="${this.label}" size="small" bold ellipsed color="#7E7E7E" ></label-component>
        </div>
      </div>
    `;
  }
}

customElements.define("book-item-component", BookItem);
