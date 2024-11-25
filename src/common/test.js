export class TestComponet {
  constructor() {
    this.el = document.createElement('p');
    this.el.textContent = 'Hello from test component';
  }

  static showTextMessage() {
    console.log('text message from text component');
  }

  render() {
    return this.el;
  }
}