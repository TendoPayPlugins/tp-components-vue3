<script setup>
import {watch} from "vue";
import {ExclamationCircleIcon} from "@heroicons/vue/24/outline"

const localValue = defineModel({type: String, default: null, required: false})

const props = defineProps({
  value: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  showError: {
    type: Boolean,
    default: true,
  },
  maxLength: {
    type: Number,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "",
  },
  v: {
    type: Object,
    default: () => null,
  },
  dataTest: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const onInput = () => {
  if (localValue.value === "") {
    localValue.value = null
  }
  // noinspection JSCheckFunctionSignatures
  emit("update:modelValue", localValue.value);
};

watch(localValue, onInput);

</script>

<template>
  <div class="relative">
    <label
      v-if="label"
      :data-test="dataTest + '-label'"
      :for="dataTest"
      class="block mb-2 text-sm font-medium text-gray-900"
    >{{ label }}</label>
    <input
      :id="dataTest"
      :disabled="disabled"
      v-model="localValue"
      class="block w-full rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-inset"
      :class="{
        'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500':
          v?.$invalid,
        'text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tp-primary':
          !v?.$invalid,
      }"
      :data-test="dataTest + '-input'"
      :placeholder="placeholder"
      :maxlength="maxLength || null"
      :readonly="readonly"
      type="text"
    >

    <div
      v-if="v?.$invalid"
      class="absolute right-1.5 top-1.5"
    >
      <ExclamationCircleIcon class="size-5 text-red-500" />
    </div>

    <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">
      <slot name="info" />
    </p>

    <p class="mt-2 text-xs text-green-600 dark:text-green-400">
      <slot name="success" />
    </p>

    <span v-if="showError && v?.$invalid">
      <span
        v-for="(error, index) in v?.$silentErrors"
        :key="index"
        class="mt-2 text-xs text-red-600 dark:text-red-400"
      >
        <span
          :data-test="dataTest + '-email-error' + error.$uid"
          class="font-medium"
        >{{ error.$message }}</span>
      </span>
    </span>
  </div>
</template>
