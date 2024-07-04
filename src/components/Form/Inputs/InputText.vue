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
  <div class="tc-relative">
    <label
      v-if="label"
      :data-test="dataTest + '-label'"
      :for="dataTest"
      class="tc-block tc-mb-2 tc-text-sm tc-font-medium tc-text-gray-900"
    >{{ label }} <span
      v-if="v?.required"
      class="tc-text-red-500"
    >*</span></label>
    <input
      :id="dataTest"
      v-model="localValue"
      :disabled="disabled"
      class="tc-block tc-w-full tc-rounded-md tc-border-0 tc-py-1.5 tc-ring-1 tc-ring-inset tc-ring-gray-300 sm:tc-text-sm sm:tc-leading-6 focus:tc-ring-2 focus:tc-ring-inset"
      :class="{
        'tc-text-red-900 tc-ring-red-300 placeholder:tc-text-red-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500':
          v?.$invalid,
        'tc-text-gray-900 tc-shadow-sm placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple':
          !v?.$invalid,
          'disabled': disabled
      }"
      :data-test="dataTest + '-input'"
      :placeholder="placeholder"
      :maxlength="maxLength || null"
      :readonly="readonly"
      type="text"
    >

    <div
      v-if="v?.$invalid"
      :class="`tc-absolute tc-right-2 ${ label ? 'tc-top-9' : 'tc-top-2'}`"
    >
      <ExclamationCircleIcon class="tc-size-5 tc-text-red-500" />
    </div>

    <span v-if="showError && v?.$invalid" class="block tc-mb-2">
      <span
        v-for="(error, index) in v?.$silentErrors"
        :key="index"
        class="tc-mt-2 tc-text-xs tc-text-red-600 dark:tc-text-red-400"
      >
        <span
          :data-test="dataTest + '-error' + error.$uid"
          class="tc-font-medium"
        >{{ error.$message }}</span>
      </span>
    </span>
  </div>
</template>
