// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core';
import '@fortawesome/fontawesome-free/css/all.css'
import "bootswatch/dist/darkly/bootstrap.min.css";


import Model from './model.js';
import View from './view.js';

document.addEventListener('DOMContentLoaded', () => {
  const model = new Model();
  const view = new View();

  model.setView(view);
  view.setModel(model);

  view.render();
});