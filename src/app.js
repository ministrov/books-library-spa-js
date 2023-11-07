import { MainView } from "./views/main/main";


class App {
  routes = [
    {path: "", view: MainView}
  ];

  constructor() {
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