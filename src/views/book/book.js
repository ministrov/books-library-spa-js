import { AbstractView } from '../../common/view.js';
// import onChange from 'on-change';
import { Header } from '../../components/header/header.js';

export class BookView extends AbstractView {
	constructor(bookState) {
		super();
		this.bookState = bookState;
		// this.appState = onChange(this.appState, this.appStateHook.bind(this));
		this.setTitle('Страница конкретной книги');
	}

	render() {
		const main = document.createElement('div');
		main.innerHTML = `
			<h1>Страница конкретной книги</h1>
		`
		this.app.append(main);
		this.renderHeader();
	}

	renderHeader() {
		const header = new Header(this.appState).render();
		this.app.prepend(header);
	}
}