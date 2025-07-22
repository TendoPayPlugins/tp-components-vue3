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
    default: () => ({}),
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
  shortcuts: {
    type: [Function, Array],
    default: undefined,
    required: false
  },
})

const formatter = ref({
  date: 'YYYY-MM-DD',
  month: 'MMM',
  preview: 'MM/DD/YYYY',
})

const defaultShortcuts = computed(() => [
  {
    label: "Past 1 week",
    atClick: () => [dayjs().subtract(6, 'day').startOf('day').toDate(), dayjs().endOf('day').toDate()],
  },
  {
    label: "Past 1 month",
    atClick: () => [dayjs().subtract(1, 'month').startOf('day').toDate(), dayjs().endOf('day').toDate()],
  },
  {
    label: "Past 3 months",
    atClick: () => [dayjs().subtract(3, 'month').startOf('day').toDate(), dayjs().endOf('day').toDate()],
  },
  {
    label: "Past 6 months",
    atClick: () => [dayjs().subtract(6, 'month').startOf('day').toDate(), dayjs().endOf('day').toDate()],
  },
  {
    label: "Past 1 year",
    atClick: () => [dayjs().subtract(1, 'year').startOf('day').toDate(), dayjs().endOf('day').toDate()],
  },
])

// fallback: jeśli shortcuty z props, użyj ich, inaczej computed default
const computedShortcuts = computed(() => {
  if (props.shortcuts) return props.shortcuts
  return defaultShortcuts.value
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
        :shortcuts="computedShortcuts"
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
