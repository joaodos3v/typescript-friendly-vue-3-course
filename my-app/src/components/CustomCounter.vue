<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import fetchCount from '../services/fetchCount';
import ControlBar from './ControlBar.vue';

interface Props {
  limit: number;
  alertMessageOnLimit?: string;
}

const props = withDefaults(defineProps<Props>(), {
  alertMessageOnLimit: 'can not go any higher',
});

/**
 * Note: props can be received like Vue 2 too insteaf of Pure Typescript Annotation:
 *
 * const props = defineProps({
 *  limit: { type: Number, required: true },
 *  alertMessageOnLimit: { type: String, required: true },
 * })
 */

// Note: w/ fetchCount example, we saw wront Type Inference (and force manually the correct way)
const count = ref<number | null>(null);

// Note: for demonstration, this computed value return a value
const nextCount = computed(() => {
  if (count.value !== null) {
    return count.value + 1;
  }
  return null;
});

onMounted(() => {
  fetchCount((initialCount) => {
    count.value = initialCount;
  });
});

function addCount(num: number) {
  if (count.value !== null) {
    if (count.value >= props.limit) {
      alert(props.alertMessageOnLimit);
    } else {
      count.value += num;
    }
  }
}

function resetCount() {
  count.value = 0;
}
</script>

<template>
  <p>{{ count }}</p>
  <control-bar @add-count="addCount($event)" @reset-count="resetCount" />
</template>
