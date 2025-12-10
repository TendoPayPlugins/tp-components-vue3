<template>
  <Story>
    <input-textarea
      v-model="text"
      :placeholder="placeholder"
      :label="label"
    />
  </Story>
</template>

<script setup>
import { InputTextarea } from '@/components'
import {ref} from "vue";

const placeholder = ref('placeholder')
const text = ref('text');
const label = ref('Label');
</script>