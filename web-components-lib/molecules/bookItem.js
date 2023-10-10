import "../atoms/label.js";
import "../atoms/title.js";

class BookItem extends HTMLElement {
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

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .bookItem{
          white-space: nowrap;
          overflow: hidden; 
          text-overflow: ellipsis;
        }
      </style>
      <div style="max-width:119px; display: flex; flex-direction: column; text-align: left; align-items: left; width: 150px; gap: 0.8rem">
        <img src="${this.path}" width="119px" height="160px"/>
        <div style="display:flex; flex-direction: column; gap: 5px; line-height:15px;">      
          <title-component text="${this.title}" size="small" bold class="bookItem"></title-component>
          <label-component text="${this.label}" size="small" bold color="#7E7E7E" class="bookItem"></label-component>
        </div>
      </div>
    `;
  }
}

customElements.define("book-item-component", BookItem);