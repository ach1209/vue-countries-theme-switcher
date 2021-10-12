import Home from './components/view/Home.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/country/:id',
    component: () => import(/* webpackChunkName: "card-profile" */ './components/view/CardProfile.vue'),
    name: 'country',
    params: true
  }
];

export default routes;