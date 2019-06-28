import menu from './menu.json';
import menuMaker from './templates/menu-maker.hbs';
import './theme-button.js';

import './styles.css';

const menuList = document.querySelector('.menu');
buildMenuList(menu);

function buildMenuList(listOfMenu) {
  const markup = listOfMenu.map(menuItem => menuMaker(menuItem)).join('');
  menuList.insertAdjacentHTML('beforeend', markup);
}
