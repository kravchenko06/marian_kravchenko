<template>
  <v-text-field
    v-model="searchQuery"
    prepend-icon="mdi-magnify"
    label="Search"
    single-line
    hide-details
    @input="search" 
  ></v-text-field>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    search() {
      this.$emit('search', this.searchQuery);
    }
  }
};
</script>
