<script setup>
import {watch} from "vue";
import {ExclamationCircleIcon} from '@heroicons/vue/24/outline'

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
    default: () => {
    },
  },
  dataTest: {
    type: String,
    required: true,
  },
});

const localValue = defineModel({required: false, default: null, type: Number})

const emit = defineEmits(["update:modelValue"]);

const onInput = () => {
  // noinspection JSCheckFunctionSignatures
  emit("update:modelValue", localValue.value);
};

watch(localValue, onInput);
</script>

<template>
  <div>
    <label
      v-if="label"
      :data-test="dataTest + '-label'"
      class="tc-block tc-mb-2 tc-text-sm tc-font-medium tc-text-gray-900 dark:tc-text-white"
      for="number-input"
    >{{ label }} <span
      v-if="v?.required"
      class="tc-text-red-500"
    >*</span></label>
    <div class="tc-relative tc-mt-2 tc-rounded-md tc-shadow-sm">
      <input
        id="number-input"
        v-model="localValue"
        class="tc-block tc-w-full tc-rounded-md tc-border-0 tc-py-1.5 tc-ring-1 tc-ring-inset tc-ring-gray-300 sm:tc-text-sm sm:tc-leading-6 focus:tc-ring-2 focus:tc-ring-inset"
        :class="{
          'tc-text-red-900 tc-ring-red-300 placeholder:tc-text-red-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500':
            v?.$invalid,
          'tc-text-gray-900 tc-shadow-sm placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple':
            !v?.$invalid,
        }"
        :data-test="dataTest + '-input'"
        :disabled="disabled"
        :max="max"
        :min="min"
        :placeholder="placeholder"
        :readonly="readonly"
        :step="step"
        aria-describedby="helper-text-explanation"
        type="number"
        @input="onInput"
      >

      <div
        v-if="v?.$invalid"
        :class="`tc-absolute tc-right-1.5 ${ label ? 'tc-top-8' : 'tc-top-1.5'}`"
      >
        <ExclamationCircleIcon class="tc-size-5 tc-text-red-500" />
      </div>
    </div>
    <p class="tc-mt-2 tc-text-xs tc-text-gray-500 dark:tc-text-gray-400">
      <slot name="info" />
    </p>

    <p class="tc-mt-2 tc-text-xs tc-text-green-600 dark:tc-text-green-400">
      <slot name="success" />
    </p>

    <span v-if="showError && v?.$invalid">
      <p
        v-for="(error, index) in v?.$silentErrors"
        :key="index"
        class="tc-mt-2 tc-text-xs tc-text-red-600 dark:tc-text-red-400"
      >
        <span
          :data-test="dataTest + '-email-error' + error.$uid"
          class="tc-font-medium"
        >{{ error.$message }}</span>
      </p>
    </span>
  </div>
</template>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}
</style>