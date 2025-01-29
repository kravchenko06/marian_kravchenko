<template>
  <v-app>
    <navigation-bar />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import { useMovieStore } from './store';

export default {
  name: 'App',
  components: {
    NavigationBar
  },
  created() {
    const store = useMovieStore();
    store.initializeStore();
  }
}
</script>