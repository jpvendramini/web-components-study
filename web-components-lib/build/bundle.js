'use strict';

const sizes$1 = {
  small: "0.625rem",
  medium: "0.875rem",
  large: "4rem",
};

class LabelComponent extends HTMLElement {
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
    return sizes$1[this.getAttribute("size")] || sizes$1.medium; // Default size
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

const sizes = {
  small: "0.75rem",
  medium: "1.25rem",
  large: "4rem",
};

class TitleComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        /* Shadow DOM CSS */
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
    return sizes[this.getAttribute("size")] || sizes.medium; // Default size
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
  
        const template = `
            <img src="${IMG_PATH}" alt="Logo icon" width="43.224px" height="69.333px">
        `;
  
        this.shadowRoot.innerHTML = template;
    }
  }
  
  customElements.define("logo-component", Logo);

class SearchInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        .searchInputContainer {
          position: relative;
          width: 22.0625rem;
          height: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border-bottom: 2px solid #9B9B9B;
        }
        .searchInputContainer:focus, .searchInputContainer:hover {
          border-bottom: 2px solid #232323;
          background: rgba(0,0,0,0.1);
        }
        .searchInput {
          position: absolute;
          top:0;
          bottom:0;
          left:0;
          right:0;
          -webkit-appearance: none;
          border: 0;
          padding-left: 40px;
          background: transparent;
        }
        textarea:focus, input:focus{
          outline: none;
        }
      </style>
      <div class="searchInputContainer">
        <img src="../web-components-lib/assets/icons/search.svg" alt="Search icon" width="18px" height="17px" style="margin-left:.5rem">
        <input type="text" class="searchInput" placeholder="Search a book by its name or author">
      </div>
    `;
    this.inputElement = this.shadowRoot.querySelector("input");
    
    // Initialize attributes for value and onChange function
    this.value = "";
    
    // Attach an event listener to handle changes in the input
    this.inputElement.addEventListener("input", this.handleInput.bind(this));
  }
  
  // Define a setter for the 'value' attribute
  set value(newValue) {
    this.setAttribute("value", newValue);
    this.inputElement.value = newValue;
  }

  // Define a getter for the 'value' attribute
  get value() {
    return this.getAttribute("value");
  }

  // Handle the input event and dispatch a custom event
  handleInput(event) {
    this.value = event.target.value;
    
    // Dispatch a custom event to notify changes
    this.dispatchEvent(new CustomEvent("value-changed", {
      detail: event.target.value,
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define("search-input-component", SearchInput);

class Sidebar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  // Define the 'bookInfo' property to accept the object as a prop
  set bookInfo(info) {
    this._bookInfo = info;
    this.render();
  }

  get bookInfo() {
    return this._bookInfo;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.bookInfo) {
      const {
        title,
        subtitle,
        authors,
        description,
        year,
        pages,
        download
      } = this.bookInfo;

      this.shadowRoot.innerHTML = `
        <style>
          .bookDescription {
            line-height: 1rem;
          }
          *::-webkit-scrollbar {
            width: 8px; /* width of the entire scrollbar */
          }
      
          *::-webkit-scrollbar-track {
            background: #9B9B9B; /* color of the tracking area */
          }
            
          *::-webkit-scrollbar-thumb {
            background-color: #fff; /* color of the scroll thumb */
            border-radius: 8px; /* roundness of the scroll thumb */
            background-clip: padding-box;
          }
          .button{
            width: 142px;
            height: 38px;
            border-radius: 8px;
            background: white;
            border: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: #232323;
            font-family: 'Open Sans', sans-serif;
          }
          .sidebar {
            width: 22.625rem;
            height: 100%;
            position: fixed;
            top:0px;
            right: 0px;
            background: #A65F37;
            display: flex;
            flex-direction: column;
            align-items:center;
            justify-content: center;
            text-align:center;
            gap: 0.8rem;
          }
        </style>
        <div class="sidebar">
          <logo-component selected="true"></logo-component>  
          <title-component text="Book Shelf" size="large" color="white"></title-component>
          <div style="width:15rem; height:13rem; text-align: left; display: flex; flex-direction: column; gap: 1rem; overflow-y: scroll;">
            <div class="bookDescription">
              <label-component text="Title:" size="medium" color="white" bold></label-component>
              <label-component text="${title}" size="medium" color="white"></label-component>
            </div>
            <div class="bookDescription">
              <label-component text="Subtitle:" size="medium" color="white" bold></label-component>
              <label-component text="${subtitle}" size="medium" color="white"></label-component>
            </div>
            <div class="bookDescription">
              <label-component text="Authors:" size="medium" color="white" bold></label-component>
              <label-component text="${authors}" size="medium" color="white"></label-component>
            </div>
            <div class="bookDescription">
              <label-component text="Description:" size="medium" color="white" bold></label-component>
              <label-component text="${description}" size="medium" color="white"></label-component>
            </div>
            <div class="bookDescription">
              <label-component text="Year:" size="medium" color="white" bold></label-component>
              <label-component text="${year}" size="medium" color="white"></label-component>
            </div>
            <div>
              <label-component text="Pages:" size="medium" color="white" bold></label-component>
              <label-component text="${pages}" size="medium" color="white"></label-component>
            </div>
          </div>
          <a class="button" href="${download}" target="_blank">Download</a>
        </div>
      `;
    } else {
      this.shadowRoot.innerHTML = `
      <style>
        .sidebar {
          width: 22.625rem;
          height: 100%;
          position: fixed;
          top:0px;
          right: 0px;
          background: #A65F37;
          display: flex;
          flex-direction: column;
          align-items:center;
          justify-content: center;
          text-align:center;
          gap: 0.8rem;
        }
      </style>
      <div class="sidebar">
        <logo-component></logo-component>
        <title-component text="Book Shelf" size="large" color="white"></title-component>
        <label-component text="(Select a book to see Its specifications here!)" size="small" color="white"></label-component>
      </div>
      `;
    }
  }
}

customElements.define("sidebar-component", Sidebar);

module.exports = {
    BookItem,
    LabelComponent,
    Logo,
    SearchInput,
    Sidebar,
    TitleComponent
};
