import CardDeck from './components/card/CardDeck.vue';
import CardProfile from './components/card/CardProfile.vue';

const routes = [
  {
    path: '/',
    component: CardDeck,
    name: 'home'
  },
  {
    path: '/card-profile',
    component: CardProfile,
    name: 'card-profile'
  }
];

export default routes;