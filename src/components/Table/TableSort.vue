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
  active: {
    type: Boolean,
    default: false,
    required: false,
  }
})

const emit = defineEmits(['sort'])
const updateSort = () => {
  emit('sort', {sort: props.sort, dir: props.dir === 'asc' ? 'desc' : 'asc'})
}
</script>
<template>
  <span
    class="tc-cursor-pointer tc-group tc-inline-flex"
    @click="updateSort()"
  >
    <slot />
    <span
        class="tc-ml-2 tc-flex-none tc-rounded group-hover:tc-bg-gray-200"
        :class="{ 'tc-bg-tonik-purple tc-text-white': props.active, 'tc-bg-gray-100 tc-text-gray-900': !props.active }
    ">
      <ChevronUpIcon
        v-if="props.dir === 'asc'"
        aria-hidden="true"
        class="tc-h-5 tc-w-5"
      />
      <ChevronDownIcon
        v-if="props.dir === 'desc'"
        aria-hidden="true"
        class="tc-h-5 tc-w-5"
      />
    </span>
  </span>
</template>