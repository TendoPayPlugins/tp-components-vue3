<!-- Usage
<StatusIcon :status="status">
-->
<script setup>
import {CheckIcon, NoSymbolIcon} from '@heroicons/vue/24/solid'

const props = defineProps({
  status: {
    type: String,
    default: 'pending',
  },
});
</script>

<template>
  <div class="tc-m-auto tc-flex tc-flex-col tc-items-center">
    <template v-if="status === 'pending'">
      <div class="tc-size-6 tc-text-green-2 tc-fill-green-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        ><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM288 437v11H96V437c0-25.5 10.1-49.9 28.1-67.9L192 301.3l67.9 67.9c18 18 28.1 42.4 28.1 67.9z" /></svg>
      </div>
      <div class="tc-text-green-2">
        <span class="tc-text-sm tc-uppercase tc-font-semibold">{{ status }}</span>
      </div>
    </template>
    <template v-else-if="status === 'complete'">
      <CheckIcon
        class="tc-size-6 tc-text-tendo-blue"
        aria-hidden="true"
      />
      <div class="tc-text-tendo-blue">
        <span class="tc-text-sm tc-uppercase tc-font-semibold">{{ status }}</span>
      </div>
    </template>
    <template v-else-if="status === 'cancelled'">
      <NoSymbolIcon
        class="tc-size-6 tc-text-error"
        aria-hidden="true"
      />
      <div class="tc-text-error">
        <span class="tc-text-sm tc-uppercase tc-font-semibold">{{ status }}</span>
      </div>
    </template>
  </div>
</template>
