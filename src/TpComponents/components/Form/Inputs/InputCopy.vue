
<script setup>
import { DocumentDuplicateIcon, EyeIcon } from '@heroicons/vue/24/solid'
import {reactive} from "vue";

const emit = defineEmits(['copy'])

const state = reactive({
  secretHidden: true,
});

const props = defineProps({
  value: {
    type: String,
    default: '',
  },
  hidden: {
    type: Boolean,
    default: false,
  },
  dataTest: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: null,
    required: false,
  },
});
function copy() {
  navigator.clipboard.writeText(props.value);
  emit('copy')
}

function toggleSecret() {
  state.secretHidden = !state.secretHidden
}
</script>

<template>
  <div>
    <label
      v-if="label"
      for="text"
      class="block text-sm font-medium leading-6 text-gray-900"
      >{{ label }}</label
    >
    <div class="mt-2 flex rounded-md shadow-sm">
      <div class="relative flex flex-grow items-stretch focus-within:z-10">
        <input
          :value="value"
          readonly
          :type="(hidden && state.secretHidden) ? 'password': 'text'"
          name="text"
          id="copy"
          class="block w-full focus:ring-tp-primary rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
        />
      </div>
      <button
        @click="copy"
        type="button"
        :class="{ 'rounded-r-md': !hidden }"
        class="relative -ml-px inline-flex items-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <DocumentDuplicateIcon
          class="-ml-0.5 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </button>
      <button
          v-if="hidden"
          @click="toggleSecret"
          type="button"
          class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <EyeIcon
            class="-ml-0.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
        />
      </button>
    </div>
  </div>
</template>
