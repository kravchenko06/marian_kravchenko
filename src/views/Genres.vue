<template>
  <div>
    <h2 class="text-h4 mb-6">Movie Genres</h2>
    <v-row>
      <v-col cols="12" md="3">
        <genre-list :genres="genres" @select="handleGenreSelect" />
      </v-col>
      <v-col cols="12" md="9">
        <v-row v-if="selectedGenreMovies.length">
          <v-col v-for="movie in selectedGenreMovies" :key="movie.id" cols="12" sm="6" md="4">
            <movie-card :movie="movie" />
          </v-col>
        </v-row>
        <v-alert v-else type="info">Select a genre to see movies</v-alert>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import GenreList from '../components/GenreList.vue';
import MovieCard from '../components/MovieCard.vue';
import { useMovieStore } from '../store';

export default {
  name: 'Genres',
  components: {
    GenreList,
    MovieCard
  },
  data() {
    return {
      genres: [],
      selectedGenreMovies: []
    }
  },
  created() {
    const store = useMovieStore();
    this.genres = store.genres;
  },
  methods: {
    handleGenreSelect(genreId) {
      const store = useMovieStore();
      this.selectedGenreMovies = store.getMoviesByGenre(genreId);
    }
  }
}
</script>