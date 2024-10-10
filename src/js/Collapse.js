export default class Collapse {
  constructor() {
    this.container = null;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error("container is not HTMLElement");
    }
    this.container = container;
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error("ListEditPlay not bind to DOM");
    }
  }

  drawUI() {
    this.checkBinding();

    this.container.innerHTML = `
      <div class="container">
        <div class="collapse task">
          <div class="collapse-container">
            <button class="collapse-button">Collapse</button>
            <div class="collapse-text">
              <p>
                Animation/css Animation/css Animation/css Animation/css Animation/css Animation/css Animation/css 
                Animation/css Animation/css Animation/css Animation/css Animation/css Animation/css Animation/css 
              </p>
            </div>
          </div>
        </div>
      </div>
    `;

    this.collapseBtn = this.container.querySelector(".collapse-button");
    this.collapseText = this.container.querySelector(".collapse-text");

    this.collapseBtn.addEventListener("click", (event) =>
      this.onCollapseBtn(event)
    );
  }

  onCollapseBtn(event) {
    event.preventDefault();

    this.collapseText.classList.toggle("collapse-transition");
  }
}
