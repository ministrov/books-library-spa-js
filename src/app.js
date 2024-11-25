import { BookView } from "./views/book/book.js";
import { FavoritesView } from "./views/favorites/favorites.js";
import { MainView } from "./views/main/main.js";
import { TestComponet } from "./common/test.js";

// Компонент App, по сути играет роль роутера, для прехода по страницам , отслеживая хэш в адресной строке

class App {
  routes = [
    { path: "", view: MainView },
    { path: "#favorites", view: FavoritesView },
    { path: "#book", view: BookView }
  ];

  appState = {
    favorites: []
  };

  constructor() {
    window.addEventListener('hashchange', this.route.bind(this));
    this.route();
  }

  route() {
    if (this.currentView) {
      this.currentView.destroy();
    }
    const view = this.routes.find(route => route.path == location.hash).view;
    this.currentView = new view(this.appState);
    this.currentView.render();
  }
}

new App();

console.log('click me');

const test = new TestComponet();
console.log(test.render());
console.log(new TestComponet().showTextMessage());

