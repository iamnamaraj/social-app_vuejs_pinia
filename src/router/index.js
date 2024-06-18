import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Home from '../views/front/Home.vue'
import Timeline from '../views/front/Timeline.vue'
import Settings from '../components/Settings.vue'
import { useAuthStore } from '../stores/authStore'

const requireAuth = (to, from, next) => {
  const user = useAuthStore();
  if (!user.isLoggedIn) {
    next({ name: 'Login' });
  } else {
    next();
  }
};

const requireNoAuth = (to, from, next) => {
  const user = useAuthStore();
  if (user.isLoggedIn) {
    next({ name: 'Timeline'});
  } else {
    next();
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'HomeView',
    //   component: HomeView
    // },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: requireNoAuth
    },
    // {
    //   path: '/timeline',
    //   name: 'Timeline',
    //   component: Timeline,
    //   beforeEnter: requireAuth

    // },
    {
      path: '/',
      beforeEnter: requireAuth,
      component: Home,
      children: [
        {
          path: '/timeline',
          name:'Timeline',
          component: Timeline
        },
        {
          path: '/settings',
          name:'Settings',
          component: Settings
        }
      ],

    },

  ]
})

export default router
