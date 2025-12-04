<script setup>
import {computed} from 'vue';

const order = computed(() => {
  const {total = 0} = props.pagination || {};
  const order = idxGroup.value + props.idx;
  return props.reverse ? total - order + 1 : order;
});

const idxGroup = computed(() => {
  const {current_page: currentPage = 1, per_page: perPage = 1} = props.pagination || {};
  return (currentPage - 1) * perPage + 1;
});

const props = defineProps({
  idx: {
    type: Number,
    required: true
  },
  pagination: {
    type: Object,
    required: true
  },
  reverse: {
    type: Boolean,
    default: false,
  },
  dataTest: {
    type: String,
    required: true
  }
});
</script>


<template>
  <span
    class="text-base"
    :data-test="'batch-item-' + idx"
  >{{ order }}</span>
</template>