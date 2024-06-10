<script setup>
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/vue/24/solid";

const props = defineProps({
  sort: {
    type: String,
    required: true,
  },
  dir: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['sort'])
const updateSort = () => {
  emit('sort', {sort: props.sort, dir: props.dir === 'asc' ? 'desc' : 'asc'})
}
</script>
<template>
  <span
    class="cursor-pointer group inline-flex"
    @click="updateSort()"
  >
    <slot />
    <span class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
      <ChevronUpIcon
        v-if="props.dir === 'asc'"
        aria-hidden="true"
        class="h-5 w-5"
      />
      <ChevronDownIcon
        v-if="props.dir === 'desc'"
        aria-hidden="true"
        class="h-5 w-5"
      />
    </span>
  </span>
</template>