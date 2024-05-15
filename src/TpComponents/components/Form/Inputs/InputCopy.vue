
<script setup>
import { DocumentDuplicateIcon, EyeIcon } from '@heroicons/vue/24/solid'
import { computed, reactive} from "vue";
import Alert from "~/components/Utils/Alert.vue";

const emit = defineEmits(['copy'])

const state = reactive({
  secretHidden: true,
  copied: false,
  timeoutObj: null,
});

const showResult = computed(() => {
  if (!!state.copied) {
    const timeout = 800;
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
  <div>
    <label
      v-if="label"
      :for="dataTest"
      class="block text-sm font-medium leading-6 text-gray-900"
      >{{ label }}</label
    >
    <div class="mt-2 flex rounded-md shadow-sm">
      <div class="relative flex flex-grow items-stretch focus-within:z-10">
        <input
          :value="value"
          readonly
          :type="(hide && state.secretHidden) ? 'password': 'text'"
          name="text"
          :id="dataTest"
          :data-test="dataTest + '-input'"
          class="block w-full focus:ring-tp-primary rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
        />
      </div>
      <button
        @click="copy"
        type="button"
        :data-test="dataTest + '-copy-button'"
        :class="{ 'rounded-r-md': !hide }"
        class="relative -ml-px inline-flex items-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <DocumentDuplicateIcon
          class="-ml-0.5 size-5 text-gray-400"
          aria-hidden="true"
        />
      </button>
      <button
          v-if="hide"
          @click="toggleSecret"
          type="button"
          :data-test="dataTest + '-toggle-button'"
          class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <EyeIcon
            class="-ml-0.5 size-5 text-gray-400"
            aria-hidden="true"
        />
      </button>
    </div>
  </div>
  <Alert class="mt-2 mb-2" v-if="showResult" :message="props.resultMessage" type="success"/>
</template>
