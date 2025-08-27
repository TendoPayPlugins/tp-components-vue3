<script setup>
import { ref, computed } from "vue";
import VueTailwindDatepicker from "./DatePickerComponent/VueTailwindDatePicker.vue";

const modelArray = defineModel({type: Array, default: []})

const formatter = ref({
  date: 'YYYY-MM-DD',
  month: 'MMM',
  preview: 'MM/DD/YYYY'
})

const props = defineProps({
  disabled: {type: Boolean, default: false},
  dataTest: {type: String, required: true},
  placeholder: {type: String, default: 'Select'},
  v: {
    type: Object, default: () => {
    }
  },
  inline: {type: Boolean, default: false},
  showError: {type: Boolean, default: true},
})

const singleProxy = computed({
  get() {
    return modelArray.value?.[0] ?? null
  },
  set(val) {
    modelArray.value = val ? [val] : []
  }
})
</script>

<template>
  <vue-tailwind-datepicker
      v-model="singleProxy"
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
