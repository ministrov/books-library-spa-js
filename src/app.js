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

// const Car = function(brandName) {
//   this.brandName = brandName;
// }

// Car.prototype.isNew = true;

// const bmw = new Car('Bmw');

// console.log(bmw);
// console.log(Car.prototype.__proto__);
// console.log(bmw.isNew);

// class CarClass {
//   isDrive = false;

//   constructor(brandName) {
//     this.brandName = brandName;
//   }

//   drive() {
//     this.isDrive = true;
//   }
// }

// const lada = new CarClass('Lada');

// console.log(lada);
// console.log(lada.__proto__);


// const task = {
//   title: 'Task1',
//   dueTo: new Date('2024/01/01'),

//   get isOverDue() {
//     return this.dueTo < new Date();
//   },

//   set isOverDue(isOverDueTask) {
//     if (!isOverDueTask) {
//       this.dueTo = new Date();
//     }
//   }
// }

// console.log(task.isOverDue);
// task.isOverDue = false;


