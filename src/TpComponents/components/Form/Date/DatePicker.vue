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
    validator: {
        type: Object,
        default: () => {}
    },
    inline: {
        type: Boolean,
        default: false,
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
</template>