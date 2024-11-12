import { createRouter, createWebHistory } from 'vue-router';


import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamFooter from './pages/TeamFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      // component: TeamsList,
      components: {
        default: TeamsList,
        footer: TeamFooter,
      },
      // alias: '/', // the url doesn't change when using this instead of redirect
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        }, // /teams/t1 ---> Nested routes
      ],
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      },
    },
    // {
    //     path: '/teams/:teamId',
    //     component: TeamMembers,
    //     props: true,
    // },
    {
      path: '/:notFound(.*)', // catch all, when no route is found or the route is not valid or doesn't exist
      component: NotFound,
    },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  // if (to.name === 'team-members') {
  //     next();
  // } else {
  //     next({name: 'team-members', params: {teamId: 't2'}});
  // }
  if (to.meta.needsAuth) {
    console.log('Needs auth!');
    next();
  } else {
    next();
  }
  // next();
});

router.afterEach(function (to, from) {
  // runs after the navigation is done
  console.log('Global afterEach'); // sending analytics data
  console.log(to, from);
});

export default router;
