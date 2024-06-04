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
  <div class="relative">
    <label
      v-if="label"
      :data-test="dataTest + '-label'"
      :for="dataTest"
      class="block text-sm font-medium leading-6 text-gray-900"
    >{{ label }}</label>
    <div class="relative rounded-md shadow-sm">
      <div class="absolute inset-y-0 left-0 flex items-center">
        <select
          v-model="protocol"
          :disabled="disabled"
          name="type"
          autocomplete="type"
          :data-test="dataTest + '-select-type'"
          class="h-full rounded-md border-0 bg-transparent pl-3 pr-12 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-tp-primary sm:text-sm"
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
        class="input-offset block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        :class="{
          'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500':
            v?.$invalid,
          'text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tp-primary':
            !v?.$invalid,
        }"
        :placeholder="placeholder"
        :data-test="dataTest + '-input'"
      >
    </div>

    <div
      v-if="v?.$invalid"
      class="absolute right-1.5 top-1.5"
    >
      <ExclamationCircleIcon class="size-5 text-red-500" />
    </div>

    <span v-if="showError && v?.$invalid">
      <p
        v-for="(error, index) in v?.$silentErrors"
        :key="index"
        class="mt-2 text-xs text-red-600 dark:text-red-400"
      >
        <span
          :data-test="dataTest + '-url-error' + error.$uid"
          class="font-medium"
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
