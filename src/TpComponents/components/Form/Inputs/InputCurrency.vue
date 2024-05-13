<script setup>
import {watch} from "vue";

const localValue = defineModel({ required: true })

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
    default: () => {}
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
    <label v-if="props.label" for="price" class="block text-sm font-medium leading-6 text-gray-900">
      <slot name="label">{{ label }}</slot>
    </label>
    <div class="relative mt-2 rounded-md shadow-sm">
      <input v-model="localValue" type="number" :step="step" :min="min" :max="max" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" :placeholder="placeholder" aria-describedby="price-currency" />
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <span class="text-gray-500 sm:text-sm" id="price-currency">{{ props.currency }}</span>
      </div>
    </div>
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