import { DivComponent } from "../../common/div-component";

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.el.innerHTML = '';
    this.el.classList = 'header';
    this.el.innerHTML = `
      <div>
        <img src="" alt="Логотип"
      </div>
    `
  }
}