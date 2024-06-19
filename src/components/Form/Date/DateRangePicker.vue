<script setup>
const emit = defineEmits(['update:modelValue'])

import {ref, watch} from "vue";
import VueTailwindDatepicker from "vue-tailwind-datepicker";

const localValue = defineModel({required: false, type: Array, default: [null, null]})

const formatter = ref({
  date: 'YYYY-MM-DD',
  month: 'MMM'
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
        const date = new Date();
        return [new Date(date.setDate(date.getDate() - 7)), new Date()];
      },
    },
    {
      label: "Past 1 month",
      atClick: () => {
        const date = new Date();
        return [new Date(date.setMonth(date.getMonth() - 1)), new Date()];
      },
    },
    {
      label: "Past 3 months",
      atClick: () => {
        const date = new Date();
        return [new Date(date.setMonth(date.getMonth() - 3)), new Date()];
      },
    },
    {
      label: "Past 6 months",
      atClick: () => {
        const date = new Date();
        return [new Date(date.setMonth(date.getMonth() - 6)), new Date()];
      },
    },
    {
      label: "Past 1 year",
      atClick: () => {
        const date = new Date();
        return [new Date(date.setFullYear(date.getFullYear() - 1)), new Date()];
      },
    },
  ];
};

watch(localValue, onInput);
</script>

<template>
  <div class="flex">
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