import { MainView } from "./views/main/main";

class App {
  routes = [
    {path: "", view: MainView}
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

// const a = [1];

// console.dir(a);

// const User = function(email, password) {
//   this.email = email;
//   this.password = password;
// }

// const user1 = new User('a@a.ru', '123');

// console.log(user1);
// console.log(user1 instanceof User);

// const Book = function(title, author) {
//   this.title = title;
//   this.author = author;
//   this.isRead = false;
// }

// Book.prototype.read = function() {
//   this.isRead = true;
// }

// const lordOfTheRing = new Book('Lord of the Ring', 'Tolkien');
// console.log(lordOfTheRing);
// console.log(lordOfTheRing.__proto__);
// console.log(lordOfTheRing instanceof Book);
// console.log(Object.prototype.isPrototypeOf.call(Book.prototype, lordOfTheRing));
// console.log(Object.prototype.hasOwnProperty.call(lordOfTheRing, 'author'));

// const myDate = new Date();

// console.log(myDate);
// console.log(myDate.getDate());
// console.log(myDate.getUTCDate());

// console.log(myDate instanceof Date);

// const product = { id: 1, name: 'Bread', count: 1 };

// const Cart = function() {
//   console.log(this);
//   this.products = [];
// }

// Cart.prototype.addProduct = function(product) {
//   console.log(this);
//   if (this.products.find(product => product.id === product.id)) {
//     return;
//   }
//   this.products.push(product);
// }

// const cart = new Cart();
// cart.addProduct(product);
// console.log(cart, this);