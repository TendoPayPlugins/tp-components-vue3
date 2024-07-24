<script setup>
import {computed, ref, watch} from "vue";
import {ExclamationCircleIcon} from '@heroicons/vue/24/outline'

const endpoint = ref('');
const protocol = ref('https');

const initialUrl = defineModel({type: String, required: false, default: null});

const types = [
  'https',
  'http'
]

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: "example.com",
  },
  v: {
    type: Object,
    default: () => null,
  },
  dataTest: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  showError: {
    type: Boolean,
    default: true,
  }
});

const fullUrl = computed(() => {
  return `${protocol.value}://${endpoint.value}`;
});

const setProtocolFromUrl = () => {
  if (initialUrl?.value) {
    protocol.value = (initialUrl.value).startsWith('https') ? 'https' : 'http';
    endpoint.value = (initialUrl.value).replace(/^https?:\/\//, '');
  }
};

setProtocolFromUrl();

watch(initialUrl, () => {
  setProtocolFromUrl();
});

watch([protocol, endpoint], () => {
  if ((endpoint.value).length === 0) {
    // noinspection JSCheckFunctionSignatures
    emit('update:modelValue', null);
    return
  }
  // noinspection JSCheckFunctionSignatures
  emit('update:modelValue', fullUrl.value);
});


</script>

<template>
  <div class="tc-relative">
    <label
      v-if="label"
      :data-test="dataTest + '-label'"
      :for="dataTest"
      class="tc-block tc-text-sm tc-font-medium tc-leading-6 tc-text-gray-900 tc-mb-2"
    >{{ label }} <span
      v-if="v?.required"
      class="tc-text-red-500"
    >*</span></label>
    <div class="tc-relative tc-rounded-md tc-shadow-sm">
      <div class="tc-absolute tc-inset-y-0 tc-left-0 tc-flex tc-items-center">
        <select
          v-model="protocol"
          :disabled="disabled"
          name="type"
          autocomplete="type"
          :data-test="dataTest + '-select-type'"
          class="tc-h-full tc-rounded-md tc-border-0 tc-bg-transparent tc-pl-3 tc-pr-12 tc-text-gray-500 focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple sm:tc-text-sm"
        >
          <option
            v-for="(type, index) in types"
            :key="index"
            :data-test="dataTest + '-option-' + index"
          >
            {{ type }}
          </option>
        </select>
      </div>
      <input
        :id="dataTest"
        v-model="endpoint"
        :disabled="disabled"
        type="text"
        name="url"
        class="input-offset tc-block tc-w-full tc-rounded-md tc-border-0 tc-py-1.5 tc-text-gray-900 tc-ring-1 tc-ring-inset tc-ring-gray-300 placeholder:tc-text-gray-400 sm:tc-text-sm sm:tc-leading-6"
        :class="{
          'tc-text-red-900 tc-ring-red-300 placeholder:tc-text-red-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500':
            v?.$invalid,
          'tc-text-gray-900 tc-shadow-sm placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple':
            !v?.$invalid,
          'disabled': disabled
        }"
        :placeholder="placeholder"
        :data-test="dataTest + '-input'"
      >
    </div>

    <div
      v-if="v?.$invalid"
      :class="`tc-absolute tc-right-2 ${ label ? 'tc-top-9' : 'tc-top-2'}`"
    >
      <ExclamationCircleIcon class="tc-size-5 tc-text-red-500" />
    </div>

    <span
      v-if="showError && v?.$invalid"
      class="block tc-mb-2"
    >
      <p
        v-for="(error, index) in v?.$silentErrors"
        :key="index"
        class="tc-mt-2 tc-text-xs tc-text-red-600 dark:tc-text-red-400"
      >
        <span
          :data-test="dataTest + '-url-error' + error.$uid"
          class="tc-font-medium"
        >{{ error.$message }}</span>
      </p>
    </span>
  </div>
</template>

<style scoped>
.input-offset {
    padding-left: 90px;
}
</style>
