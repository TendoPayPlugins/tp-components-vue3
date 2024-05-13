<script setup>
const emit = defineEmits(['input'])

import {ref, watch} from "vue";
import VueTailwindDatepicker from "vue-tailwind-datepicker";

const localValue = defineModel({ required: true })

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
    default: () => {}
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
    emit("update:modelValue", localValue.value);
};

watch(localValue, onInput);
</script>

<template>
    <div>
        <vue-tailwind-datepicker
            v-model="localValue"
            :disabled="disabled"
            :placeholder="placeholder"
            :formatter="formatter"
            :no-input="inline"
            use-range
            as-single
        />
        <span v-if="showError && v?.$invalid">
          <p
              v-for="error in v?.$silentErrors"
              class="mt-2 text-xs text-red-600 dark:text-red-400"
          >
            <span class="font-medium" :data-test="dataTest + '-email-error' + error.$uid">{{ error.$message }}</span>
          </p>
    </span>
    </div>
</template>