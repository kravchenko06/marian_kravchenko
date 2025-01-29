<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="movie.image" height="200px" cover></v-img>
    <v-card-title>{{ movie.title }}</v-card-title>
    <v-card-subtitle>
      <v-rating
        :model-value="movie.rating"
        color="amber"
        density="compact"
        half-increments
        readonly
        size="small"
      ></v-rating>
      <div class="mt-1">${{ movie.price }}</div>
    </v-card-subtitle>
    <v-card-text>
      <div>{{ movie.description }}</div>
      <div class="mt-2">
        <strong>Director:</strong> {{ movie.director }}
      </div>
      <div class="mt-1">
        <strong>Genres:</strong> {{ movie.genres.join(', ') }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" variant="text">Learn More</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>