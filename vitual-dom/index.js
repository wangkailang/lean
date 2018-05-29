import el from './lib/element';

const ul = el('ul', { id: 'list' }, [
  el('li', { class: 'item' }, ['Item 1']),
  el('li', { class: 'item' }, ['Item 2']),
  el('li', { class: 'item' }, ['Item 3'])
])

var ulRoot = ul.render ();
window.document.body.appendChild(ulRoot);
