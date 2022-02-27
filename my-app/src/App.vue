<script setup lang="ts">
import { reactive } from 'vue';
import CustomCounter from './components/CustomCounter.vue';

// Note: this interface is for make our code more readable
interface AppInfo {
  name: string;
  slogan: string;
}

const appInfo: AppInfo = reactive({
  name: 'Counter',
  slogan: 'an app you can count on',
});
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <h1>{{ appInfo.name }}</h1>
    <h2>{{ appInfo.slogan }}</h2>
  </div>
  <custom-counter :limit="10" />
</template>
