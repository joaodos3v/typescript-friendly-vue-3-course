<script setup lang="ts">
import { reactive, ref } from 'vue';

// Because Type Inference, we didn't have to to set an explicit type on this variable
const count = ref(0);

const appInfo = reactive({
  name: 'Counter',
  slogan: 'an app you can count on',
});

function add() {
  count.value += 1;
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <h1>{{ appInfo.name }}</h1>
    <h2>{{ appInfo.slogan }}</h2>
  </div>
  <p>{{ count }}</p>
  <button @click="add">Add</button>
</template>
