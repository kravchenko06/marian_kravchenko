<template>
  <div>
    <h1 class="text-h3 mb-6">Welcome to Movie Website</h1>
    <v-row>
      <v-col cols="12" md="8">
        <search-bar @search="handleSearch" />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="movie in featuredMovies" :key="movie.id" cols="12" sm="6" md="4">
        <movie-card :movie="movie" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue';
import MovieCard from '../components/MovieCard.vue';
import { useMovieStore } from '../store';

export default {
  name: 'Home',
  components: {
    SearchBar,
    MovieCard
  },
  data() {
    return {
      featuredMovies: []
    }
  },
  created() {
    const store = useMovieStore();
    this.featuredMovies = store.movies.slice(0, 6);
  },
  methods: {
    handleSearch(query) {
      // Implement search logic
    }
  }
}
</script>