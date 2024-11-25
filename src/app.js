/* eslint-disable no-empty */
import { BookView } from "./views/book/book";
import { FavoritesView } from "./views/favorites/favorites";
import { MainView } from "./views/main/main";

// Компонент App, по сути играет роль роутера, для прехода по страницам , отслеживая хэш в адресной строке

class App {
  routes = [
    {path: "", view: MainView},
    {path: "#favorites", view: FavoritesView},
    {path: "#book", view: BookView}
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

