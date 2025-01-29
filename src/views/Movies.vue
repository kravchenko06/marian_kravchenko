<template>
  <div>
    <h2 class="text-h4 mb-6">Movies</h2>
    <v-row>
      <v-col cols="12" md="8">
        <search-bar @search="handleSearch" />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="movie in filteredMovies" :key="movie.id" cols="12" sm="6" md="4">
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
  name: 'Movies',
  components: {
    SearchBar,
    MovieCard
  },
  data() {
    return {
      searchQuery: '',
      store: useMovieStore() 
    };
  },
  computed: {
    filteredMovies() {
      if (!this.searchQuery) return this.store.movies;
      return this.store.movies.filter(movie =>
        movie.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    handleSearch(query) {
      this.searchQuery = query;
    }
  }
};
</script>
