<script setup>
import dayjs from "dayjs";

const emit = defineEmits(['update:modelValue'])

import {ref, watch} from "vue";
import VueTailwindDatepicker from "./DatePickerComponent/VueTailwindDatePicker.vue";

const localValue = defineModel({required: false, type: Array, default: [null, null]})

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
  },
  dataTest: {
    type: String,
    required: true
  }
})

const onInput = () => {
  // noinspection JSCheckFunctionSignatures
  emit("update:modelValue", localValue.value);
};

const customShortcuts = () => {
  return [
    {
      label: "Past 1 week",
      atClick: () => {
        return [dayjs().startOf('week'), dayjs().endOf('week')];
      },
    },
    {
      label: "Past 1 month",
      atClick: () => {
        return [dayjs().startOf('month'), dayjs().endOf('month')];
      },
    },
    {
      label: "Past 3 months",
      atClick: () => {
        return [dayjs().subtract(2, 'months').startOf('month'), dayjs().endOf('month')];
      },
    },
    {
      label: "Past 6 months",
      atClick: () => {
        return [dayjs().subtract(5, 'months').startOf('month'), dayjs().endOf('month')];
      },
    },
    {
      label: "Past 1 year",
      atClick: () => {
        return [dayjs().subtract(11, 'months').startOf('month'), dayjs().endOf('month')];
      },
    },
  ];
};

watch(localValue, onInput);
</script>

<template>
  <div class="tc-flex">
    <vue-tailwind-datepicker
      v-model="localValue"
      :disabled="disabled"
      :formatter="formatter"
      :no-input="inline"
      :placeholder="placeholder"
      :shortcuts="customShortcuts"
      as-single
      input-classes=""
      use-range
    />
    <span v-if="showError && v?.$invalid">
      <p
        v-for="(error, index) in v?.$silentErrors"
        :key="index"
        class="tc-mt-2 tc-text-xs tc-text-red-600 dark:tc-text-red-400"
      >
        <span
          :data-test="dataTest + '-error' + error.$uid"
          class="tc-font-medium"
        >{{ error.$message }}</span>
      </p>
    </span>
  </div>
</template>

<style>
@media only screen and (min-width: 600px) {
    .vtd-datepicker {
        width: 610px !important;
    }

    div:has(>div.vtd-datepicker) {
        max-width: 610px;
        max-height: 378px;
        position: relative !important;
    }
}

</style>