import { DivComponent } from "../../common/div-component";
import './card.css';

export class Card extends DivComponent {
  constructor(appState, cardState) {
    super();
    this.appState = appState;
    this.cardState = cardState;
  }

  render() {
    this.el.classList.add('card');
    this.el.innerHTML = `
      
    `;
    return this.el;
  }
}