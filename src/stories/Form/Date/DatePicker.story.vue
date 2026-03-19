<template>
  <Story>
    <date-picker
      v-model="date"
      label="Label"
      :disable-date="dDate"
    />
  </Story>
</template>

<script setup>
import { DatePicker } from '@/components'
import {ref} from "vue";
import dayjs from "dayjs";

const date = ref(dayjs().format('YYYY-MM-DD'))

function dDate(date) {
  return date > new Date(2026, 6, 1)
}

</script>