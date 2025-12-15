<script setup>
import { computed, watch } from "vue";
import VueTailwindDatepicker from "./DatePickerComponent/VueTailwindDatePicker.vue";
const emit = defineEmits(['input', 'update:modelValue'])

const localValue = defineModel({type: Array, default: []})

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
  label: {
    type: String,
    default: () => null,
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
  },
  time: {
    type: Boolean,
    default: () => false
  }
})

const formatter = computed(() => {
  if (props.time) {
    return {
      date: 'YYYY-MM-DD HH:mm',
      month: 'MMM',
      preview: 'MM/DD/YYYY HH:mm A',
    }
  } else {
    return {
      date: 'YYYY-MM-DD',
      month: 'MMM',
      preview: 'MM/DD/YYYY',
    }
  }
})

const onInput = () => {
  // noinspection JSCheckFunctionSignatures
  emit("update:modelValue", localValue.value);
};

watch(localValue, onInput);
</script>

<template>
  <label
    v-if="label"
    :data-test="dataTest + '-label'"
    :for="dataTest"
    class="tc-block tc-mb-2 tc-text-base tc-font-medium tc-text-gray-900"
  >{{ label }} <span
    v-if="v?.required"
    class="tc-text-red-500"
  >*</span></label>
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
      class="tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
    >
      <span
        :data-test="dataTest + '-email-error' + error.$uid"
        class="tc-font-medium"
      >{{ error.$message }}</span>
    </p>
  </span>
</template>