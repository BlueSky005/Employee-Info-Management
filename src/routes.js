import Login from './components/Login';
import Inventory from './components/Inventory';
import Search from './components/Search';
import About from './components/About';

export const routes = [
  { path: '/', component: Login},
  { path: '/inventory', component: Inventory},
  { path: '/search', component: Search},
  { path: '/about', component: About},
];
