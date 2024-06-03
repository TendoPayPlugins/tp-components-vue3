<script setup>
import {defineEmits, defineModel, watch} from "vue";
import {ExclamationCircleIcon} from '@heroicons/vue/24/outline'

const localValue = defineModel({type: String, default: null, required: false })

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
    default: () => {
    },
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
      class="block text-sm font-medium leading-6 text-gray-900"
      for="input-textarea"
    >{{ label }}</label>
    <div class="relative mt-2">
      <textarea
        id="input-textarea"
        v-model="localValue"
        class="block w-full rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
        :class="{
          'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500':
            v?.$invalid,
          'text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tp-primary':
            !v?.$invalid,
        }"
        :data-test="dataTest + '-textarea'"
        :disabled="disabled"
        :maxlength="maxLength"
        :placeholder="placeholder"
        :readonly="readonly"
        name="comment"
        rows="4"
        @input="onInput"
      />

      <div v-if="v?.$invalid" class="absolute right-1.5 top-1.5">
        <ExclamationCircleIcon class="size-5 text-red-500" />
      </div>
    </div>

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

      <p
        v-if="v?.maxLength?.$invalid"
        class="mt-2 text-xs text-red-600 dark:text-red-400"
      >
        <span
          :data-test="dataTest + '-maxLength-error'"
          class="font-medium"
        >{{
          v?.maxLength.$message
        }}</span>
      </p>

      <p
        v-if="v?.minLength?.$invalid"
        class="mt-2 text-xs text-red-600 dark:text-red-400"
      >
        <span
          :data-test="dataTest + '-minLength-error'"
          class="font-medium"
        >{{
          v?.minLength.$message
        }}</span>
      </p>
    </span>
  </div>
</template>
