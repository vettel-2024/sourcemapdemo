<template>
  <div class="home">
    <h1>Home Page</h1>
    <p>Welcome to the home page!</p>
    <button @click="increment">Increment Count</button>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useMainStore } from '../store';

export default {
  name: 'Home',
  computed: {
    ...mapState(useMainStore, ['count']),
  },
  methods: {
    ...mapActions(useMainStore, ['increment']),
  },
};
</script>