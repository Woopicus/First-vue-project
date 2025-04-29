<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';

const lol = ref<string[]>([]);

axios.get('http://127.0.0.1:8000/api/lucky/enjoyment')
  .then(response => {
    console.log(response.data);
    lol.value = response.data.lol || [];
  })
  .catch(error => {
    console.error('API error:', error);
  });

function addLol() {
  lol.value.push('BG3');
}
</script>

<template>
  <button @click="addLol" type="button">Click Me!</button>
  <p>hello-world</p>
  <div v-for="(item, index) in lol" :key="index">
    {{ item }}
  </div>
</template>
