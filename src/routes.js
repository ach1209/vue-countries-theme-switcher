import CardDeck from './components/card/CardDeck.vue';
import CardProfile from './components/card/view/CardProfile.vue';

const routes = [
  {
    path: '/',
    component: CardDeck,
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