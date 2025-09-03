<script setup>
import {watch} from "vue";

const localValue = defineModel({default: null, required: false, type: [String, Array, Number]})

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  showError: {
    type: Boolean,
    default: true,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array,
    default: () => [],
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
      :for="dataTest"
      class="tc-block tc-mb-2 tc-text-base tc-font-medium tc-text-gray-900"
    >{{ label }} <span
      v-if="v?.required"
      class="tc-text-red-500"
    >*</span></label>
    <select
        :id="dataTest"
        v-model="localValue"
        :data-test="dataTest + '-select'"
        :disabled="disabled"
        :multiple="multiple"
        class="tc-block tc-w-full tc-rounded-lg tc-px-4 tc-py-2 tc-text-gray-900 tc-text-base border border-gray-400 sm:border-0"
        :class="{
    'tc-border-red-300 tc-text-red-900 tc-ring-red-300 placeholder:tc-text-red-300 focus:tc-border-red-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500':
      v?.$invalid,
    'tc-border-0 tc-ring-1 tc-ring-inset tc-ring-gray-300 tc-shadow-sm placeholder:tc-text-black focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple':
      !v?.$invalid,
    'disabled': disabled
  }"
    >
      <option
          v-if="placeholder"
          :value="[]"
          disabled
          hidden
          class="whitespace-nowrap"
      >
        {{ placeholder }}
      </option>
      <option
          v-for="(option, index) in options"
          :key="index"
          :value="option.value"
          class="whitespace-nowrap"
      >
        {{ option.label }}
      </option>
    </select>
    <template v-if="$slots.info">
      <p class="tc-mt-2 tc-text-sm tc-text-gray-500 dark:tc-text-gray-400">
        <slot name="info" />
      </p>
    </template>

    <template v-if="$slots.success">
      <p class="tc-mt-2 tc-text-sm tc-text-green-600 dark:tc-text-green-400">
        <slot name="success" />
      </p>
    </template>

    <span
      v-if="showError && v?.$invalid"
      class="block tc-mb-2"
    >
      <p
        v-for="(error, index) in v?.$silentErrors"
        :key="index"
        class="tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
      >
        <span
          :data-test="dataTest + '-email-error' + error.$uid"
          class="tc-font-medium"
        >{{ error.$message }}</span>
      </p>
    </span>
  </div>
</template>
