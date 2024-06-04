<script setup>
const emit = defineEmits(['input'])

import {ref} from "vue";
import VueTailwindDatepicker from "vue-tailwind-datepicker";

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
      class="mt-2 text-xs text-red-600 dark:text-red-400"
    >
      <span
        :data-test="dataTest + '-email-error' + error.$uid"
        class="font-medium"
      >{{ error.$message }}</span>
    </p>
  </span>
</template>