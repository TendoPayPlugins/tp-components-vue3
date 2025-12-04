<template>
  <Story>
    <input-text
      v-model="text"
      :placeholder="placeholder"
    />
  </Story>
</template>

<script setup>
import { InputText } from '@/components'
import {ref} from "vue";

const placeholder = ref('placeholder')
const text = ref('text');
</script>