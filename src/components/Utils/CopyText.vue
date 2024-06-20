<template>
  <span class="copy-container">
    <a
      class="clickable"
      href="#"
      @click.prevent="doCopy"
    >
      <slot>
        <DocumentDuplicateIcon
          class="-ml-0.5 size-5 text-gray-400"
          aria-hidden="true"
        /></slot>
    </a>

    <Alert
      v-if="showResult"
      :message="resultMessage"
    />
  </span>
</template>

<script setup>
/* eslint-disable vue/require-valid-default-prop */
/* eslint-disable vue/no-async-in-computed-properties */

// @todo - Refactor with enabled rules
// @todo - refactor with https://vueuse.org/core/useClipboard/

import {computed, onBeforeUnmount, ref} from 'vue';
import {DocumentDuplicateIcon} from '@heroicons/vue/24/solid';
import Alert from "./AlertDialog.vue";
const props = defineProps({
  value: {
    type: [String, Number],
    required: true,
  },
  timeout: {
    type: String,
    required: false,
    default: 800,
  },
  successMessage: {
    type: String,
    required: false,
    default: 'Copied'
  },
});

const copied = ref(false);
let timeoutObj = null;

const showResult = computed(() => {
  if (copied.value) {
    const timeout = Number(props.timeout);
    timeoutObj = setTimeout(() => (copied.value = false), timeout);
  }
  return copied.value;
});

const resultMessage = computed(() => props.successMessage);

const doCopy = () => {
  const el = document.createElement("textarea");
  el.value = props.value;
  el.setAttribute("readonly", "readonly");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  copied.value = document.execCommand("copy");
  document.body.removeChild(el);
};

onBeforeUnmount(() => {
  if (props.timeout) {
    clearTimeout(timeoutObj);
  }
});
</script>

<style scoped>
.copy-container {
    margin-left: 0.25rem;
}
</style>
