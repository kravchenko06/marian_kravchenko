import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Movies from '../views/Movies.vue';
import Genres from '../views/Genres.vue';
import People from '../views/People.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/genres',
    name: 'Genres',
    component: Genres
  },
  {
    path: '/people',
    name: 'People',
    component: People
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;