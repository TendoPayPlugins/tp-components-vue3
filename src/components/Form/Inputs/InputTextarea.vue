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
      class="tc-block tc-text-sm tc-font-medium tc-leading-6 tc-text-gray-900"
      for="input-textarea"
    >{{ label }} <span
      v-if="v?.required"
      class="tc-text-red-500"
    >*</span></label>
    <div class="tc-relative tc-mt-2">
      <textarea
        id="input-textarea"
        v-model="localValue"
        class="tc-block tc-w-full tc-rounded-md tc-border-0 tc-py-1.5 tc-ring-1 tc-ring-inset tc-ring-gray-300 sm:tc-text-sm sm:tc-leading-6"
        :class="{
          'tc-text-red-900 tc-ring-red-300 placeholder:tc-text-red-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500':
            v?.$invalid,
          'tc-text-gray-900 tc-shadow-sm placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple':
            !v?.$invalid,
         'disabled': disabled
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

      <div
        v-if="v?.$invalid"
        :class="`tc-absolute tc-right-2 ${ label ? 'tc-top-9' : 'tc-top-2'}`"
      >
        <ExclamationCircleIcon class="tc-size-5 tc-text-red-500" />
      </div>
    </div>

    <span v-if="showError && v?.$invalid" class="block tc-mb-2">
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

      <p
        v-if="v?.maxLength?.$invalid"
        class="tc-mt-2 tc-text-xs tc-text-red-600 dark:tc-text-red-400"
      >
        <span
          :data-test="dataTest + '-maxLength-error'"
          class="tc-font-medium"
        >{{
          v?.maxLength.$message
        }}</span>
      </p>

      <p
        v-if="v?.minLength?.$invalid"
        class="tc-mt-2 tc-text-xs tc-text-red-600 dark:tc-text-red-400"
      >
        <span
          :data-test="dataTest + '-minLength-error'"
          class="tc-font-medium"
        >{{
          v?.minLength.$message
        }}</span>
      </p>
    </span>
  </div>
</template>
