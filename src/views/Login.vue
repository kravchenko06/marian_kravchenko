<template>
  <div class="d-flex justify-center align-center" style="min-height: 80vh;">
    <v-card width="400" class="pa-4">
      <v-card-title class="text-center">Login</v-card-title>
      <v-form @submit.prevent="handleLogin">
        <v-text-field
          v-model="email"
          label="Email"
          type="email"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          required
        ></v-text-field>
        <v-btn
          type="submit"
          color="primary"
          block
          class="mt-4"
        >
          Login
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { useMovieStore } from '../store';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      const store = useMovieStore();
      // Implement login logic
      store.setUser({ email: this.email });
      this.$router.push('/');
    }
  }
}
</script>