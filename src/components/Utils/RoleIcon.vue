<script setup>
import {UserIcon} from '@heroicons/vue/24/solid'

const props = defineProps({
  isEmployer: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="tc-relative tc-m-auto tc-text-black">
    <UserIcon
      class="tc-size-6 tc-text-black"
      aria-hidden="true"
    />
    <div
      v-if="isEmployer"
      class="tc-absolute tc-top-0 tc-left-5 tc-h-full "
    >
      <span class="tc-font-bold">e</span>
    </div>
  </div>
</template>
