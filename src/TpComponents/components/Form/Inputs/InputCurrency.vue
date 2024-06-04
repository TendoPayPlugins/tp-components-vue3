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
  emit("update:modelValue", localValue.value);
};

watch(localValue, onInput);
</script>

<template>
  <div>
    <label
      v-if="props.label"
      class="block text-sm font-medium leading-6 text-gray-900"
      for="price"
    >
      <slot name="label">{{ label }}</slot>
    </label>
    <div class="relative mt-2 rounded-md shadow-sm">
      <input
        id="price"
        v-model="localValue"
        :max="max"
        :min="min"
        :placeholder="placeholder"
        :step="step"
        aria-describedby="price-currency"
        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        :class="{
          'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500':
            v?.$invalid,
          'text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tp-primary':
            !v?.$invalid,
        }"
        name="price"
        type="number"
      >
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <span
          id="price-currency"
          class="text-gray-500 sm:text-sm"
        >{{ props.currency }}</span>
      </div>

      <div
        v-if="v?.$invalid"
        class="absolute right-16 top-1.5"
      >
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
    </span>
  </div>
</template>
