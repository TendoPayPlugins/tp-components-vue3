<script setup>
import { watch } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "",
  },
  min: {
    type: Number,
    default: null,
  },
  max: {
    type: Number,
    default: null,
  },
  step: {
    type: Number,
    default: 1,
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
    default: () => {},
  },
  dataTest: {
    type: String,
    required: true,
  },
});

const localValue = defineModel({ required: true })

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
      for="number-input"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      :data-test="dataTest + '-label'"
      >{{ label }}</label
    >
      <div class="relative mt-2 rounded-md shadow-sm">

        <input
        type="number"
        :step="step"
        :min="min"
        :max="max"
        v-model="localValue"
        :disabled="disabled"
        :readonly="readonly"
        id="number-input"
        aria-describedby="helper-text-explanation"
        class="block w-full rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-inset focus:ring-tp-primary"
        :class="{
          'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500':
            v?.$invalid,
          'text-gray-900 shadow-sm placeholder:text-gray-400':
            !v?.$invalid,
        }"
        :placeholder="placeholder"
        @input="onInput"
        :data-test="dataTest + '-input'"
      />
    </div>
    <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">
      <slot name="info" />
    </p>

    <p class="mt-2 text-xs text-green-600 dark:text-green-400">
      <slot name="success" />
    </p>

    <span v-if="showError && v?.$invalid">
      <p
        v-for="error in v?.$silentErrors"
        class="mt-2 text-xs text-red-600 dark:text-red-400"
      >
        <span class="font-medium" :data-test="dataTest + '-email-error' + error.$uid">{{ error.$message }}</span>
      </p>
    </span>
  </div>
</template>
