export default class SearchInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <!-- Your existing HTML template -->
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
        <img src="/build/icons/search.svg" alt="Search icon" width="18px" height="17px" style="margin-left:.5rem">
        <input type="text" class="searchInput" placeholder="Search a book by its name or author">
      </div>
    `;
    this.inputElement = this.shadowRoot.querySelector("input");

    // Initialize attributes for value and onChange function
    this._value = ""; // Use an underscore to avoid naming conflicts with the setter
    this._onChange = null; // Initialize onChange as null

    // Attach an event listener to handle changes in the input
    this.inputElement.addEventListener("input", this.handleInput.bind(this));
  }

  // Define a setter and getter for the 'value' attribute
  set value(newValue) {
    this.setAttribute("value", newValue);
    this.inputElement.value = newValue;
    this._value = newValue;
  }

  get value() {
    return this._value;
  }

  // Define a setter and getter for the 'onChange' prop
  set onChange(handler) {
    this._onChange = handler;
  }

  get onChange() {
    return this._onChange;
  }

  handleInput(event) {
    this.value = event.target.value;

    // Call the onChange function if it's provided
    if (this.onChange) {
      this.onChange(this.value);
    }
  }
}

customElements.define("search-input-component", SearchInput);
