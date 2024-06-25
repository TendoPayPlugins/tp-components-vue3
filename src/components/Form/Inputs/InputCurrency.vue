<script setup>
import {watch} from "vue";
import {ExclamationCircleIcon} from '@heroicons/vue/24/outline'

const localValue = defineModel({type: [Number, String], default: null, required: false})

const props = defineProps({
  currency: {
    type: String,
    default: 'PHP'
  },
  label: {
    type: String,
    required: false,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    required: false,
    default: null,
  },
  dataTest: {
    type: String,
    required: true,
  },
  v: {
    type: Object,
    default: () => {
    }
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
    default: 0.01,
  }
})

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
      v-if="props.label"
      class="tc-block tc-text-sm tc-font-medium tc-leading-6 tc-text-gray-900"
      for="price"
    >
      <slot name="label">{{ label }} <span v-if="v?.required" class="text-red-500">*</span></slot>
    </label>
    <div class="tc-relative tc-mt-2 tc-rounded-md tc-shadow-sm">
      <input
        id="price"
        v-model="localValue"
        :disabled="disabled"
        :max="max"
        :min="min"
        :placeholder="placeholder"
        :step="step"
        aria-describedby="price-currency"
        class="tc-block tc-w-full tc-rounded-md tc-border-0 tc-py-1.5 tc-pl-7 tc-pr-12 tc-text-gray-900 tc-ring-1 tc-ring-inset tc-ring-gray-300 placeholder:tc-text-gray-400 sm:tc-text-sm sm:tc-leading-6"
        :class="{
          'tc-text-red-900 tc-ring-red-300 placeholder:tc-text-red-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500':
            v?.$invalid,
          'tc-text-gray-900 tc-shadow-sm placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tp-primary':
            !v?.$invalid,
        }"
        name="price"
        type="number"
      >
      <div class="tc-pointer-events-none tc-absolute tc-inset-y-0 tc-right-0 tc-flex tc-items-center tc-pr-3">
        <span
          id="price-currency"
          class="tc-text-gray-500 sm:tc-text-sm"
        >{{ props.currency }}</span>
      </div>

      <div
        v-if="v?.$invalid"
        class="tc-absolute tc-right-16 tc-top-1.5"
      >
        <ExclamationCircleIcon class="tc-size-5 tc-text-red-500" />
      </div>
    </div>
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
