<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

const lol = ref<string[]>([])

axios.get('http://localhost:8000/api/lucky/enjoyment')
  .then((response) => {
    lol.value = response.data.lol
  })
  .catch((error) => {
    console.error(error)
  })

function addLol() {
  lol.value.push('BG3')
}
</script>

<template>
  <button @click="addLol" type="button">Click Me!</button>
  hello-world
  <div v-for="(item, index) in lol" :key="index">
    {{ item }}
  </div>
</template>
