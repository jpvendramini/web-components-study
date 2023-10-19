"use strict";const e={small:"0.625rem",medium:"0.875rem",large:"4rem"};class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML='\n      <style>\n        /* Shadow DOM CSS */\n        .label {\n          font-family: \'Open Sans\', sans-serif;\n          font-weight: normal;\n        }\n        .ellipsed {\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n      </style>\n      <div class="label" id="label"></div>\n    '}get text(){return this.getAttribute("text")}set text(e){this.setAttribute("text",e)}get size(){return e[this.getAttribute("size")]||e.medium}set size(e){this.setAttribute("size",e)}get bold(){return this.hasAttribute("bold")}set bold(e){e?this.setAttribute("bold",""):this.removeAttribute("bold")}get ellipsed(){return this.hasAttribute("ellipsed")}set ellipsed(e){e?this.setAttribute("ellipsed",""):this.removeAttribute("ellipsed")}get color(){return this.getAttribute("color")||"#232323"}set color(e){this.setAttribute("color",e)}connectedCallback(){this.updateTitle()}attributeChangedCallback(e,t,n){"text"!==e&&"size"!==e&&"bold"!==e&&"color"!==e&&"ellipsed"!==e||this.updateTitle()}updateTitle(){const e=this.shadowRoot.getElementById("label");e.textContent=this.text||"Default Title",e.style.fontSize=this.size,e.style.fontWeight=this.bold?"bold":"normal",e.style.color=this.color,this.ellipsed?e.classList.add("ellipsed"):e.classList.remove("ellipsed")}}customElements.define("label-component",t);const n={small:"0.75rem",medium:"1.25rem",large:"4rem"};class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML='\n      <style>\n        .title {\n          font-weight: bold;\n          font-family: \'Libre Baskerville\', serif;\n        }\n        .ellipsed {\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n      </style>\n      <div class="title" id="title"></div>\n    '}get text(){return this.getAttribute("text")}set text(e){this.setAttribute("text",e)}get size(){return n[this.getAttribute("size")]||n.medium}set size(e){this.setAttribute("size",e)}get color(){return this.getAttribute("color")||"#232323"}set color(e){this.setAttribute("color",e)}get bold(){return this.hasAttribute("bold")}set bold(e){e?this.setAttribute("bold",""):this.removeAttribute("bold")}get ellipsed(){return this.hasAttribute("ellipsed")}set ellipsed(e){e?this.setAttribute("ellipsed",""):this.removeAttribute("ellipsed")}connectedCallback(){this.updateTitle()}attributeChangedCallback(e,t,n){"text"!==e&&"size"!==e&&"bold"!==e&&"color"!==e&&"ellipsed"!==e||t===n||this.updateTitle()}updateTitle(){const e=this.shadowRoot.getElementById("title");e.textContent=this.text||"Default Title",e.style.fontWeight=this.bold?"bolder":"bold",e.style.fontSize=this.size,e.style.color=this.color,this.ellipsed?e.classList.add("ellipsed"):e.classList.remove("ellipsed")}}customElements.define("title-component",o);class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}get title(){return this.getAttribute("title")||"Default Title"}set title(e){this.setAttribute("title",e)}get label(){return this.getAttribute("label")||"Default Label"}set label(e){this.setAttribute("label",e)}get path(){return this.getAttribute("path")||"https://www.dbooks.org/img/books/5635349929s.jpg"}set path(e){this.setAttribute("path",e)}get onClick(){return this._onClick}set onClick(e){this._onClick&&this.removeEventListener("click",this._onClick),this._onClick=e,this._onClick?(this.addEventListener("click",this._onClick),this.style.cursor="pointer"):this.style.cursor="auto"}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`\n      <style>\n        .bookItem {\n          display: flex; \n          flex-direction: column; \n          cursor: pointer; \n          width: 150px; \n          gap: 0.8rem;\n          align-items: center;\n          padding: 5px;\n        }\n        .bookItem:hover{\n          background: rgba(0,0,0,0.1);\n        }\n        .bookItemTextContainer {\n          width:150px; display:flex; flex-direction: column; gap: 5px; line-height:15px\n        }\n      </style>\n      <div class="bookItem">\n        <img src="${this.path}" width="119px" height="160px"/>\n        <div class="bookItemTextContainer">      \n          <title-component text="${this.title}" size="small" bold ellipsed></title-component>\n          <label-component text="${this.label}" size="small" bold ellipsed color="#7E7E7E" ></label-component>\n        </div>\n      </div>\n    `}}customElements.define("book-item-component",i);class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["selected"]}attributeChangedCallback(e,t,n){"selected"===e&&this.render("true"===n)}connectedCallback(){this.render("true"===this.getAttribute("selected"))}render(e){const t=`\n            <img src="${e?"/build/icons/bookshelf-selected-logo.svg":"/build/icons/bookshelf-unselected-logo.svg"}" alt="Logo icon" width="43.224px" height="69.333px">\n        `;this.shadowRoot.innerHTML=t}}customElements.define("logo-component",l);class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML='\n      \x3c!-- Your existing HTML template --\x3e\n      <style>\n        .searchInputContainer {\n          position: relative;\n          width: 22.0625rem;\n          height: 2rem;\n          display: flex;\n          align-items: center;\n          gap: 1rem;\n          border-bottom: 2px solid #9B9B9B;\n        }\n        .searchInputContainer:focus, .searchInputContainer:hover {\n          border-bottom: 2px solid #232323;\n          background: rgba(0,0,0,0.1);\n        }\n        .searchInput {\n          position: absolute;\n          top:0;\n          bottom:0;\n          left:0;\n          right:0;\n          -webkit-appearance: none;\n          border: 0;\n          padding-left: 40px;\n          background: transparent;\n        }\n        textarea:focus, input:focus{\n          outline: none;\n        }\n      </style>\n      <div class="searchInputContainer">\n        <img src="/build/icons/search.svg" alt="Search icon" width="18px" height="17px" style="margin-left:.5rem">\n        <input type="text" class="searchInput" placeholder="Search a book by its name or author">\n      </div>\n    ',this.inputElement=this.shadowRoot.querySelector("input"),this._value="",this._onChange=null,this.inputElement.addEventListener("input",this.handleInput.bind(this))}set value(e){this.setAttribute("value",e),this.inputElement.value=e,this._value=e}get value(){return this._value}set onChange(e){this._onChange=e}get onChange(){return this._onChange}handleInput(e){this.value=e.target.value,this.onChange&&this.onChange(this.value)}}customElements.define("search-input-component",s);class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}set bookInfo(e){this._bookInfo=e,this.render()}get bookInfo(){return this._bookInfo}connectedCallback(){this.render()}render(){if(this.bookInfo){const{title:e,subtitle:t,authors:n,description:o,year:i,pages:l,download:s}=this.bookInfo;this.shadowRoot.innerHTML=`\n        <style>\n          .bookDescription {\n            line-height: 1rem;\n          }\n          *::-webkit-scrollbar {\n            width: 8px; /* width of the entire scrollbar */\n          }\n      \n          *::-webkit-scrollbar-track {\n            background: #9B9B9B; /* color of the tracking area */\n          }\n            \n          *::-webkit-scrollbar-thumb {\n            background-color: #fff; /* color of the scroll thumb */\n            border-radius: 8px; /* roundness of the scroll thumb */\n            background-clip: padding-box;\n          }\n          .button{\n            width: 142px;\n            height: 38px;\n            border-radius: 8px;\n            background: white;\n            border: none;\n            cursor: pointer;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            text-decoration: none;\n            color: #232323;\n            font-family: 'Open Sans', sans-serif;\n          }\n          .sidebar {\n            width: 22.625rem;\n            height: 100%;\n            position: fixed;\n            top:0px;\n            right: 0px;\n            background: #A65F37;\n            display: flex;\n            flex-direction: column;\n            align-items:center;\n            justify-content: center;\n            text-align:center;\n            gap: 0.8rem;\n          }\n        </style>\n        <div class="sidebar">\n          <logo-component selected="true"></logo-component>  \n          <title-component text="Book Shelf" size="large" color="white"></title-component>\n          <div style="width:15rem; height:13rem; text-align: left; display: flex; flex-direction: column; gap: 1rem; overflow-y: scroll;">\n            <div class="bookDescription">\n              <label-component text="Title:" size="medium" color="white" bold></label-component>\n              <label-component text="${e}" size="medium" color="white"></label-component>\n            </div>\n            <div class="bookDescription">\n              <label-component text="Subtitle:" size="medium" color="white" bold></label-component>\n              <label-component text="${t}" size="medium" color="white"></label-component>\n            </div>\n            <div class="bookDescription">\n              <label-component text="Authors:" size="medium" color="white" bold></label-component>\n              <label-component text="${n}" size="medium" color="white"></label-component>\n            </div>\n            <div class="bookDescription">\n              <label-component text="Description:" size="medium" color="white" bold></label-component>\n              <label-component text="${o}" size="medium" color="white"></label-component>\n            </div>\n            <div class="bookDescription">\n              <label-component text="Year:" size="medium" color="white" bold></label-component>\n              <label-component text="${i}" size="medium" color="white"></label-component>\n            </div>\n            <div>\n              <label-component text="Pages:" size="medium" color="white" bold></label-component>\n              <label-component text="${l}" size="medium" color="white"></label-component>\n            </div>\n          </div>\n          <a class="button" href="${s}" target="_blank">Download</a>\n        </div>\n      `}else this.shadowRoot.innerHTML='\n      <style>\n        .sidebar {\n          width: 22.625rem;\n          height: 100%;\n          position: fixed;\n          top:0px;\n          right: 0px;\n          background: #A65F37;\n          display: flex;\n          flex-direction: column;\n          align-items:center;\n          justify-content: center;\n          text-align:center;\n          gap: 0.8rem;\n        }\n      </style>\n      <div class="sidebar">\n        <logo-component></logo-component>\n        <title-component text="Book Shelf" size="large" color="white"></title-component>\n        <label-component text="(Select a book to see Its specifications here!)" size="small" color="white"></label-component>\n      </div>\n      '}}customElements.define("sidebar-component",r);
