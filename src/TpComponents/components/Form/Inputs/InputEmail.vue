<script setup>
import {watch} from "vue";
import {ExclamationCircleIcon} from '@heroicons/vue/24/solid'

const localValue = defineModel({type: String, required: false, default: null})

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  value: {
    type: String,
    default: null,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "you@example.com",
  },
  maxLength: {
    type: Number,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  showError: {
    type: Boolean,
    default: true,
  },
  v: {
    type: Object,
    default: () => null,
  },
  dataTest: {
    type: String,
    required: true,
  },
});


const emit = defineEmits(["update:modelValue"]);

const onInput = () => {
  emit("update:modelValue", localValue.value);
};

watch(localValue, onInput);
</script>

<template>
  <div>
    <label
      v-if="label"
      :data-test="dataTest + '-label'"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      for="number-input"
    >{{ label }}</label>
    <div class="relative rounded-md shadow-sm">
      <input
        id="email-input"
        v-model="localValue"
        :class="{
          'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500':
            v?.$invalid,
          'text-gray-900 shadow-sm placeholder:text-gray-400':
            !v?.$invalid,
        }"
        :data-test="dataTest + '-input'"
        :disabled="disabled"
        :maxlength="maxLength"
        :placeholder="placeholder"
        :readonly="readonly"
        aria-describedby="helper-text-explanation"
        class="block w-full rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-inset focus:ring-tp-primary"
        type="email"
        @input="onInput"
      >
      <div
        v-if="v?.$invalid"
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <ExclamationCircleIcon
          class="size-5 text-red-500"
          aria-hidden="true"
        />
      </div>
    </div>

    <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">
      <slot name="info" />
    </p>

    <p class="mt-2 text-xs text-green-600 dark:text-green-400">
      <slot name="success" />
    </p>

    <span v-if="showError && v?.$invalid">
      <p
        v-for="(error, index) in v?.$silentErrors"
        :key="index"
        class="mt-2 text-xs text-red-600 dark:text-red-400"
      >
        <span
          :data-test="dataTest + '-email-error' + error.$uid"
          class="font-medium"
        >{{ error.$message }}</span>
      </p>
    </span>
  </div>
</template>
