<script setup lang="ts">
import { reactive } from 'vue';
import Counter from './components/Counter.vue';

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
  <counter :limit="10" :alert-message-on-limit="'can not go any higher'" />
</template>
