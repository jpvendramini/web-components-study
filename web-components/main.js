class TestComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const button = document.createElement("button");
    button.onclick = () => console.log("Testing web components!");
    button.textContent = this.hasAttribute("text")
      ? this.getAttribute("text")
      : "Test button";

    shadow.appendChild(button);
  }
}

customElements.define("test-component", TestComponent);
