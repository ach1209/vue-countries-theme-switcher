import Home from './components/layout/Home.vue';
import CardProfile from './components/view/CardProfile.vue';

const routes = [
  {
    path: '/vue-countries-theme-switcher',
    component: Home,
    name: 'home'
  },
  {
    path: '/country/:id',
    component: CardProfile,
    name: 'country',
    params: true
  }
];

export default routes;