<script setup>
import dayjs from "dayjs"
import { ref, watch, computed } from "vue"
import VueTailwindDatepicker from "./DatePickerComponent/VueTailwindDatePicker.vue"

const emit = defineEmits(['update:modelValue'])

const localValue = defineModel({ required: false, type: Array, default: [null, null] })

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: 'Select',
  },
  v: {
    type: Object,
    default: () => {
    },
  },
  inline: {
    type: Boolean,
    default: false,
  },
  showError: {
    type: Boolean,
    default: true,
  },
  dataTest: {
    type: String,
    required: true,
  },
  shortcutsOverride: {
    type: Function,
    default: undefined,
  },
})

const defaultShortcuts = () =>  [
  {
    label: "Past 1 week",
    atClick: () => [dayjs().startOf('week'), dayjs().endOf('week')],
  },
  {
    label: "Past 1 month",
    atClick: () => [dayjs().startOf('month'), dayjs().endOf('month')],
  },
  {
    label: "Past 3 months",
    atClick: () => [dayjs().subtract(2, 'months').startOf('month'), dayjs().endOf('month')],
  },
  {
    label: "Past 6 months",
    atClick: () => [dayjs().subtract(5, 'months').startOf('month'), dayjs().endOf('month')],
  },
  {
    label: "Past 1 year",
    atClick: () => [dayjs().subtract(11, 'months').startOf('month'), dayjs().endOf('month')],
  },
]

const formatter = ref({
  date: 'YYYY-MM-DD',
  month: 'MMM',
  preview: 'MM/DD/YYYY',
})

const onInput = () => {
  emit("update:modelValue", localValue.value)
}

watch(localValue, onInput)
</script>

<template>
  <div class="tc-flex">
    <vue-tailwind-datepicker
        v-model="localValue"
        :disabled="disabled"
        :formatter="formatter"
        :no-input="inline"
        :placeholder="placeholder"
        :shortcuts="props.shortcutsOverride || defaultShortcuts"
        as-single
        input-classes=""
        use-range
    />
    <span v-if="showError && v?.$invalid">
      <p
          v-for="(error, index) in v?.$silentErrors"
          :key="index"
          class="tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
      >
        <span
            :data-test="dataTest + '-error' + error.$uid"
            class="tc-font-medium"
        >
          {{ error.$message }}
        </span>
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
