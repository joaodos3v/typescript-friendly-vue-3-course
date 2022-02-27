<script setup lang="ts">
interface Emits {
  (event: 'add-count', num: number): void;
  (event: 'reset-count'): void;
}

const emit = defineEmits<Emits>();
</script>

<template>
  <button @click="emit('add-count', 1)">Add</button>
  <button @click="emit('reset-count')">Reset</button>
</template>
