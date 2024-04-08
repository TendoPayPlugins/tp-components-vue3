<script setup>
const emit = defineEmits(['input'])

import { ref } from "vue";
import VueTailwindDatepicker from "vue-tailwind-datepicker";

const dateValue = ref([]);
</script>

<template>
    <vue-tailwind-datepicker v-model="dateValue" />
</template>