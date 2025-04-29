<script setup lang="ts">
import axios from 'axios';
import { reactive, ref } from 'vue';

let cats:any = ref([]);


axios.get('http://localhost:8000/api/lucky/min')
  .then(function (response) {
    // handle success
    console.log(response.data)
    console.log(response);
//    for(const cat in response.data ){
//      cats.value.push(response.data[cat])
//    }
    cats.value = response.data.cats
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

function addCat() {
  cats.value.push('FUCK YOU')
//  cats.push('FUCK YOU')
//    {
//   name:'Hello world'
//  }
//  )
}

</script>
<template>
    <button @click="addCat" type="button">Click Me!</button>
    hello-world
    <div v-for="(cat, index) in cats" :key="index">
      {{ cat }}
    </div>

</template>
