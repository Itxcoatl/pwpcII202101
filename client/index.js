/* eslint-disable no-alert */
import './stylesheets/style.css';
import './stylesheets/mystyles.css';

// eslint-disable-next-line no-console
console.log('webpack working');
// inicializando scrip de materialize
document.addEventListener('DOMContentLoaded', () => {
  const sideNav = document.querySelectorAll('.sidenav');
  // eslint-disable-next-line no-undef
  M.Sidenav.init(sideNav);
});
