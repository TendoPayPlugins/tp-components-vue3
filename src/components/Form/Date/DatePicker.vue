<script setup>
const emit = defineEmits(['input'])

import {ref} from "vue";
import VueTailwindDatepicker from "./DatePickerComponent/VueTailwindDatePicker.vue";

const dateValue = ref([]);

const formatter = ref({
  date: 'YYYY-MM-DD',
  month: 'MMM'
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

const onInput = (value) => {
  emit('input', value);
};
</script>

<template>
  <vue-tailwind-datepicker
    v-model="dateValue"
    :disabled="disabled"
    :formatter="formatter"
    :no-input="inline"
    :placeholder="placeholder"
    as-single
    @update:model-value="onInput"
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