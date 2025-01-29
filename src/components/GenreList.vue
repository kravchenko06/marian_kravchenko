<template>
  <v-list>
    <v-list-item
      v-for="genre in genres"
      :key="genre.id"
      :title="genre.name"
      :subtitle="genre.movieCount + ' movies'"
      @click="$emit('select', genre.id)"
    ></v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'GenreList',
  props: {
    genres: {
      type: Array,
      required: true
    }
  }
}
</script>