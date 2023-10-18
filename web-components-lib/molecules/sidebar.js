import "../atoms/label.js";
import "../atoms/title.js";
import "../atoms/logo.js";

export default class Sidebar extends HTMLElement {
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
