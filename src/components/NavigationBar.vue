<template>
  <v-app-bar>
    <v-app-bar-title>Movie Website</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn to="/" text>Home</v-btn>
    <v-btn to="/movies" text>Movies</v-btn>
    <v-btn to="/genres" text>Genres</v-btn>
    <v-btn to="/people" text>People</v-btn>
    <v-btn v-if="!isAuthenticated" to="/login" text>Login</v-btn>
    <v-btn v-if="!isAuthenticated" to="/register" text>Register</v-btn>
    <v-btn v-else @click="logout" text>Logout</v-btn>
  </v-app-bar>
</template>

<script>
import { useMovieStore } from '../store';

export default {
  name: 'NavigationBar',
  computed: {
    isAuthenticated() {
      const store = useMovieStore();
      return store.isAuthenticated;
    }
  },
  methods: {
    logout() {
      const store = useMovieStore();
      store.setUser(null);
    }
  }
}
</script>