<template>
  <div>
    <v-btn @click="sendData">Verstuur data</v-btn>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

const sendData = async () => {
  try {
    const response = await axios.post('https://jouw-api-endpoint.com/api/endpoint', {
      name: 'John Doe',
      email: 'john@example.com',
    })

    console.log('Response:', response.data)
  } catch (error) {
    console.error('Fout bij versturen:', error)
  }
}
</script>
