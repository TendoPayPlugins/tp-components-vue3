<script setup>
import { useVuelidate } from "@vuelidate/core";
import {reactive, watch} from "vue";

const localValue = defineModel({ required: true })

const props = defineProps({
  label: {
    type: String,
    default: null,
    required: false,
  },
  value: {
    type: String,
    default: null,
    required: false,
  },
  placeholder: {
    type: String,
    default: null,
    required: false,
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
  readonly: {
    type: Boolean,
    default: false,
  },
  v: {
    type: Object,
    default: () => {},
  },
  dataTest: {
    type: String,
    required: true,
  }
});

const emit = defineEmits(["update:value"]);

const onInput = () => {
  emit("update:value", localValue.value);
};

watch(localValue, onInput);
</script>

<template>
  <div>
    <label
      v-if="label"
      for="input-textarea"
      class="block text-sm font-medium leading-6 text-gray-900"
      :data-test="dataTest + '-label'"
      >{{ label }}</label
    >
    <div class="mt-2">
      <textarea
        v-model="localValue"
        @input="onInput"
        rows="4"
        :placeholder="placeholder"
        name="comment"
        :maxlength="maxLength"
        :disabled="disabled"
        :readonly="readonly"
        :data-test="dataTest + '-textarea'"
        id="input-textarea"
        class="block w-full rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-inset focus:ring-tp-primary"
        :class="{
          'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500':
            v?.$invalid,
          'text-gray-900 shadow-sm placeholder:text-gray-400':
            !v?.$invalid,
        }"
      >{{ value }}</textarea
      >
    </div>
    <span v-if="showError && v?.$invalid">
      <p
        v-for="error in v?.$silentErrors"
        class="mt-2 text-xs text-red-600 dark:text-red-400"
      >
        <span class="font-medium" :data-test="dataTest + '-email-error' + error.$uid">{{ error.$message }}</span>
      </p>

      <p
        v-if="v?.maxLength?.$invalid"
        class="mt-2 text-xs text-red-600 dark:text-red-400"
      >
        <span class="font-medium" :data-test="dataTest + '-maxLength-error'">{{
          v?.maxLength.$message
        }}</span>
      </p>

      <p
        v-if="v?.minLength?.$invalid"
        class="mt-2 text-xs text-red-600 dark:text-red-400"
      >
        <span class="font-medium" :data-test="dataTest + '-minLength-error'">{{
            v?.minLength.$message
            }}</span>
      </p>
    </span>
  </div>
</template>
