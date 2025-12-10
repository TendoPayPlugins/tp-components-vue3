<template>
  <Story>
    <input-phone-number
      v-model="text"
      :placeholder="placeholder"
      data-test="input-phone-number"
    />
  </Story>
</template>

<script setup>
import { InputPhoneNumber } from '@/components'
import {ref} from "vue";

const placeholder = ref('placeholder')
const text = ref('text');
</script>