import things from './things.js';

class EPH {
  constructor() {
  }

  elementWithHTML(tagName, html) {
    const el = document.createElement(tagName);
    el.innerHTML = html;
    return el;
  }

  h1(html) {
    return this.elementWithHTML('h1', html);
  }

  h2(html) {
    return this.elementWithHTML('h2', html);
  }

  render() {
    document.body.appendChild(this.h1('Eric P. Hutchins'));
    document.body.appendChild(this.h2('Things'));
    things.forEach(thing => {
      const div = document.createElement('div');
      div.classList.add('thing');
      div.innerHTML = `<a href="${thing.link}">${thing.name}</a>`;
      document.body.appendChild(div);
    });
  }
}

new EPH().render();
