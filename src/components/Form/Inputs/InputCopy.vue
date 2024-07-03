<script setup>
/* eslint-disable vue/no-async-in-computed-properties */
/* eslint-disable vue/no-side-effects-in-computed-properties */
import {DocumentDuplicateIcon, EyeIcon} from '@heroicons/vue/24/outline'

import {computed, reactive} from "vue";
import Alert from "../../Utils/AlertDialog.vue";

const emit = defineEmits(['copy'])

const state = reactive({
  secretHidden: true,
  copied: false,
  timeoutObj: null,
});

const showResult = computed(() => {
  if (!!state.copied) {
    const timeout = 800;
    // noinspection JSValidateTypes
    state.timeoutObj = setTimeout(() => (state.copied = false), timeout);
  }
  return !!state.copied;
})

const props = defineProps({
  value: {
    type: String,
    default: '',
  },
  hide: {
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
  resultMessage: {
    type: String,
    default: 'Copied'
  }
});

function copy() {
  navigator.clipboard.writeText(props.value);
  emit('copy')
  state.copied = true
}

function toggleSecret() {
  state.secretHidden = !state.secretHidden
}
</script>

<template>
  <div class="tc-relative">
    <label
      v-if="label"
      :for="dataTest"
      class="tc-block tc-text-sm tc-font-medium tc-leading-6 tc-text-gray-900"
    >{{ label }}</label>
    <div class="tc-flex tc-rounded-md tc-shadow-sm tc-py-2">
      <div class="tc-relative tc-flex tc-flex-grow tc-items-stretch focus-within:tc-z-10">
        <input
          :id="dataTest"
          :data-test="dataTest + '-input'"
          :type="(hide && state.secretHidden) ? 'password': 'text'"
          :value="value"
          class="tc-block tc-w-full focus:tc-ring-tonik-purple tc-rounded-none tc-rounded-l-md tc-border-0 tc-text-gray-900 tc-ring-1 tc-ring-inset tc-ring-gray-300 placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset sm:tc-text-sm sm:tc-leading-6"
          name="text"
          readonly
        >
      </div>
      <button
        :class="{ 'tc-rounded-r-md': !hide }"
        :data-test="dataTest + '-copy-button'"
        class="tc-relative -tc-ml-px tc-inline-flex tc-items-center tc-gap-x-1.5 tc-px-3 tc-py-2 tc-text-sm tc-font-semibold tc-text-gray-900 tc-ring-1 tc-ring-inset tc-ring-tp-primary hover:tc-bg-gray-50"
        type="button"
        @click="copy"
      >
        <DocumentDuplicateIcon
          class="-tc-ml-0.5 tc-size-5 tc-text-tp-primary"
          aria-hidden="true"
        />
      </button>
      <button
        v-if="hide"
        :data-test="dataTest + '-toggle-button'"
        class="tc-relative -tc-ml-px tc-inline-flex tc-items-center tc-gap-x-1.5 tc-rounded-r-md tc-px-3 tc-py-2 tc-text-sm tc-font-semibold tc-text-gray-900 tc-ring-1 tc-ring-inset tc-ring-tp-primary hover:tc-bg-gray-50"
        type="button"
        @click="toggleSecret"
      >
        <EyeIcon
          class="-tc-ml-0.5 tc-size-5 tc-text-tp-primary"
          aria-hidden="true"
        />
      </button>
    </div>
  </div>
  <Alert
    v-if="showResult"
    :message="props.resultMessage"
    class="tc-mt-2 tc-mb-2"
    type="success"
  />
</template>
