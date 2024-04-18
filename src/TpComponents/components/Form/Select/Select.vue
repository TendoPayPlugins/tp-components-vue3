<script setup>
import {reactive, watch} from "vue";
import { useVuelidate } from "@vuelidate/core";

const localValue = defineModel({ required: true })

const emit = defineEmits(["update:value"]);

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  value: {
    type: [String, Array],
    default: [],
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
  validator: {
    type: Object,
    default: () => {},
  },
  dataTest: {
    type: String,
    required: true,
  },
});

const rules = {
  localValue: props.validator || {},
};

const v$ = useVuelidate(rules, { localValue });

const onInput = () => {
  emit("update:value", localValue.value);
};

watch(localValue, onInput);
</script>

<template>
  <div>
    <label
      v-if="label"
      :for="dataTest"
      :data-test="dataTest + '-label'"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >{{ label }}</label
    >
    <select
      :multiple="multiple"
      :id="dataTest"
      :disabled="disabled"
      v-model="v$.localValue.$model"
      :data-test="dataTest + '-select'"
      @change="onInput"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-tp-primary block w-full p-2.0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option v-if="placeholder" :value="[]" disabled hidden>
        {{ placeholder }}
      </option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">
      <slot name="info" />
    </p>

    <p class="mt-2 text-xs text-green-600 dark:text-green-400">
      <slot name="success" />
    </p>
    <span v-if="showError">
      <p
        v-if="v$.localValue?.required?.$invalid"
        class="mt-2 text-xs text-red-600 dark:text-red-400"
      >
        <span class="font-medium">{{ v$.localValue.required.$message }}</span>
      </p>
      <p class="mt-2 text-xs text-red-600 dark:text-red-400">
        <span class="font-medium"><slot name="error" /></span>
      </p>
    </span>
  </div>
</template>
