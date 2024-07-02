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
      <CheckIcon
        class="tc-size-6 tc-text-green-2"
        aria-hidden="true"
      />
      <div class="tc-text-green-2">
        <span class="tc-text-xs tc-uppercase tc-font-semibold">{{status}}</span>
      </div>
    </template>
    <template v-else-if="status === 'complete'">
      <CheckIcon
        class="tc-size-6 tc-text-tendo-blue"
        aria-hidden="true"
      />
      <div class="tc-text-tendo-blue">
        <span class="tc-text-xs tc-uppercase tc-font-semibold">{{status}}</span>
      </div>
    </template>
    <template v-else-if="status === 'canceled'">
      <NoSymbolIcon
        class="tc-size-6 tc-text-error"
        aria-hidden="true"
      />
      <div class="tc-text-error">
        <span class="tc-text-xs tc-uppercase tc-font-semibold">{{status}}</span>
      </div>
    </template>
  </div>
</template>
