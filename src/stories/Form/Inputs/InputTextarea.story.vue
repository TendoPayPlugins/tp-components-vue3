<template>
  <Story>
    <input-textarea
      v-model="text"
      :placeholder="placeholder"
    />
  </Story>
</template>

<script setup>
import { InputTextarea } from '@/components'
import {ref} from "vue";

const placeholder = ref('placeholder')
const text = ref('text');
</script>