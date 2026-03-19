<template>
  <Story>
    <date-range-picker
      v-model="date"
      :disable-date="dDate"
    />
  </Story>
</template>

<script setup>
import { DateRangePicker } from '@/components'
import {ref} from "vue";
import dayjs from "dayjs";

const date = ref([
  dayjs().format('YYYY-MM-DD'),
  dayjs().format('YYYY-MM-DD')
]);

function dDate(date) {
  return date > new Date(2025, 0, 1)
}
</script>