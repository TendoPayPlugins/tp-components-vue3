<script setup>
const emit = defineEmits(['input'])

import { ref } from "vue";
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
    }
})

const onInput = (value) => {
    emit("input", value);
};
</script>

<template>
    <vue-tailwind-datepicker
        v-model="dateValue"
        :disabled="disabled"
        :placeholder="placeholder"
        @update:modelValue="onInput"
        as-single
        :formatter="formatter"
        :no-input="inline"
    />
    <span v-if="showError && v?.$invalid">
      <p
          v-for="error in v?.$silentErrors"
          class="mt-2 text-xs text-red-600 dark:text-red-400"
      >
        <span class="font-medium" :data-test="dataTest + '-email-error' + error.$uid">{{ error.$message }}</span>
      </p>
    </span>
</template>