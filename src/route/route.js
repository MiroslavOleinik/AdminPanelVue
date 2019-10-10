import HelloWorld from '../components/Home.vue';
import Info from '../components/Info.vue';
import AddUser from '../components/AddUser.vue';
import User from '../components/User.vue';

const routes = [{
  path: '/',
  component: HelloWorld,
}, {
  path: '/info',
  component: Info,
}, {
  path: '/add-user',
  component: AddUser,
}, {
  path: '/user/:id',
  component: User,
},
];

export default routes;
