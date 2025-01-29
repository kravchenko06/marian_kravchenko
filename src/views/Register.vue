<template>
  <div class="d-flex justify-center align-center" style="min-height: 80vh;">
    <v-card width="400" class="pa-4">
      <v-card-title class="text-center">Register</v-card-title>
      <v-form @submit.prevent="handleRegister">
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
        <v-text-field
          v-model="confirmPassword"
          label="Confirm Password"
          type="password"
          required
        ></v-text-field>
        <v-btn
          type="submit"
          color="primary"
          block
          class="mt-4"
        >
          Register
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { useMovieStore } from '../store';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    handleRegister() {
      if (this.password !== this.confirmPassword) {
        return;
      }
      const store = useMovieStore();
      // Implement registration logic
      store.setUser({ email: this.email });
      this.$router.push('/');
    }
  }
}
</script>