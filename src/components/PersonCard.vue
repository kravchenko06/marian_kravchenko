<template>
  <v-card class="mx-auto" max-width="300">
    <v-img :src="person.photo" height="300px" cover></v-img>
    <v-card-title>{{ person.name }}</v-card-title>
    <v-card-subtitle>{{ person.role }}</v-card-subtitle>
    <v-card-text>
      <div>Known for: {{ person.knownFor }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'PersonCard',
  props: {
    person: {
      type: Object,
      required: true
    }
  }
}
</script>