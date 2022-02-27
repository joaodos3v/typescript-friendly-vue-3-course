<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import fetchCount from './fetchCount';

// Note: this interface is for make our code more readable
interface AppInfo {
  name: string;
  slogan: string;
}

// Note: w/ fetchCount example, we saw wront Type Inference (and force manually the correct way)
const count = ref<number | null>(null);

const appInfo: AppInfo = reactive({
  name: 'Counter',
  slogan: 'an app you can count on',
});

onMounted(() => {
  fetchCount((initialCount) => {
    count.value = initialCount;
  });
});

function add() {
  if (count.value !== null) {
    count.value += 1;
  }
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
