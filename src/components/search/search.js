import { DivComponent } from "../../common/div-component";
import './search.css';

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  render() {
    this.el.classList('search');
    this.el.innerHTML = `

    `;

    return this.el;
  }
}