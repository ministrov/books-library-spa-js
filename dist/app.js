(function () {
  'use strict';

  class App {
    routes = [
      {path: "", view: null}
    ];

    constructor() {
      window.addEventListener('hashchange', this.route.bind(this));
      this.route();
    }

    route() {

    }
  }

  new App();

  const a = [1];

  console.dir(a);

  const User = function(email, password) {
    this.email = email;
    this.password = password;
  };

  const user1 = new User('a@a.ru', '123');

  console.log(user1);
  console.log(user1 instanceof User);

  const Book = function(title, author) {
    this.title = title;
    this.author = author;
    this.isRead = false;
  };

  Book.prototype.read = function() {
    this.isRead = true;
  };

  const lordOfTheRing = new Book('Lord of the Ring', 'Tolkien');
  console.log(lordOfTheRing);
  console.log(lordOfTheRing.__proto__);

})();
