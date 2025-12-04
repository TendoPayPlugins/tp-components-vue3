<template>
  <Story>
    <date-picker
      v-model="date"
    />
  </Story>
</template>

<script setup>
import { DatePicker } from '@/components'
import {ref} from "vue";
import dayjs from "dayjs";

const date = ref(dayjs().format('YYYY-MM-DD'))
</script>