<template>
  <Story>
    <date-range-picker
      v-model="date"
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
</script>