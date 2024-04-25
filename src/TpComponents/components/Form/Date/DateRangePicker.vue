<script setup>
const emit = defineEmits(['input'])

import {ref, watch} from "vue";
import VueTailwindDatepicker from "vue-tailwind-datepicker";

// const dateValue = ref([]);

const dateValue = defineModel([])

const formatter = ref({
    date: 'YYYY-MM-DD',
    month: 'MMM'
})

const props = defineProps({
  value: {
    type: Array,
    default: []
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: 'Select'
  },
  validator: {
    type: Object,
    default: () => {}
  },
  inline: {
    type: Boolean,
    default: false,
  }
})

const onInput = () => {
    emit("update:value", dateValue.value);
};

watch(dateValue, onInput);
</script>

<template>
    <div>
        <vue-tailwind-datepicker
            v-model="dateValue"
            :disabled="disabled"
            :placeholder="placeholder"
            @update:modelValue="onInput"
            :formatter="formatter"
            :no-input="inline"
            use-range
            as-single
        />
    </div>
</template>