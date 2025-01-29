<template>
  <div>
    <h2 class="text-h4 mb-6">People</h2>
    <v-row>
      <v-col cols="12" md="8">
        <search-bar @search="handleSearch" />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="person in people" :key="person.id" cols="12" sm="6" md="4">
        <person-card :person="person" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue';
import PersonCard from '../components/PersonCard.vue';
import { useMovieStore } from '../store';

export default {
  name: 'People',
  components: {
    SearchBar,
    PersonCard
  },
  data() {
    return {
      people: []
    }
  },
  created() {
    const store = useMovieStore();
    this.people = store.people;
  },
  methods: {
    handleSearch(query) {
      // Implement search logic
    }
  }
}
</script>