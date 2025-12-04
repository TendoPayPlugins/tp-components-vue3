<template>
  <Story>
    <date-range-picker
      v-model="dateTime"
      :time="true"
    />
  </Story>
</template>

<script setup>
import { DateRangePicker } from '@/components'
import {ref} from "vue";
import dayjs from "dayjs";

const dateTime = ref([
  dayjs().format('YYYY-MM-DD HH:mm'),
  dayjs().format('YYYY-MM-DD HH:mm')
]);
</script>