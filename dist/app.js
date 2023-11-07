(function () {
  'use strict';

  class AbstractView {

    constructor() {
      this.app = document.getElementById('root');
    }

    setTitle(title) {
      document.title = title;
    }

    render() {
      return;
    }

    destroy() {
      return;
    }
  }

  class MainView extends AbstractView {
    constructor() {
      super();
      this.setTitle = 'Поиск книг';
    }

    render() {
      const main = document.createElement('div');
      main.innerHTML = 'Тест';
      this.app.innerHTML = '';
      this.app.append(main);
    }
  }

  class App {
    routes = [
      {path: "", view: MainView}
    ];

    constructor() {
      console.log(this);
      window.addEventListener('hashchange', this.route.bind(this));
      this.route();
    }

    route() {
      if (this.currentView) {
        this.currentView.destroy();
      }
      const view = this.routes.find(route => route.path == location.hash).view;
      this.currentView = new view();
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

  const product = { id: 1, name: 'Bread', count: 1 };

  const Cart = function() {
    console.log(this);
    this.products = [];
  };

  Cart.prototype.addProduct = function(product) {
    console.log(this);
    if (this.products.find(product => product.id === product.id)) {
      return;
    }
    this.products.push(product);
  };

  const cart = new Cart();
  cart.addProduct(product);
  console.log(cart, undefined);

})();
