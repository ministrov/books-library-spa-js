import { DivComponent } from "../../common/div-component.js";
import './pagination.css';

export class Pagination extends DivComponent {

  constructor(total, limit) {
    super();
    this.total = total;
    this.limit = limit;
  }

  render() {
    this.el.innerHTML = '';
    this.el.classList.add('pagination');
    this.el.innerHTML = `
      <a class="pagination__link">
        <img src="/static/prev.svg" alt="Предыдущая страница" />
        Предыдущая страница
      </a>
      <a class="pagination__link">
        Следующая страница
        <img src="/static/next.svg" alt="Следующая страница" />
      </a>
    `
    return this.el;
  }
}