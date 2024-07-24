<script setup>
import {ref, watch} from "vue";
import VueTailwindDatepicker from "./DatePickerComponent/VueTailwindDatePicker.vue";
const emit = defineEmits(['input', 'update:modelValue'])

const localValue = defineModel({type: Array, default: []})

const formatter = ref({
  date: 'YYYY-MM-DD',
  month: 'MMM',
  preview: 'MM/DD/YYYY'
})

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  dataTest: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: 'Select'
  },
  v: {
    type: Object,
    default: () => {
    }
  },
  inline: {
    type: Boolean,
    default: false,
  },
  showError: {
    type: Boolean,
    default: true
  }
})

const onInput = () => {
  // noinspection JSCheckFunctionSignatures
  emit("update:modelValue", localValue.value);
};

watch(localValue, onInput);
</script>

<template>
  <vue-tailwind-datepicker
    v-model="localValue"
    :disabled="disabled"
    :formatter="formatter"
    :no-input="inline"
    :placeholder="placeholder"
    as-single
  />
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
</template>