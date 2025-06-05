import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['mi', 'tu', 'nuestra', 'su'];
  let adj     = ['super', 'mega', 'ultra', 'hiper'];
  let noun    = ['aventura', 'sabor', 'risa', 'mundo'];
  let domains = [];
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        domains.push(p + a + n + '.com');
      }
    }
  }

  for (let d of domains) {
    console.log(d);
  }

  let container = document.createElement('div');
  container.classList.add('container', 'mt-4');

  let title = document.createElement('h3');
  title.innerText = 'Lista de dominios generados:';
  container.appendChild(title);

  let list = document.createElement('ul');
  list.classList.add('list-group');

  for (let d of domains) {
    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = d;
    list.appendChild(li);
  }
  container.appendChild(list);
  document.body.appendChild(container);
};
